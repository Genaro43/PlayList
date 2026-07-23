import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KaraokeLine from './components/KaraokeText';
import RoseEffect from './components/RoseEffect';
import LottieEffect from './components/LottieEffect';
import { songLibrary } from './data/songs';

function App() {
  const [activeSongId, setActiveSongId] = useState(songLibrary[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // ESTADO PARA LA PAUSA
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const carouselRef = useRef(null);

  const isAutoScrolling = useRef(false);
  const autoScrollTimeout = useRef(null);
  const wheelTimeout = useRef(null);

  const activeSong = useMemo(() =>
    songLibrary.find(s => s.id === activeSongId) || songLibrary[0]
    , [activeSongId]);

  const lyricsData = activeSong.lyrics;

  // --- NAVEGACIÓN ---
  const navigateToSong = (songId) => {
    isAutoScrolling.current = true;
    setActiveSongId(songId);
    document.getElementById(`card-${songId}`)?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    if (autoScrollTimeout.current) clearTimeout(autoScrollTimeout.current);
    autoScrollTimeout.current = setTimeout(() => { isAutoScrolling.current = false; }, 500);
  };

  const playNextSong = () => {
    const currentIndex = songLibrary.findIndex(s => s.id === activeSongId);
    const nextSong = songLibrary[(currentIndex + 1) % songLibrary.length];
    setActiveSongId(nextSong.id);
  };

  const playPrevSong = () => {
    const currentIndex = songLibrary.findIndex(s => s.id === activeSongId);
    const prevIndex = currentIndex === 0 ? songLibrary.length - 1 : currentIndex - 1;
    setActiveSongId(songLibrary[prevIndex].id);
  };

  // --- CONTROLES Y EVENTOS DE AUDIO ---
  const stopAndReturnToPlaylist = () => {
    setIsPlaying(false);
    setIsPaused(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = activeSong.snippetStart || 0;
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) audioRef.current.play();
      else audioRef.current.pause();
    }
  };

  const handlePlayEvent = () => setIsPaused(false);
  const handlePauseEvent = () => setIsPaused(true);

  // --- ATAJOS Y FULLSCREEN ---
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => { });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => { });
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.code === 'Space') {
        e.preventDefault();
        if (isPlaying) togglePlayPause();
        else setIsPlaying(true);
      } else if (e.code === 'ArrowRight' && isPlaying) {
        if (audioRef.current) audioRef.current.currentTime = Math.min(totalDuration, audioRef.current.currentTime + 5);
      } else if (e.code === 'ArrowLeft' && isPlaying) {
        if (audioRef.current) audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 5);
      } else if (e.code === 'Escape' && isPlaying) {
        stopAndReturnToPlaylist();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying]);

  // --- RUEDA Y TOUCH DEL CAROUSEL ---
  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    if (wheelTimeout.current) return;
    const currentIndex = songLibrary.findIndex(s => s.id === activeSongId);
    let nextIndex = currentIndex;
    if (e.deltaY > 0 && currentIndex < songLibrary.length - 1) nextIndex++;
    else if (e.deltaY < 0 && currentIndex > 0) nextIndex--;
    if (nextIndex !== currentIndex) navigateToSong(songLibrary[nextIndex].id);
    wheelTimeout.current = setTimeout(() => { wheelTimeout.current = null; }, 400);
  };

  const handleCarouselScroll = (e) => {
    if (isAutoScrolling.current) return;
    const container = e.target;
    const centerPosition = container.scrollLeft + container.clientWidth / 2;
    let closestId = activeSongId;
    let minDistance = Infinity;
    container.querySelectorAll('.song-card').forEach(card => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(centerPosition - cardCenter);
      if (distance < minDistance) { minDistance = distance; closestId = card.dataset.id; }
    });
    if (closestId && closestId !== activeSongId) setActiveSongId(closestId);
  };

  const totalDuration = useMemo(() => {
    if (!lyricsData || lyricsData.length === 0) return 0;
    return lyricsData[lyricsData.length - 1].time + lyricsData[lyricsData.length - 1].duration;
  }, [lyricsData]);

  // --- BUCLE DE REPRODUCCIÓN ---
  useEffect(() => {
    let animationFrameId;
    const audioElement = audioRef.current;

    const updateProgress = () => {
      if (audioElement && isPlaying) {
        setCurrentTime(audioElement.currentTime);

        // Regresar a playlist cuando termina la canción
        if (audioElement.currentTime >= totalDuration && totalDuration > 0) {
          stopAndReturnToPlaylist();
          return;
        }
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    if (isPlaying) {
      audioElement.play().catch(e => console.error("Error reproduciendo:", e));
      animationFrameId = requestAnimationFrame(updateProgress);
    } else {
      if (audioElement) audioElement.pause();
    }

    return () => { if (animationFrameId) cancelAnimationFrame(animationFrameId); };
  }, [isPlaying, totalDuration]);

  useEffect(() => {
    if (!isPlaying) setTimeout(() => navigateToSong(activeSongId), 100);
  }, [isPlaying, activeSongId]);

  const handleSeek = (e) => {
    if (!progressBarRef.current || !audioRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = percentage * totalDuration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Cálculo de línea activa
  let activeLineIndex = lyricsData.findIndex((line, index) => {
    const nextLine = lyricsData[index + 1];
    return currentTime >= line.time && (!nextLine || currentTime < nextLine.time);
  });
  if (activeLineIndex === -1 && lyricsData.length > 0) activeLineIndex = 0;
  const activeLine = lyricsData[activeLineIndex] || null;
  let timeInLine = activeLine ? currentTime - activeLine.time : 0;

  const colorStyle = { color: activeSong.themeColor };

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden font-serif relative" style={colorStyle}>

      {/* AÑADIDOS LOS EVENTOS ONPLAY / ONPAUSE AL AUDIO */}
      <audio
        ref={audioRef}
        src={activeSong.audioSrc}
        preload="auto"
        onPlay={handlePlayEvent}
        onPause={handlePauseEvent}
      />

      <button
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 z-50 text-white/40 hover:text-white text-xs uppercase tracking-widest bg-black/40 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md transition-all cursor-pointer"
      >
        {isFullscreen ? '⛶ Salir' : '⛶ Pantalla Completa'}
      </button>

      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 text-4xl animate-bounce delay-1000">{"\u266A"}</div>
        <div className="absolute top-1/3 right-1/4 text-6xl animate-pulse">{"\u266B"}</div>
        <div className="absolute bottom-1/4 left-1/3 text-5xl animate-bounce">{"\u266A"}</div>
      </div>

      {!isPlaying ? (
        // --- PANTALLA COVER FLOW ---
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full overflow-hidden bg-neutral-950">
          <div className="text-center mb-4 px-6 z-30">
            <h1 className="text-4xl md:text-5xl font-serif italic font-bold text-white tracking-wide">PlayList</h1>
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-40 mt-2 font-sans">Selecciona tu tema favorito</p>
          </div>

          <div className="relative w-full h-[400px] flex items-center justify-center">
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-neutral-950 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-neutral-950 to-transparent z-20 pointer-events-none" />

            <div
              id="carousel-container"
              ref={carouselRef}
              onScroll={handleCarouselScroll}
              onWheel={handleWheel}
              className="relative flex items-center gap-4 md:gap-8 w-full h-full overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
              style={{ paddingLeft: 'calc(50vw - 128px)', paddingRight: 'calc(50vw - 128px)' }}
            >
              {songLibrary.map((song) => {
                const isActive = activeSongId === song.id;
                return (
                  <motion.div
                    id={`card-${song.id}`}
                    data-id={song.id}
                    key={song.id}
                    onClick={() => navigateToSong(song.id)}
                    animate={{ scale: isActive ? 1.15 : 0.9, opacity: isActive ? 1 : 0.3, y: isActive ? -10 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`song-card shrink-0 snap-center relative w-64 h-80 rounded-3xl cursor-pointer flex flex-col p-6 border overflow-hidden ${isActive ? 'border-white/30 z-30' : 'border-white/5 z-10'}`}
                    style={{ backgroundColor: '#0a0a0a', boxShadow: isActive ? `0 20px 40px rgba(0,0,0,0.8), 0 0 40px ${song.themeColor}20` : 'none' }}
                  >
                    <div className="absolute top-[-20%] left-[-20%] w-full h-full opacity-20 blur-3xl rounded-full pointer-events-none" style={{ backgroundColor: song.themeColor }} />
                    <div className="relative w-full h-36 flex items-center justify-center mt-2 mb-4">
                      <motion.div
                        animate={{ x: isActive ? 50 : 0, rotate: isActive ? 360 : 0, opacity: isActive ? 1 : 0 }}
                        transition={{ x: { type: "spring", stiffness: 100, damping: 15 }, rotate: { repeat: Infinity, duration: 4, ease: "linear" } }}
                        className="absolute w-28 h-28 rounded-full bg-neutral-900 shadow-xl flex items-center justify-center border-[3px] border-neutral-800"
                        style={{ backgroundImage: 'repeating-radial-gradient(circle, #111, #111 2px, #222 3px, #222 4px)' }}
                      >
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: song.themeColor }}>
                          <div className="w-2.5 h-2.5 bg-neutral-950 rounded-full" />
                        </div>
                      </motion.div>
                      <div className="relative z-10 w-32 h-32 rounded-xl shadow-2xl flex items-center justify-center border border-white/10" style={{ background: `linear-gradient(135deg, #1a1a1a, ${song.themeColor}60)` }}>
                        <span className="text-5xl opacity-80" style={{ color: song.themeColor, textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>{"\uD83C\uDFB5"}</span>
                      </div>
                    </div>
                    <div className="relative z-10 mt-auto text-center flex flex-col items-center">
                      {isActive && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-2">
                          <span className="text-[10px] font-mono border px-2 py-1 rounded-full uppercase tracking-widest" style={{ color: song.themeColor, borderColor: song.themeColor, backgroundColor: `${song.themeColor}10` }}>Selected</span>
                        </motion.div>
                      )}
                      <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md truncate w-full">{song.title}</h3>
                      <p className="text-xs uppercase tracking-[0.2em] opacity-60 font-sans truncate w-full">{song.artist}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => {
              const startAt = activeSong.snippetStart || 0;
              setCurrentTime(startAt);
              if (audioRef.current) audioRef.current.currentTime = startAt;
              setIsPlaying(true);
            }}
            className="mt-2 flex items-center justify-center w-32 h-14 bg-white text-black font-sans font-bold text-xs tracking-[0.2em] rounded-full uppercase shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_white] transition-shadow z-30 cursor-pointer"
          >
            PLAY
          </motion.button>
        </div>
      ) : (
        // --- PANTALLA REPRODUCCIÓN (KARAOKE) ---
        <div className="w-full h-full flex flex-col items-center justify-center p-4 absolute inset-0 text-center z-10 overflow-hidden">

          {/* FONDO AMBIENTAL */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center opacity-30">
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, -50, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute w-[40vw] h-[40vw] rounded-full blur-[120px]" style={{ backgroundColor: activeSong.themeColor, top: '-10%', left: '-10%' }} />
            <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], x: [0, -60, 60, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[50vw] h-[50vw] rounded-full blur-[150px]" style={{ backgroundColor: activeSong.themeColor, bottom: '-20%', right: '-10%' }} />
          </div>

          {/* --- AQUÍ ESTÁ EL MOTOR DE EFECTOS MÚLTIPLES --- */}
          <AnimatePresence>
            {activeSong.visualEffects?.map((effect, index) => {
              const isEffectActive = currentTime >= effect.startTime && currentTime <= effect.endTime;
              if (!isEffectActive) return null;

              return (
                <motion.div
                  key={`effect-${index}-${effect.type}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 2 } }}
                  className="absolute inset-0 z-0 pointer-events-none"
                >
                  {/* El Switch Mágico: Aquí agregarás tus nuevos componentes según su 'type' */}
                  {effect.type === 'rose' && <RoseEffect />}
                  {effect.type === 'lottie' && (
                    <LottieEffect animationName={effect.animationName} />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
          {/* --- FIN DEL MOTOR DE EFECTOS --- */}

          {/* CONTENEDOR DE LETRAS */}
          <div className="w-full max-w-5xl z-20 relative px-4 flex flex-col gap-8 items-center h-[60vh] justify-center mt-[-10vh]">
            <div className="flex flex-col items-center min-h-[150px] justify-end relative w-full">
              <AnimatePresence mode="wait">
                {activeLine ? (
                  <motion.div key={activeLineIndex} initial={{ opacity: 0, y: 20, scale: 0.95, filter: 'blur(10px)' }} animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -20, scale: 1.05, filter: 'blur(10px)' }} transition={{ duration: 0.4, ease: "easeOut" }} className="w-full flex justify-center py-2">
                    <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-center px-2 w-full drop-shadow-2xl">
                      <KaraokeLine text={activeLine.text} timeInLine={timeInLine} lineDuration={activeLine.duration} activeColor={activeLine.lineColor || activeSong.themeColor} isLineActive={true} />
                    </div>
                  </motion.div>
                ) : (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} className="text-4xl" style={{ color: activeSong.themeColor }}>{"\uD83C\uDFB5"}</motion.span>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-5 text-center items-center h-[160px] overflow-hidden w-full">
              {activeSong.isTranslated ? (
                <AnimatePresence mode="wait">
                  {activeLine?.translation && (
                    <motion.div key={`tr-${activeLineIndex}`} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 0.8, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }} className="text-2xl md:text-4xl font-medium italic drop-shadow-md tracking-wide" style={{ color: activeSong.themeColor || '#f3e5ab' }}>
                      {activeLine.translation}
                    </motion.div>
                  )}
                </AnimatePresence>
              ) : (
                <AnimatePresence>
                  {[1, 2, 3].map((offset) => {
                    const nextLine = lyricsData[activeLineIndex + offset];
                    if (!nextLine) return null;
                    const opacity = offset === 1 ? 0.6 : offset === 2 ? 0.3 : 0.1;
                    const scale = offset === 1 ? 1 : offset === 2 ? 0.9 : 0.8;
                    return (
                      <motion.p key={`pr-${activeLineIndex + offset}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: opacity, y: 0, scale: scale }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className={`font-medium ${offset === 1 ? 'text-2xl md:text-4xl' : 'text-xl md:text-3xl'}`}>
                        <KaraokeLine text={nextLine.text} timeInLine={0} lineDuration={nextLine.duration} activeColor={nextLine.lineColor || activeSong.themeColor} isLineActive={false} />
                      </motion.p>
                    );
                  })}
                </AnimatePresence>
              )}
            </div>
          </div>

          {/* MÓDULO DE CONTROLES INFERIOR */}
          <div className="absolute bottom-0 left-0 w-full pt-16 pb-8 px-6 md:px-12 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col items-center justify-end z-50">

            {/* Barra de Progreso y Tiempos */}
            <div className="flex items-center gap-4 w-full max-w-4xl mb-4">

              {/* --- TU IMPLEMENTACIÓN DEL TIEMPO (Modo Desarrollo) --- */}
              <span className={`text-xs font-mono opacity-80 text-right ${activeSong.isDevMode ? 'w-20 text-[10px] text-green-400 font-bold' : 'w-12'}`}>
                {activeSong.isDevMode
                  ? currentTime.toFixed(3)
                  : `${Math.floor(currentTime / 60)}:${(Math.floor(currentTime % 60)).toString().padStart(2, '0')}`
                }
              </span>

              <div className="flex-1 h-2 flex items-center cursor-pointer group relative" onClick={handleSeek} ref={progressBarRef}>
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden relative">
                  <motion.div className="h-full absolute left-0 top-0" style={{ backgroundColor: activeSong.themeColor }} initial={{ width: '0%' }} animate={{ width: `${(currentTime / totalDuration) * 100}%` }} transition={{ duration: 0.1 }} />
                </div>
                <motion.div className="absolute w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-[0_0_10px_currentColor]" style={{ backgroundColor: activeSong.themeColor, left: `calc(${(currentTime / totalDuration) * 100}% - 6px)` }} />
              </div>

              {/* --- TU IMPLEMENTACIÓN DEL TIEMPO TOTAL (Modo Desarrollo) --- */}
              <span className={`text-xs font-mono opacity-80 text-left ${activeSong.isDevMode ? 'w-20 text-[10px] text-green-400 font-bold' : 'w-12'}`}>
                {activeSong.isDevMode
                  ? totalDuration.toFixed(3)
                  : `${Math.floor(totalDuration / 60)}:${(Math.floor(totalDuration % 60)).toString().padStart(2, '0')}`
                }
              </span>
            </div>

            {/* BOTONES DE NAVEGACIÓN Y REPRODUCCIÓN */}
            <div className="flex items-center gap-6">
              <button onClick={playPrevSong} className="text-white/60 hover:text-white transition-colors text-xl p-2 cursor-pointer" title="Canción Anterior">⏮</button>

              {/* --- BOTÓN DE PAUSA FUNCIONAL (USANDO ESTADO isPaused) --- */}
              <button
                onClick={togglePlayPause}
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm hover:scale-105 transition-transform cursor-pointer"
              >
                {isPaused ? '▶' : '❚❚'}
              </button>

              <button onClick={playNextSong} className="text-white/60 hover:text-white transition-colors text-xl p-2 cursor-pointer" title="Siguiente Canción">⏭</button>

              <button
                onClick={stopAndReturnToPlaylist}
                className="ml-4 px-5 py-2 rounded-full border bg-black/40 backdrop-blur-md text-xs uppercase tracking-widest hover:bg-white/10 transition-all cursor-pointer"
                style={{ borderColor: `${activeSong.themeColor}50`, color: activeSong.themeColor }}
              >
                ⟲ Playlist
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;