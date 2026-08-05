import { p } from "framer-motion/client";

const eresTu = {
    id: "eres-tu",
    title: "Eres Tú",
    artist: "Carla Morrison",
    themeColor: "#e42ac5",
    isDevMode: false,
    snippetStart: 21.5,
    audioSrc: "/music/EresTu.mp3",
    visualEffects: [
        {
            type: 'lottie',
            animationName: 'RocketDuck',
            startTime: 73.400,
            endTime: 76.5
        },
        // {
        //     type: 'lottie',
        //     animationName: 'Butterflyhearts',
        //     startTime: 53.0,
        //     endTime: 68.4
        // },
        {
            type: 'lottie',
            animationName: 'AnimateHeart',
            startTime: 30.0,
            endTime: 41.4
        }
    ],
    lyrics: [
        {
            time: 22.0,
            text: [
                { t: "Hoy, ", d: 0.6 },
                { t: "desperté ", d: 1.3, p: 0.2 },
                { t: "con ", d: 0.5 },
                { t: "ganas ", d: 0.7 },
                { t: "de ", d: 0.2, p: 0.2 },
                { t: "besarte", d: 1.6 }
            ],
            duration: 3.4
        },
        {
            time: 28.4,
            text: [
                { t: "Tengo ", d: 0.9 },
                { t: "una ", d: 0.4 },
                { t: "sed ", d: 0.5 },
                { t: "de ", d: 0.3, p: 0.2 },
                { t: "acariciarte", d: 1.2 }
            ],
            duration: 3.0
        },
        {
            time: 32.8,
            text: [
                { t: "Enredarme ", d: 1.4 },
                { t: "a ", d: 0.2 },
                { t: "ti, ", d: 0.6, c: '#7a0000' },
                { t: "y ", d: 0.3, p: 0.2 },
                { t: "no ", d: 0.4, p: 0.2 },
                { t: "soltarte", d: 2.4 }
            ],
            duration: 3.3
        },
        {
            time: 38.5,
            text: [
                { t: "Eres ", d: 0.8 },
                { t: "tan ", d: 0.4 },
                { t: "embriagante, ", d: 1.5, p: 0.2 },
                { t: "eres ", d: 0.5, p: 0.1 },
                { t: "tú, ", d: 0.6, p: 2.8, c: '#7a0000' },
                { t: "eres ", d: 1.5, p: 0.5 },
                { t: "tú", d: 1.0, c: '#7a0000' }
            ],
            duration: 4.7
        },
        {
            time: 52.4,
            text: [
                { t: "Quiero ", d: 1.0 },
                { t: "contemplarte ", d: 1.8, p: 0.1 },
                { t: "sin ", d: 0.3, p: 0.1 },
                { t: "contar ", d: 0.6, p: 0.1 },
                { t: "el ", d: 0.4, p: 0.1 },
                { t: "tiempo", d: 1.7, c: "#40e42a" }
            ],
            duration: 3.4
        },
        {
            time: 59.2,
            text: [
                { t: "Dibujarte ", d: 1.5 },
                { t: "con ", d: 0.4 },
                { t: "mis ", d: 0.4 },
                { t: "puros ", d: 0.4, p: 0.1 },
                { t: "recuerdos", d: 1.0 }
            ],
            duration: 2.9
        },
        {
            time: 63.3,
            text: [
                { t: "En ", d: 0.2 },
                { t: "mi ", d: 0.2 },
                { t: "mente, ", d: 0.6 },
                { t: "marcarme ", d: 1.0, p: 0.3 },
                { t: "tus ", d: 0.3 },
                { t: "labios, ", d: 0.6, p: 0.3 },
                { t: "tus ", d: 0.3, p: 0.2 },
                { t: "besos", d: 0.8 }
            ],
            duration: 3.7
        },
        {
            time: 69.5,
            text: [
                { t: "Estar ", d: 0.6 },
                { t: "aquí ", d: 0.6 },
                { t: "otro ", d: 0.5 },
                { t: "momento", d: 0.9 }
            ],
            duration: 2.2
        },
        {
            time: 72.4,
            text: [
                { t: "Eres ", d: 0.6, p: 0.1 },
                { t: "tú", d: 0.8, p: 0.1, c: '#7a0000' },
                { t: "-juh-jah-juh", d: 1.5 }
            ],
            duration: 2.4
        },
        {
            time: 77.0,
            text: [
                { t: "Eres ", d: 0.6, p: 0.1 },
                { t: "tú", d: 0.8, p: 0.1, c: '#7a0000' },
                { t: "-juh-jah-juh", d: 1.5 }
            ],
            duration: 2.4
        },
        {
            time: 82.5,
            text: [
                { t: "Eres ", d: 0.6, p: 0.1 },
                { t: "tú", d: 0.8, p: 0.1 },
                { t: "-juh-jah-juh", d: 1.5 }
            ],
            duration: 3.4
        },
        {
            time: 93.0,
            text: [
                { t: "Me ", d: 0.4 },
                { t: "encanta ", d: 1.2, p: 0.5 },
                { t: "verte, ", d: 0.8, p: 0.4 },
                { t: "tenerte, ", d: 0.6, p: 0.4 },
                { t: "abrazarte", d: 0.8 }
            ],
            duration: 2.8
        },
        {
            time: 99.8,
            text: [
                { t: "Cuando ", d: 0.8 },
                { t: "estoy ", d: 0.6 },
                { t: "a ", d: 0.4 },
                { t: "un ", d: 0.3 },
                { t: "lado ", d: 0.5, p: 0.1 },
                { t: "de ", d: 0.3 },
                { t: "ti", d: 1.0 }
            ],
            duration: 2.8
        },
        {
            time: 103.8,
            text: [
                { t: "Todo ", d: 0.4 },
                { t: "lo ", d: 0.2 },
                { t: "bueno ", d: 0.5, p: 0.3 },
                { t: "de ", d: 0.2 },
                { t: "mí, ", d: 0.8, p: 0.5 },
                { t: "florece, ", d: 2.0, p: 0.3 },
                { t: "eres ", d: 0.5 },
                { t: "tú", d: 0.8 }
            ],
            duration: 3.9
        },
        {
            time: 110.3,
            text: [
                { t: "Ese ", d: 0.4 },
                { t: "imán ", d: 0.6 },
                { t: "de ", d: 0.2 },
                { t: "una ", d: 0.3 },
                { t: "preciosa ", d: 0.8 },
                { t: "energía", d: 0.9 }
            ],
            duration: 3.2
        },
        {
            time: 115.5,
            text: [
                { t: "Es ", d: 0.3 },
                { t: "tu ", d: 0.3 },
                { t: "alma ", d: 0.5, p: 0.5 },
                { t: "que ", d: 0.3, p: 0.5 },
                { t: "envía ", d: 0.8, p: 1.2 },
                { t: "señales ", d: 0.8, p: 0.1 },
                { t: "a ", d: 0.2 },
                { t: "mi ", d: 0.2, p: 0.1 },
                { t: "cuerpo", d: 0.8 }
            ],
            duration: 3.6
        },
        {
            time: 123.0,
            text: [
                { t: "Porque ", d: 0.5 },
                { t: "este ", d: 0.4, p: 0.2 },
                { t: "sigue ", d: 0.8, p: 0.5 },
                { t: "pidiendo ", d: 0.8, p: 0.5 },
                { t: "ese ", d: 0.3 },
                { t: "aroma ", d: 0.6, p: 0.4 },
                { t: "de ", d: 0.2, p: 0.3 },
                { t: "ti", d: 0.6 }
            ],
            duration: 3.9
        },
        {
            time: 130.0,
            text: [
                { t: "Que ", d: 0.8, p: 0.3 },
                { t: "me ", d: 0.2 },
                { t: "invita ", d: 0.6 },
                { t: "al ", d: 0.2 },
                { t: "acecho", d: 0.9 }
            ],
            duration: 2.2
        },
        {
            time: 133.5,
            text: [
                { t: "Eres ", d: 0.6, p: 0.1 },
                { t: "tú", d: 0.8, p: 0.1 },
                { t: "-juh-jah-juh", d: 1.5 }
            ],
            duration: 2.4
        },
        {
            time: 138.6,
            text: [
                { t: "Eres ", d: 0.6, p: 0.1 },
                { t: "tú", d: 0.8, p: 0.1 },
                { t: "-juh-jah-juh", d: 1.5 }
            ],
            duration: 2.4
        },
        {
            time: 143.7,
            text: [
                { t: "Eres ", d: 0.6, p: 0.1 },
                { t: "tú", d: 0.8, p: 0.1 },
                { t: "-juh-jah-juh", d: 1.5 }
            ],
            duration: 3.4
        },
        {
            time: 154.3,
            text: [
                { t: "Tenemos ", d: 1.5, p: 0.8 },
                { t: "planes ", d: 0.8 },
                { t: "diferentes", d: 2.3 }
            ],
            duration: 2.4
        },
        {
            time: 161.3,
            text: [
                { t: "Pero ", d: 0.4 },
                { t: "tú ", d: 0.3 },
                { t: "siempre ", d: 0.6 },
                { t: "en ", d: 0.2 },
                { t: "mi ", d: 0.2 },
                { t: "mente", d: 0.8 }
            ],
            duration: 2.5
        },
        {
            time: 164.0,
            text: [
                { t: "Pues ", d: 0.4 },
                { t: "mis ", d: 0.3 },
                { t: "venas ", d: 1.5, p: 0.5 },
                { t: "tan ", d: 0.8, p: 0.5 },
                { t: "sutilmente", d: 1.8 }
            ],
            duration: 2.8
        },
        {
            time: 171.6,
            text: [
                { t: "Disfrutan ", d: 0.8 },
                { t: "tanto ", d: 0.6 },
                { t: "quererte", d: 1.0 }
            ],
            duration: 2.4
        },
        {
            time: 174.9,
            text: [
                { t: "Eres ", d: 0.5 },
                { t: "tú, ", d: 0.6, p: 4.0 },
                { t: "eres ", d: 0.5 },
                { t: "tú-juh, ", d: 1.0 },
                { t: "ah-uh, ", d: 1.2 },
                { t: "juh-uh", d: 1.2 }
            ],
            duration: 4.2
        },
        {
            time: 195.0,
            text: [
                { t: "Eres ", d: 0.6, p: 0.1 },
                { t: "tú", d: 0.8, p: 0.1 },
                { t: "-juh-jah-juh", d: 1.5 }
            ],
            duration: 2.4
        },
        {
            time: 200.0,
            text: [
                { t: "Eres ", d: 0.6, p: 0.1 },
                { t: "tú", d: 0.8, p: 0.1 },
                { t: "-juh-jah-juh", d: 1.5 }
            ],
            duration: 2.4
        },
        {
            time: 205.0,
            text: [
                { t: "Eres ", d: 0.6, p: 0.1 },
                { t: "tú", d: 0.8, p: 0.1 },
                { t: "-juh-jah-juh", d: 1.5 }
            ],
            duration: 2.4
        },
        {
            time: 212.0,
            text: [
                { t: "Jah, ", d: 0.6 },
                { t: "jah, ", d: 0.6 },
                { t: "jah, ", d: 0.6 },
                { t: "no, ", d: 0.6 },
                { t: "no", d: 0.6 }
            ],
            duration: 18.0
        }
    ]
}

export default eresTu;