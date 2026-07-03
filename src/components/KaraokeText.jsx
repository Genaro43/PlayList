import React from 'react';
import { motion } from 'framer-motion';

const KaraokeLine = ({ 
    text, 
    timeInLine = 0, 
    lineDuration = 1,
    activeColor = '#f3e5ab', 
    isLineActive = true 
}) => {
    const segments = Array.isArray(text) ? text : [{ t: text }];

    let explicitDuration = 0;
    let explicitPauses = 0;
    let unassignedChars = 0;

    segments.forEach(seg => {
        if (seg.d !== undefined) explicitDuration += seg.d;
        else unassignedChars += seg.t.length;
        
        if (seg.p !== undefined) explicitPauses += seg.p;
    });

    const remainingTime = Math.max(0, lineDuration - explicitDuration - explicitPauses);
    const timePerChar = unassignedChars > 0 ? remainingTime / unassignedChars : 0;

    let wordBlocks = [];
    let currentStartTime = 0;

    segments.forEach(seg => {
        const segColor = seg.c || activeColor;
        const segDuration = seg.d !== undefined ? seg.d : (seg.t.length * timePerChar);
        const timePerSegChar = seg.t.length > 0 ? (segDuration / seg.t.length) : 0;

        const parts = seg.t.split(/(\s+)/);

        parts.forEach(part => {
            if (part === '') return;
            const isSpace = /^\s+$/.test(part);
            
            let blockChars = [];
            part.split('').forEach(char => {
                blockChars.push({
                    char: char,
                    color: segColor,
                    startTime: currentStartTime,
                    endTime: currentStartTime + timePerSegChar
                });
                currentStartTime += timePerSegChar;
            });

            wordBlocks.push({
                isSpace,
                chars: blockChars
            });
        });

        if (seg.p !== undefined) {
            currentStartTime += seg.p;
        }
    });

    return (
        <div className="relative inline-block leading-tight w-full">
            <span className="flex flex-wrap justify-center content-center gap-y-2">
                {wordBlocks.map((block, blockIdx) => {
                    
                    if (block.isSpace) {
                        return (
                            <span key={`space-${blockIdx}`} className="inline-block">
                                {'\u00A0'.repeat(block.chars.length)}
                            </span>
                        );
                    }

                    return (
                        <span key={`word-${blockIdx}`} className="inline-block whitespace-nowrap">
                            {block.chars.map((charData, charIdx) => {
                                const { char, color, startTime, endTime } = charData;
                                const charDuration = endTime - startTime;

                                let charProgress = 0;
                                if (timeInLine >= startTime) {
                                    charProgress = charDuration > 0 
                                        ? Math.min((timeInLine - startTime) / charDuration, 1) 
                                        : 1;
                                }

                                const isActive = isLineActive && (timeInLine >= startTime);
                                const charOpacity = charProgress;

                                return (
                                    <motion.span
                                        key={`char-${blockIdx}-${charIdx}`}
                                        className="inline-block transition-all duration-150 ease-out"
                                        style={{
                                            color: isActive ? color : 'rgba(255, 255, 255, 0.25)', 
                                            textShadow: isActive ? `0 0 ${10 + charOpacity * 15}px ${color}80` : 'none',
                                            transform: isActive ? `scale(${1 + charOpacity * 0.05})` : 'scale(1)',
                                            // ¡Eliminamos el fontWeight de aquí! 
                                            // Ahora siempre heredará el font-bold de App.jsx evitando el salto.
                                        }}
                                        animate={{ y: isActive ? [0, -3, 0] : 0 }}
                                        transition={{ y: { duration: 0.3, ease: "easeOut" } }}
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