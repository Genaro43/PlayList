import React from 'react';
import { motion } from 'framer-motion';

const RainEffect = () => {
    const raindrops = Array.from({ length: 100 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 2,
        duration: Math.random() * 0.5 + 0.5
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {raindrops.map((drop) => (
                <motion.div
                    key={drop.id}
                    initial={{ y: "-10vh", opacity: 0 }}
                    animate={{ y: "100vh", opacity: [0, 1, 1, 0] }}
                    transition={{
                        duration: drop.duration,
                        repeat: Infinity,
                        delay: drop.delay,
                        ease: "linear",
                    }}
                    className="absolute w-[2px] bg-white/40 h-20"
                    style={{ left: `${drop.x}%` }}
                />
            ))}
        </div>
    );
};

export default RainEffect;