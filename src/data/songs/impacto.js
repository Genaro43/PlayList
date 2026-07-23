import { p } from "framer-motion/client";

const impacto = {
    id: 'impacto',
    title: 'Impacto',
    artist: 'Enjambre',
    themeColor: '#ff9900',
    //snippetStart: 146.8,
    // visualEffects: [
    //     {
    //         type: 'rose',
    //         startTime: 155.0, // Segundo exacto donde empieza a crecer el tallo
    //         endTime: 180.0    // Segundo exacto donde la rosa desaparece (puedes ajustarlo)
    //     }
    // ],
    audioSrc: '/music/Impacto.mp3',
    lyrics: [
        {
            time: 11.0,
            text: [
                { t: "Esos ", d: 0.3 },
                { t: "brazos ", d: 0.7 },
                { t: "cruzados", d: 1.4 }
            ],
            duration: 1.6
        },
        {
            time: 15.2,
            text: [
                { t: "Y ", d: 0.2 },
                { t: "ese ", d: 0.4 },
                { t: "ceño ", d: 0.5 },
                { t: "enojado", d: 1.2 }
            ],
            duration: 1.5
        },
        {
            time: 19.5,
            text: [
                { t: "Me ", d: 0.3 },
                { t: "tienen ", d: 0.7 },
                { t: "intrigado", d: 1.2 }
            ],
            duration: 1.6
        },
        {
            time: 22.5,
            text: [
                { t: "Me ", d: 0.2 },
                { t: "intimidas, ", d: 1.9, p: 0.5 },
                { t: "¿qué ", d: 0.5 },
                { t: "hago?", d: 0.8 }
            ],
            duration: 1.6
        },
        {
            time: 28.2,
            text: [
                { t: "Y ", d: 0.4 },
                { t: "si ", d: 0.4 },
                { t: "das ", d: 0.4 },
                { t: "un ", d: 0.2 },
                { t: "paso, ", d: 0.8, p: 0.5 },
                { t: "me ", d: 0.2 },
                { t: "pones ", d: 0.8 },
                { t: "a ", d: 0.3 },
                { t: "llorar", d: 0.7, c: "#3fe2ff" }
            ],
            duration: 2.6
        },
        {
            time: 33.5,
            text: [
                { t: "Y ", d: 0.2 },
                { t: "si ", d: 0.2 },
                { t: "caminas ", d: 0.8 },
                { t: "más, ", d: 0.4, p: 0.5 },
                { t: "al ", d: 0.2 },
                { t: "suelo ", d: 0.4, c: "#3fe2ff" },
                { t: "voy ", d: 0.2 },
                { t: "a ", d: 0.2 },
                { t: "dar", d: 0.8 }
            ],
            duration: 2.6
        },
        {
            time: 40.2,
            text: [
                { t: "-Ar, ", d: 1.5, p: 0.3 },
                { t: "ah-ah, ", d: 0.8, p: 1.3 },
                { t: "ah-ah-ah", d: 0.8 }
            ],
            duration: 1.6
        },
        {
            time: 54.3,
            text: [
                { t: "No ", d: 0.4 },
                { t: "me ", d: 0.4 },
                { t: "mires ", d: 0.8 },
                { t: "con ", d: 0.4 },
                { t: "esos ", d: 0.6 },
                { t: "ojos ", d: 1.3, c: "#ff39bd" },
                { t: "(que ", d: 0.3, p: 0.3 },
                { t: "me)", d: 0.3 }
            ],
            duration: 2.2
        },
        {
            time: 59.1,
            text: [
                { t: "Me ", d: 0.4 },
                { t: "deslumbras ", d: 1.2, c: "#ffd700" },
                { t: "(que ", d: 0.4, p: 0.2 },
                { t: "me), ", d: 0.4 },
                { t: "me ", d: 0.4 },
                { t: "derrumbas", d: 1.0 }
            ],
            duration: 2.5
        },
        {
            time: 64.0,
            text: [
                { t: "No ", d: 0.3 },
                { t: "me ", d: 0.3 },
                { t: "mires ", d: 0.5 },
                { t: "con ", d: 0.3 },
                { t: "esos ", d: 0.5 },
                { t: "ojos ", d: 1.3, c: "#ff39bd" },
                { t: "(porque)", d: 0.6 }
            ],
            duration: 2.3
        },
        {
            time: 67.8,
            text: [
                { t: "Te ", d: 0.4 },
                { t: "lo ", d: 0.3 },
                { t: "doy ", d: 0.4 },
                { t: "todo, ", d: 0.8, p: 0.9 },
                { t: "ni ", d: 0.5 },
                { t: "modo", d: 0.5 }
            ],
            duration: 1.6
        },
        {
            time: 72.8,
            text: [
                { t: "No ", d: 0.2 },
                { t: "me ", d: 0.4 },
                { t: "mires ", d: 0.4 },
                { t: "con ", d: 0.2 },
                { t: "esos ", d: 0.5 },
                { t: "ojos ", d: 1.2, c: "#ff39bd" },
                { t: "que ", d: 0.1 },
                { t: "(que ", d: 0.1, p: 0.3 },
                { t: "me)", d: 0.1 }
            ],
            duration: 2.4
        },
        {
            time: 77.3,
            text: [
                { t: "Me ", d: 0.2 },
                { t: "derrites ", d: 0.6 },
                { t: "(que ", d: 0.2, p: 0.4 },
                { t: "me), ", d: 0.2, p: 0.2 },
                { t: "me ", d: 0.2 },
                { t: "trasmites", d: 1.3 }
            ],
            duration: 2.3
        },
        {
            time: 81.2,
            text: [
                { t: "La ", d: 0.2 },
                { t: "vergüenza ", d: 0.8 },
                { t: "del ", d: 0.8 },
                { t: "sol, ", d: 0.3, c: "#ffd700", p: 0.5 },
                { t: "quien ", d: 0.5 },
                { t: "en ", d: 0.4 },
                { t: "su ", d: 0.4 },
                { t: "resplandor", d: 0.8, c: "#ffd700" }
            ],
            duration: 3.1
        },
        {
            time: 86.9,
            text: [
                { t: "Se ", d: 0.5 },
                { t: "ve ", d: 0.9 },
                { t: "opacado", d: 1.9 }
            ],
            duration: 1.2
        },
        {
            time: 93.0,
            text: [
                { t: "A ", d: 0.5 },
                { t: "tu ", d: 0.5 },
                { t: "lado", d: 1.3 }
            ],
            duration: 0.9
        },
        {
            time: 97.0,
            text: [
                { t: "Oh-oh, ", d: 0.8, p: 1.3 },
                { t: "oh-oh, ", d: 0.8, p: 1.5 },
                { t: "oh-oh, ", d: 0.8, p: 1.3 }
            ],
            duration: 3.4
        },
        {
            time: 112.0,
            text: [
                { t: "Se ", d: 0.2 },
                { t: "escucha ", d: 0.8 },
                { t: "una ", d: 0.4 },
                { t: "melodía", d: 1.2, c: "#ffb3fe" }
            ],
            duration: 1.8
        },
        {
            time: 117.5,
            text: [
                { t: "El ", d: 0.2 },
                { t: "canto ", d: 0.4 },
                { t: "de ", d: 0.3 },
                { t: "esa ", d: 0.4 },
                { t: "niña", d: 0.8, c: "#641308" }
            ],
            duration: 1.5
        },
        {
            time: 122.0,
            text: [
                { t: "Y ", d: 0.4 },
                { t: "burbujea ", d: 0.7 },
                { t: "la ", d: 0.2 },
                { t: "sangre", d: 0.7, c: "#ff4d4d" }
            ],
            duration: 1.7
        },
        {
            time: 126.5,
            text: [
                { t: "Que ", d: 0.2 },
                { t: "corre ", d: 0.4 },
                { t: "por ", d: 0.2 },
                { t: "mis ", d: 0.2 },
                { t: "venas", d: 0.4 }
            ],
            duration: 1.6
        },
        {
            time: 128.7,
            text: [
                { t: "Y ", d: 0.2 },
                { t: "apenas ", d: 0.5, p: 0.4 },
                { t: "si ", d: 0.2 },
                { t: "me ", d: 0.2 },
                { t: "ves", d: 0.2 }
            ],
            duration: 1.5
        },
        {
            time: 131.7,
            text: [
                { t: "Me ", d: 0.2 },
                { t: "tumbas ", d: 0.5 },
                { t: "del ", d: 0.2 },
                { t: "impacto ", d: 0.6, c: "#ff4d4d" },
                { t: "y ", d: 0.2 },
                { t: "te ", d: 0.2 },
                { t: "echas ", d: 0.4 },
                { t: "a ", d: 0.2 },
                { t: "reír", d: 0.3 }
            ],
            duration: 3.0
        },
        {
            time: 136.0,
            text: [
                { t: "Me ", d: 0.2 },
                { t: "da ", d: 0.2 },
                { t: "un ", d: 0.2 },
                { t: "paro ", d: 0.3 },
                { t: "cardíaco", d: 0.6, c: "#ff4d4d" }
            ],
            duration: 1.7
        },
        {
            time: 139.0,
            text: [
                { t: "Oh-oh, ", d: 1.0 },
                { t: "oh-oh, ", d: 1.0 },
                { t: "oh-oh, ", d: 1.0 },
                { t: "oh-oh", d: 1.0 }
            ],
            duration: 3.4
        },
        {
            time: 147.0,
            text: [
                { t: "No ", d: 0.5 },
                { t: "me ", d: 0.5 },
                { t: "mires ", d: 0.9 },
                { t: "con ", d: 0.5 },
                { t: "esos ", d: 0.7 },
                { t: "ojos ", d: 1.3, c: "#ff39bd" },
                { t: "(que ", d: 0.3, p: 0.3 },
                { t: "me)", d: 0.3 }
            ],
            duration: 2.2
        },
        {
            time: 152.5,
            text: [
                { t: "Me ", d: 0.2 },
                { t: "deslumbras ", d: 0.8, c: "#ffd700" },
                { t: "(que ", d: 0.2, p: 0.2 },
                { t: "me), ", d: 0.2, p: 0.4 },
                { t: "me ", d: 0.2 },
                { t: "derrumbas", d: 0.7 }
            ],
            duration: 2.5
        },
        {
            time: 157.0,
            text: [
                { t: "No ", d: 0.3 },
                { t: "me ", d: 0.3 },
                { t: "mires ", d: 0.5 },
                { t: "con ", d: 0.3 },
                { t: "esos ", d: 0.3 },
                { t: "ojos ", d: 1.2, c: "#ff39bd" },
                { t: "(porque)", d: 0.5 }
            ],
            duration: 2.3
        },
        {
            time: 161.0,
            text: [
                { t: "Te ", d: 0.4 },
                { t: "lo ", d: 0.4 },
                { t: "doy ", d: 0.4 },
                { t: "todo, ", d: 0.6, p: 0.9 },
                { t: "ni ", d: 0.4 },
                { t: "modo", d: 0.6 }
            ],
            duration: 1.6
        },
        {
            time: 165.7,
            text: [
                { t: "No ", d: 0.3 },
                { t: "me ", d: 0.3 },
                { t: "mires ", d: 0.7 },
                { t: "con ", d: 0.4 },
                { t: "esos ", d: 0.5 },
                { t: "ojos ", d: 1.3, c: "#ff39bd" },
                { t: "(que ", d: 0.3, p: 0.3 },
                { t: "me)", d: 0.3 }
            ],
            duration: 2.4
        },
        {
            time: 170.5,
            text: [
                { t: "Me ", d: 0.3 },
                { t: "derrites ", d: 0.7 },
                { t: "(que ", d: 0.2, p: 0.2 },
                { t: "me), ", d: 0.2, p: 0.2 },
                { t: "me ", d: 0.2 },
                { t: "trasmites", d: 0.7 }
            ],
            duration: 2.3
        },
        {
            time: 174.5,
            text: [
                { t: "La ", d: 0.2 },
                { t: "vergüenza ", d: 0.8 },
                { t: "del ", d: 0.8 },
                { t: "sol, ", d: 0.3, c: "#ffd700", p: 0.5 },
                { t: "quien ", d: 0.5 },
                { t: "en ", d: 0.4 },
                { t: "su ", d: 0.4 },
                { t: "resplandor", d: 0.8, c: "#ffd700" }
            ],
            duration: 3.1
        },
        {
            time: 180.0,
            text: [
                { t: "Se ", d: 0.6 },
                { t: "ve ", d: 0.7 },
                { t: "opacado", d: 2.2 }
            ],
            duration: 1.2
        },
        {
            time: 186.4,
            text: [
                { t: "A ", d: 0.4 },
                { t: "tu ", d: 0.4 },
                { t: "la", d: 1.2 },
                { t: "do", d: 0.7 }
            ],
            duration: 0.9
        },
        {
            time: 205.5,
            text: [
                { t: "No ", d: 0.4 },
                { t: "me ", d: 0.4 },
                { t: "mires ", d: 0.5 },
                { t: "con ", d: 0.4 },
                { t: "esos ", d: 0.4 },
                { t: "ojos", d: 1.8, c: "#ff39bd" }
            ],
            duration: 1.8
        },
        {
            time: 210.0,
            text: [
                { t: "Ah-ah-ah, ", d: 2.8 },
                { t: "ah-ah-ah", d: 2.8, p: 4.5 }
            ],
            duration: 10.8
        }
    ]
};

export default impacto;