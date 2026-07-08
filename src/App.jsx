import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KaraokeLine from './components/KaraokeText';
import RoseEffect from './components/RoseEffect'; // Importación del nuevo efecto visual
import { songLibrary } from './data/songs';
import PetalRain from './components/PetalRain';

function App() {
  const [activeSongId, setActiveSongId] = useState(songLibrary[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  const activeSong = useMemo(() =>
    songLibrary.find(s => s.id === activeSongId) || songLibrary[0]
    , [activeSongId]);

  const lyricsData = activeSong.lyrics;

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
  if (activeLine) {
    timeInLine = currentTime - activeLine.time;
  }

  const colorStyle = { color: activeSong.themeColor };

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden font-serif relative" style={colorStyle}>

      <audio ref={audioRef} src={activeSong.audioSrc} preload="auto" />

      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 text-4xl animate-bounce delay-1000">♪</div>
        <div className="absolute top-1/3 right-1/4 text-6xl animate-pulse">♫</div>
        <div className="absolute bottom-1/4 left-1/3 text-5xl animate-bounce">♪</div>
      </div>

      {!isPlaying ? (
        <div className="text-center z-10 flex flex-col items-center justify-center h-full w-full max-w-md px-6">
          <h1 className="text-5xl md:text-6xl italic font-bold mb-2 drop-shadow-[0_0_15px_currentColor]">
            Play List
          </h1>
          <p className="text-xl tracking-widest uppercase opacity-70 mb-12">Elige tu pista</p>

          <div className="w-full mb-8 flex flex-col gap-3">
            {songLibrary.map((song) => (
              <button
                key={song.id}
                onClick={() => setActiveSongId(song.id)}
                className={`p-4 border rounded-xl transition-all duration-300 flex flex-col items-center ${activeSongId === song.id
                  ? 'border-current bg-white/10 scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  : 'border-white/20 opacity-50 hover:opacity-80 hover:bg-white/5'
                  }`}
                style={{ color: activeSongId === song.id ? song.themeColor : '#ffffff' }}
              >
                <span className="text-2xl font-bold">{song.title}</span>
                <span className="text-sm opacity-80">{song.artist}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              const startAt = activeSong.snippetStart || 0;
              setCurrentTime(startAt);
              if (audioRef.current) {
                audioRef.current.currentTime = startAt;
              }
              setIsPlaying(true);
            }}
            className="text-7xl mt-4 hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-[0_0_25px_currentColor]"
          >
            ▶
          </button>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 absolute inset-0 text-center z-10">

          {/* --- NUEVA SECCIÓN DE EFECTOS DE FONDO --- */}
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
          {/* ---------------------------------------- */}

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
                    ♪
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