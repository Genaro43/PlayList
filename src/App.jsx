import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KaraokeLine from './components/KaraokeText';
import RoseEffect from './components/RoseEffect';
import { songLibrary } from './data/songs';

function App() {
  const [activeSongId, setActiveSongId] = useState(songLibrary[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  // --- NUEVAS REFERENCIAS PARA CONTROLAR LA RUEDA Y EL SCROLL ---
  const isAutoScrolling = useRef(false);
  const autoScrollTimeout = useRef(null);
  const wheelTimeout = useRef(null);

  const activeSong = useMemo(() =>
    songLibrary.find(s => s.id === activeSongId) || songLibrary[0]
    , [activeSongId]);

  const lyricsData = activeSong.lyrics;

  // 1. FUNCIÓN MAESTRA DE NAVEGACIÓN: Centra la canción elegida de forma segura
  const navigateToSong = (songId) => {
    isAutoScrolling.current = true; // Apaga el detector táctil momentáneamente
    setActiveSongId(songId);

    document.getElementById(`card-${songId}`)?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });

    // Enciende el detector táctil otra vez tras terminar la animación
    if (autoScrollTimeout.current) clearTimeout(autoScrollTimeout.current);
    autoScrollTimeout.current = setTimeout(() => {
      isAutoScrolling.current = false;
    }, 500);
  };

  // 2. DETECTOR DE RUEDA DE MOUSE (VERTICAL)
  const handleWheel = (e) => {
    // Si el usuario desliza horizontalmente (Ej. Trackpad de Mac), dejamos que el navegador lo maneje solo
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

    // Bloqueador para no saltar 10 canciones si giras la rueda muy rápido
    if (wheelTimeout.current) return;

    const currentIndex = songLibrary.findIndex(s => s.id === activeSongId);
    let nextIndex = currentIndex;

    // Rueda hacia abajo = Siguiente canción
    if (e.deltaY > 0 && currentIndex < songLibrary.length - 1) {
      nextIndex++;
    }
    // Rueda hacia arriba = Canción anterior
    else if (e.deltaY < 0 && currentIndex > 0) {
      nextIndex--;
    }

    if (nextIndex !== currentIndex) {
      navigateToSong(songLibrary[nextIndex].id);
    }

    // Esperar 400ms antes de aceptar otro "tick" de la rueda del mouse
    wheelTimeout.current = setTimeout(() => {
      wheelTimeout.current = null;
    }, 400);
  };

  // 3. DETECTOR TÁCTIL (Deslizar con el dedo en móviles)
  const handleCarouselScroll = (e) => {
    // Si la rueda del mouse está trabajando, ignoramos este evento
    if (isAutoScrolling.current) return;

    const container = e.target;
    const centerPosition = container.scrollLeft + container.clientWidth / 2;

    let closestId = activeSongId;
    let minDistance = Infinity;

    const cards = container.querySelectorAll('.song-card');
    cards.forEach(card => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(centerPosition - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestId = card.dataset.id;
      }
    });

    if (closestId && closestId !== activeSongId) {
      setActiveSongId(closestId);
    }
  };

  // Auto-centrado inicial
  useEffect(() => {
    if (!isPlaying) {
      setTimeout(() => navigateToSong(activeSongId), 100);
    }
  }, [isPlaying]); // Solo se dispara al cambiar de pantalla

  const totalDuration = useMemo(() => {
    if (!lyricsData || lyricsData.length === 0) return 0;
    const lastLine = lyricsData[lyricsData.length - 1];
    return lastLine.time + lastLine.duration;
  }, [lyricsData]);

  useEffect(() => {
    let animationFrameId;

    const updateProgress = () => {
      if (audioRef.current && isPlaying) {
        setCurrentTime(audioRef.current.currentTime);
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    if (isPlaying) {
      audioRef.current.play().catch(e => console.error("Error reproduciendo audio:", e));
      animationFrameId = requestAnimationFrame(updateProgress);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }

    if (currentTime > totalDuration && isPlaying) {
      setIsPlaying(false);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying, currentTime, totalDuration]);

  const handleSeek = (e) => {
    if (!progressBarRef.current || !audioRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = percentage * totalDuration;

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  let activeLineIndex = lyricsData.findIndex((line, index) => {
    const nextLine = lyricsData[index + 1];
    if (nextLine) {
      return currentTime >= line.time && currentTime < nextLine.time;
    }
    return currentTime >= line.time;
  });

  if (activeLineIndex === -1) activeLineIndex = 0;
  const activeLine = lyricsData[activeLineIndex] || null;
  let timeInLine = 0;
  if (activeLine) timeInLine = currentTime - activeLine.time;

  const colorStyle = { color: activeSong.themeColor };

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden font-serif relative" style={colorStyle}>

      <audio ref={audioRef} src={activeSong.audioSrc} preload="auto" />

      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 text-4xl animate-bounce delay-1000">{"\u266A"}</div>
        <div className="absolute top-1/3 right-1/4 text-6xl animate-pulse">{"\u266B"}</div>
        <div className="absolute bottom-1/4 left-1/3 text-5xl animate-bounce">{"\u266A"}</div>
      </div>

      {!isPlaying ? (
        // --- PANTALLA COVER FLOW ---
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full overflow-hidden bg-neutral-950">

          <div className="text-center mb-4 px-6 z-30">
            <h1 className="text-4xl md:text-5xl font-serif italic font-bold text-white tracking-wide">
              PlayList
            </h1>
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-40 mt-2 font-sans">
              Selecciona tu tema favorito
            </p>
          </div>

          <div className="relative w-full h-[400px] flex items-center justify-center">

            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-neutral-950 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-neutral-950 to-transparent z-20 pointer-events-none" />

            <div
              id="carousel-container"
              onScroll={handleCarouselScroll}
              onWheel={handleWheel} // <-- LA MAGIA DEL MOUSE ESTÁ AQUÍ
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
                    onClick={() => navigateToSong(song.id)} // Usamos la misma función maestra
                    animate={{
                      scale: isActive ? 1.15 : 0.9,
                      opacity: isActive ? 1 : 0.3,
                      y: isActive ? -10 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`song-card shrink-0 snap-center relative w-64 h-80 rounded-3xl cursor-pointer flex flex-col p-6 border overflow-hidden ${isActive ? 'border-white/30 z-30' : 'border-white/5 z-10'
                      }`}
                    style={{
                      backgroundColor: '#0a0a0a',
                      boxShadow: isActive ? `0 20px 40px rgba(0,0,0,0.8), 0 0 40px ${song.themeColor}20` : 'none'
                    }}
                  >
                    <div
                      className="absolute top-[-20%] left-[-20%] w-full h-full opacity-20 blur-3xl rounded-full pointer-events-none"
                      style={{ backgroundColor: song.themeColor }}
                    />

                    {/* --- ZONA DE LA PORTADA Y EL VINILO --- */}
                    <div className="relative w-full h-36 flex items-center justify-center mt-2 mb-4">
                      <motion.div
                        animate={{
                          x: isActive ? 50 : 0,
                          rotate: isActive ? 360 : 0,
                          opacity: isActive ? 1 : 0
                        }}
                        transition={{
                          x: { type: "spring", stiffness: 100, damping: 15 },
                          rotate: { repeat: Infinity, duration: 4, ease: "linear" }
                        }}
                        className="absolute w-28 h-28 rounded-full bg-neutral-900 shadow-xl flex items-center justify-center border-[3px] border-neutral-800"
                        style={{ backgroundImage: 'repeating-radial-gradient(circle, #111, #111 2px, #222 3px, #222 4px)' }}
                      >
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: song.themeColor }}>
                          <div className="w-2.5 h-2.5 bg-neutral-950 rounded-full" />
                        </div>
                      </motion.div>

                      <div
                        className="relative z-10 w-32 h-32 rounded-xl shadow-2xl flex items-center justify-center border border-white/10"
                        style={{ background: `linear-gradient(135deg, #1a1a1a, ${song.themeColor}60)` }}
                      >
                        <span className="text-5xl opacity-80" style={{ color: song.themeColor, textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>{"\uD83C\uDFB5"}</span>
                      </div>
                    </div>

                    <div className="relative z-10 mt-auto text-center flex flex-col items-center">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mb-2"
                        >
                          <span
                            className="text-[10px] font-mono border px-2 py-1 rounded-full uppercase tracking-widest"
                            style={{ color: song.themeColor, borderColor: song.themeColor, backgroundColor: `${song.themeColor}10` }}
                          >
                            Selected
                          </span>
                        </motion.div>
                      )}

                      <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md truncate w-full">
                        {song.title}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.2em] opacity-60 font-sans truncate w-full">
                        {song.artist}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
        <div className="w-full h-full flex flex-col items-center justify-center p-4 absolute inset-0 text-center z-10">
          <AnimatePresence>
            {activeSong.visualEffects?.map((effect, index) => {
              const isEffectActive = currentTime >= effect.startTime && currentTime <= effect.endTime;

              if (isEffectActive && effect.type === 'rose') {
                return (
                  <motion.div
                    key={`effect-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 2 } }}
                    className="absolute inset-0 z-0"
                  >
                    <RoseEffect />
                  </motion.div>
                );
              }
              return null;
            })}
          </AnimatePresence>

          <div className="w-full max-w-5xl z-20 relative px-4 flex flex-col gap-6 items-center min-h-[50vh] justify-center">
            <div className="flex flex-col items-center mb-12 min-h-[200px] justify-center relative w-full">
              <AnimatePresence mode="wait">
                {activeLine ? (
                  <motion.div
                    key={activeLineIndex}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 1.1, filter: 'blur(8px)' }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="w-full flex justify-center py-4"
                  >
                    <div className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-center px-2 w-full">
                      <KaraokeLine
                        text={activeLine.text}
                        timeInLine={timeInLine}
                        lineDuration={activeLine.duration}
                        activeColor={activeLine.lineColor || activeSong.themeColor}
                        isLineActive={true}
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} className="text-4xl">
                    {"\u266A"}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-4 text-center items-center h-[140px] overflow-hidden mt-6">
              {activeSong.isTranslated ? (
                <AnimatePresence mode="wait">
                  {activeLine && activeLine.translation && (
                    <motion.div
                      key={`trans-${activeLineIndex}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 0.8, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.2 }}
                      className="text-2xl md:text-4xl font-medium italic drop-shadow-md"
                      style={{ color: activeSong.themeColor || '#f3e5ab' }}
                    >
                      {activeLine.translation}
                    </motion.div>
                  )}
                </AnimatePresence>
              ) : (
                <AnimatePresence>
                  {[1, 2].map((offset) => {
                    const nextLine = lyricsData[activeLineIndex + offset];
                    if (!nextLine) return null;
                    return (
                      <motion.p
                        key={`prev-${activeLineIndex + offset}`}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{
                          opacity: offset === 1 ? 0.5 : 0.25,
                          y: 0,
                          scale: offset === 1 ? 1 : 0.92
                        }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.2 }}
                        className={`font-medium ${offset === 1 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}
                      >
                        <KaraokeLine
                          text={nextLine.text}
                          timeInLine={0}
                          lineDuration={nextLine.duration}
                          activeColor={nextLine.lineColor || activeSong.themeColor}
                          isLineActive={false}
                        />
                      </motion.p>
                    );
                  })}
                </AnimatePresence>
              )}
            </div>
          </div>

          <div className="absolute bottom-10 left-0 w-full flex justify-center z-50">
            <div
              className="w-3/4 h-10 flex items-center cursor-pointer group"
              onClick={handleSeek}
              ref={progressBarRef}
            >
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden relative opacity-30 group-hover:opacity-70 transition-opacity duration-300">
                <motion.div
                  className="h-full absolute left-0 top-0"
                  style={{ backgroundColor: activeSong.themeColor }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${(currentTime / totalDuration) * 100}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setIsPlaying(false);
              const startAt = activeSong.snippetStart || 0;
              setCurrentTime(startAt);
              if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = startAt;
              }
            }}
            className="absolute top-5 right-5 text-sm opacity-60 hover:opacity-100 z-50 border px-4 py-2 rounded-full transition-all hover:bg-white/10"
            style={{ borderColor: activeSong.themeColor, color: activeSong.themeColor }}
          >
            ⟲ CAMBIAR / REINICIAR
          </button>

          <div className="absolute top-5 left-5 text-sm opacity-60 font-mono" style={colorStyle}>
            {Math.floor(currentTime)}s / {Math.floor(totalDuration)}s
          </div>
        </div>
      )}
    </div>
  );
}

export default App;