import React from 'react';
import Lottie from 'lottie-react';

// 1. Importas todos tus archivos JSON descargados de LottieFiles
import brainAnimation from '../assets/Brain.json';
import WorkoutAnimation from '../assets/Workout.json';
import lightEffectAnimation from '../assets/LightEffect.json';
import rewardAnimation from '../assets/Rewards.json';
import FashionableGirlAnimation from '../assets/FashionableGirl.json';
import microphoneAnimation from '../assets/Microphone.json';
import PaperPlaneHeartAnimation from '../assets/PaperPlaneHeart.json';

// 2. Creas un "Diccionario" de animaciones
const animations = {
    'brain': brainAnimation,
    'workout': WorkoutAnimation,
    'lightEffect': lightEffectAnimation,
    'reward': rewardAnimation,
    'fashionableGirl': FashionableGirlAnimation,
    'microphone': microphoneAnimation,
    'paperPlaneHeart': PaperPlaneHeartAnimation
};

const LottieEffect = ({ animationName }) => {
    // 3. Busca en el diccionario la animación solicitada
    const selectedAnimation = animations[animationName];

    // Si alguien pide una animación que no existe, no hace nada para evitar errores
    if (!selectedAnimation) return null;

    return (
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-60">
            <Lottie
                animationData={selectedAnimation}
                loop={true}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </div>
    );
};

export default LottieEffect;