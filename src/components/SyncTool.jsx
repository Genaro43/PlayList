import React, { useState, useEffect, useRef } from 'react';

const SyncTool = ({ onClose }) => {
  const [rawText, setRawText] = useState('');
  const [lines, setLines] = useState([]);
  const [syncedLines, setSyncedLines] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);
  const [startTime, setStartTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Temporizador visual
  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setCurrentTime((Date.now() - startTime) / 1000);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isRecording, startTime]);

  // Capturar tecla de Espacio para sincronizar más fácil
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' && isRecording) {
        e.preventDefault();
        handleTap();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isRecording, currentLineIndex, lines]);

  const handlePrepare = () => {
    // Limpiar líneas vacías y preparar el arreglo
    const splitLines = rawText.split('\n').map(line => line.trim()).filter(line => line !== '');
    if (splitLines.length === 0) return alert("Pega alguna letra primero");
    setLines(splitLines);
    setSyncedLines([]);
    setCurrentLineIndex(-1);
  };

  const handleStart = () => {
    setStartTime(Date.now());
    setIsRecording(true);
    setCurrentLineIndex(-1);
    setSyncedLines([]);
  };

  const handleTap = () => {
    const elapsed = (Date.now() - startTime) / 1000;

    if (currentLineIndex === -1) {
      // Registrar la primera línea
      setSyncedLines([{ 
        time: Number(elapsed.toFixed(2)), 
        text: lines[0], 
        duration: 0 
      }]);
      setCurrentLineIndex(0);
    } else if (currentLineIndex < lines.length - 1) {
      // Calcular duración de la línea anterior y registrar la siguiente
      setSyncedLines(prev => {
        const newLines = [...prev];
        const lastIndex = newLines.length - 1;
        newLines[lastIndex].duration = Number((elapsed - newLines[lastIndex].time).toFixed(2));
        
        newLines.push({
          time: Number(elapsed.toFixed(2)),
          text: lines[currentLineIndex + 1],
          duration: 0
        });
        return newLines;
      });
      setCurrentLineIndex(prev => prev + 1);
    } else if (currentLineIndex === lines.length - 1) {
      // Terminar la última línea
      setSyncedLines(prev => {
        const newLines = [...prev];
        const lastIndex = newLines.length - 1;
        newLines[lastIndex].duration = Number((elapsed - newLines[lastIndex].time).toFixed(2));
        return newLines;
      });
      setIsRecording(false);
    }
  };

  const getCodeOutput = () => {
    return "    lyrics: [\n" + syncedLines.map(line => 
      `      { time: ${line.time}, text: "${line.text}", duration: ${line.duration} }`
    ).join(',\n') + "\n    ]";
  };

  return (
    <div className="absolute inset-0 z-50 bg-neutral-950 text-white flex flex-col items-center p-8 overflow-y-auto">
      <div className="w-full max-w-4xl flex flex-col gap-6">
        
        <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
          <h2 className="text-3xl font-bold text-[#f3e5ab]">🛠️ Creador de Sincronización</h2>
          <button onClick={onClose} className="px-4 py-2 border border-red-500 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-colors">
            Cerrar
          </button>
        </div>

        {lines.length === 0 ? (
          // FASE 1: PEGAR TEXTO
          <div className="flex flex-col gap-4">
            <p className="text-neutral-400">Pega la letra de tu canción aquí (una frase por línea):</p>
            <textarea 
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              className="w-full h-64 bg-neutral-900 border border-neutral-700 rounded-xl p-4 focus:outline-none focus:border-[#f3e5ab]"
              placeholder="Ejemplo:&#10;Si perdiera el arco iris, su belleza&#10;Y las flores, su perfume y su color..."
            />
            <button 
              onClick={handlePrepare}
              className="bg-[#f3e5ab] text-black font-bold py-3 rounded-xl hover:scale-[1.02] transition-transform"
            >
              Preparar para Sincronizar
            </button>
          </div>
        ) : (
          // FASE 2: SINCRONIZAR
          <div className="flex flex-col md:flex-row gap-8 w-full">
            
            {/* Panel de Control */}
            <div className="flex-1 flex flex-col gap-6 items-center">
              <div className="text-5xl font-mono text-neutral-500">
                {currentTime.toFixed(2)}s
              </div>

              {!isRecording && syncedLines.length === 0 && (
                <button 
                  onClick={handleStart}
                  className="w-full py-4 bg-green-600 text-white font-bold rounded-xl text-xl hover:bg-green-500"
                >
                  ▶ INICIAR TEMPORIZADOR
                </button>
              )}

              {isRecording && (
                <button 
                  onClick={handleTap}
                  className="w-full py-16 bg-[#f3e5ab] text-black font-bold rounded-xl text-2xl shadow-[0_0_30px_rgba(243,229,171,0.4)] active:scale-95 transition-transform"
                >
                  {currentLineIndex === -1 ? "MÁRCAR PRIMERA LÍNEA" : "SIGUIENTE LÍNEA (Espacio)"}
                </button>
              )}

              {syncedLines.length > 0 && !isRecording && (
                <button 
                  onClick={() => setLines([])}
                  className="w-full py-3 border border-neutral-600 text-neutral-400 rounded-xl hover:bg-neutral-800"
                >
                  Hacer otra canción
                </button>
              )}
            </div>

            {/* Panel de Vista Previa y Código */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="bg-neutral-900 p-6 rounded-xl min-h-[200px] border border-neutral-800 relative">
                {/* Letra siguiente a cantar */}
                {isRecording && currentLineIndex < lines.length - 1 && (
                   <div className="text-center">
                     <p className="text-neutral-500 text-sm mb-2">Siguiente frase a marcar:</p>
                     <p className="text-2xl font-bold text-white">{lines[currentLineIndex + 1]}</p>
                   </div>
                )}
                
                {/* Código Generado */}
                {!isRecording && syncedLines.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <p className="text-green-400 font-bold">✅ Sincronización completada. ¡Copia el código!</p>
                    <textarea 
                      readOnly
                      value={getCodeOutput()}
                      className="w-full h-64 bg-black text-green-300 font-mono text-sm p-4 rounded-lg outline-none resize-none"
                    />
                  </div>
                )}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default SyncTool;