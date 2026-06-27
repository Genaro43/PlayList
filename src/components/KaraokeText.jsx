import React from 'react';
import { motion } from 'framer-motion';

const KaraokeLine = ({ text, progress, activeColor = '#f3e5ab' }) => {
    const normalizedProgress = Math.min(Math.max(progress, 0), 1);
    
    // El largo total real del string original para mantener sincronizados los índices
    const totalChars = text.length;
    const litChars = Math.floor(normalizedProgress * totalChars);
    
    // Separamos por palabras manteniendo los bloques de espacio en el array resultante
    const elements = text.split(/(\s+)/);
    
    // Declaramos un acumulador para saber exactamente en qué posición global del string va cada letra
    let globalCharIndex = 0;

    return (
        <div className="relative inline-block leading-tight w-full">
            <span className="flex flex-wrap justify-center content-center gap-y-2">
                {elements.map((element, elementIndex) => {
                    if (element === '') return null;
                    
                    // Caso A: Si el elemento actual es un espacio en blanco
                    if (/^\s+$/.test(element)) {
                        globalCharIndex += element.length; // Sumamos los espacios al índice global
                        return (
                            <span key={`space-${elementIndex}`} className="inline-block">
                                {'\u00A0'.repeat(element.length)}
                            </span>
                        );
                    }
                    
                    // Caso B: Si es una palabra, la envolvemos en un contenedor irrompible (whitespace-nowrap)
                    const chars = element.split('');
                    return (
                        <span key={`word-${elementIndex}`} className="inline-block whitespace-nowrap">
                            {chars.map((char, charIndex) => {
                                const currentIndex = globalCharIndex;
                                globalCharIndex++; // Avanzamos el contador letra por letra
                                
                                const isActive = currentIndex < litChars;
                                const charProgress = normalizedProgress * totalChars - currentIndex;
                                const charOpacity = Math.min(Math.max(charProgress, 0), 1);
                                
                                return (
                                    <motion.span
                                        key={`char-${elementIndex}-${charIndex}`}
                                        className="inline-block transition-all duration-150 ease-out"
                                        style={{
                                            color: isActive 
                                                ? activeColor 
                                                : 'rgba(255, 255, 255, 0.25)', 
                                            textShadow: isActive 
                                                ? `0 0 ${10 + charOpacity * 15}px ${activeColor}80` 
                                                : 'none',
                                            transform: isActive 
                                                ? `scale(${1 + charOpacity * 0.05})` 
                                                : 'scale(1)',
                                        }}
                                        animate={{
                                            y: isActive ? [0, -3, 0] : 0,
                                        }}
                                        transition={{
                                            y: {
                                                duration: 0.3,
                                                ease: "easeOut"
                                            }
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                );
                            })}
                        </span>
                    );
                })}
            </span>
        </div>
    );
};

export default KaraokeLine;