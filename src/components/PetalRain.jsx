import React from 'react';
import { motion } from 'framer-motion';

const PetalRain = () => {
    // Generamos 25 pétalos aleatorios
    const petals = Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        xOffset: Math.random() * 100, // Posición horizontal (0% a 100%)
        delay: Math.random() * 5, // Qué tan rápido empiezan a caer
        duration: 5 + Math.random() * 5, // Cuánto tardan en caer (5s a 10s)
        size: 0.5 + Math.random() * 1, // Tamaño del pétalo
        rotation: Math.random() * 360, // Rotación inicial
        blur: Math.random() > 0.6 ? 'blur(4px)' : 'blur(1px)', // Efecto de profundidad (algunos borrosos)
    }));

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {petals.map((petal) => (
                <motion.div
                    key={petal.id}
                    className="absolute top-[-10%]"
                    style={{
                        left: `${petal.xOffset}%`,
                        filter: petal.blur, // Da el efecto 3D cinematográfico
                    }}
                    initial={{ y: '-10vh', x: 0, rotate: petal.rotation, opacity: 0 }}
                    animate={{
                        y: '110vh', // Caen hasta el fondo de la pantalla
                        x: [0, -30, 30, -20, 20, 0], // Hacen un movimiento de zig-zag como si el viento los llevara
                        rotate: petal.rotation + 360, // Giran mientras caen
                        opacity: [0, 0.8, 0.8, 0], // Aparecen y desaparecen suavemente
                    }}
                    transition={{
                        duration: petal.duration,
                        delay: petal.delay,
                        repeat: Infinity, // Se repite infinitamente mientras el efecto esté activo
                        ease: "linear"
                    }}
                >
                    {/* SVG de un Pétalo Rojo de Rosa */}
                    <svg
                        width={30 * petal.size}
                        height={30 * petal.size}
                        viewBox="0 0 24 24"
                        className="drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]"
                    >
                        <path
                            fill="#d32f2f"
                            d="M12,2C8,2 4,6 4,12C4,18 12,22 12,22C12,22 20,18 20,12C20,6 16,2 12,2Z"
                        />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
};

export default PetalRain;