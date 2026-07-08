import React from 'react';
import { motion } from 'framer-motion';

// --- SUBCOMPONENTE: UNA SOLA ROSA (Se mantiene responsivo y centrado) ---
const SingleRose = ({ x, y, scale = 1, delayOffset = 0, className = "" }) => {
    return (
        <g transform={`translate(${x}, ${y}) scale(${scale})`} className={className}>
            {/* TALLO */}
            <motion.path
                d="M150,500 Q120,350 150,200 Q180,100 150,50"
                fill="transparent"
                stroke="#1b5e20"
                strokeWidth="4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 5, delay: delayOffset, ease: "easeInOut" }}
            />
            {/* HOJA IZQUIERDA */}
            <motion.path
                d="M140,350 Q100,340 90,300 Q120,310 142,330"
                fill="#2e7d32"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: delayOffset + 2, duration: 2 }}
                style={{ originX: "140px", originY: "350px" }}
            />
            {/* HOJA DERECHA */}
            <motion.path
                d="M155,250 Q200,240 210,200 Q180,210 158,230"
                fill="#2e7d32"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: delayOffset + 3, duration: 2 }}
                style={{ originX: "155px", originY: "250px" }}
            />
            {/* CABEZA DE LA ROSA */}
            <motion.g
                initial={{ scale: 0, opacity: 0, rotate: -15 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ delay: delayOffset + 4.5, duration: 3, ease: "easeOut" }}
                style={{ originX: "150px", originY: "50px" }}
            >
                <circle cx="130" cy="45" r="22" fill="#660000" />
                <circle cx="170" cy="45" r="22" fill="#660000" />
                <circle cx="150" cy="60" r="25" fill="#b71c1c" />
                <circle cx="150" cy="45" r="18" fill="#d32f2f" />
                <path d="M140,45 Q150,65 160,45 Q150,30 140,45" fill="#310000" />
            </motion.g>
        </g>
    );
};

// --- COMPONENTE PRINCIPAL: LLUVIA ESTILO ARCADE ---
const RoseEffect = () => {

    const rosesConfig = [
        { x: 490, y: 180, scale: 0.65, delay: 0.0, className: "block" },
        { x: 650, y: 130, scale: 0.75, delay: 0.8, className: "block" },
        { x: 120, y: 280, scale: 0.85, delay: 0.4, className: "hidden md:block" },
        { x: 1020, y: 220, scale: 0.95, delay: 1.2, className: "hidden md:block" },
        { x: 280, y: 380, scale: 0.75, delay: 1.6, className: "hidden lg:block" },
        { x: 880, y: 340, scale: 0.9, delay: 2.0, className: "hidden lg:block" },
        { x: 220, y: 50, scale: 0.5, delay: 2.4, className: "hidden lg:block" },
        { x: 950, y: 40, scale: 0.55, delay: 1.0, className: "hidden lg:block" },
    ];

    // --- CONFIGURACIÓN MATEMÁTICA ARCADE ---
    const TOTAL_PETALS = 9;       // Cantidad baja para mantenerlo minimalista y limpio
    const FIXED_DURATION = 20;     // Tardan exactamente 20 segundos en cruzar la pantalla (caída súper lenta)
    const STAGGER_INTERVAL = 2.2;  // Nace un nuevo pétalo exactamente cada 2.2 segundos

    const petals = Array.from({ length: TOTAL_PETALS }).map((_, i) => {
        // Repartimos el X uniformemente para que no caigan en el mismo lugar de la "pantalla de juego"
        const standardColumns = [10, 35, 60, 85, 20, 45, 70, 95, 52];
        return {
            id: i,
            xPosition: standardColumns[i],
            delay: i * STAGGER_INTERVAL,   // Sincronización perfecta 1 por 1
            size: 0.7 + (i % 3) * 0.2,     // Tamaños fijos para emular profundidad (0.7, 0.9, 1.1)
            initialRotate: i * 40,         // Inclinaciones variadas fijas
        };
    });

    return (
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-black/40">

            {/* CAPA 1: Rosas */}
            <svg
                viewBox="0 0 1200 800"
                preserveAspectRatio="xMidYMid slice"
                className="absolute inset-0 w-full h-full opacity-20"
            >
                {rosesConfig.map((rose, idx) => (
                    <SingleRose
                        key={`rose-${idx}`}
                        x={rose.x}
                        y={rose.y}
                        scale={rose.scale}
                        delayOffset={rose.delay}
                        className={rose.className}
                    />
                ))}
            </svg>

            {/* CAPA 2: Lluvia Secuencial Escrita (Estilo Asteroides) */}
            <div className="absolute inset-0 w-full h-full">
                {petals.map((petal) => (
                    <motion.div
                        key={petal.id}
                        className="absolute top-[-10%]"
                        style={{
                            left: `${petal.xPosition}%`,
                        }}
                        initial={{ y: '-10vh', rotate: petal.initialRotate, opacity: 0 }}
                        animate={{
                            y: '110vh', // Caen recto hacia abajo en el eje vertical
                            opacity: [0, 0.6, 0.6, 0], // Aparece arriba, viaja brillante, se desvanece al salir
                        }}
                        transition={{
                            duration: FIXED_DURATION, // Al ser idéntica para todos, jamás se van a empalmar
                            delay: petal.delay,       // Controla el orden exacto de aparición en fila
                            repeat: Infinity,         // Bucle infinito
                            ease: "linear",           // Velocidad constante de juego de naves
                        }}
                    >
                        <svg
                            width={22 * petal.size}
                            height={22 * petal.size}
                            viewBox="0 0 24 24"
                            className="opacity-55 filter drop-shadow-[0_5px_8px_rgba(0,0,0,0.6)]"
                        >
                            <path
                                fill="#b71c1c"
                                d="M12,2C8,2 4,6 4,12C4,18 12,22 12,22C12,22 20,18 20,12C20,6 16,2 12,2Z"
                            />
                        </svg>
                    </motion.div>
                ))}
            </div>

        </div>
    );
};

export default RoseEffect;