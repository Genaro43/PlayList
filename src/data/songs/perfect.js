const perfect = {
    id: 'perfect',
    title: 'Perfect',
    artist: 'Ed Sheeran',
    themeColor: '#ffffff',
    //snippetStart: 205.5,
    isTranslated: true,    // <-- ESTO ACTIVA EL MODO BILINGÜE SOLO PARA ESTA CANCIÓN
    audioSrc: '/music/perfect.mp3',
    visualEffects: [
        {
            type: 'rose',
            startTime: 218.0, // Segundo exacto donde empieza a crecer el tallo
            endTime: 250.0    // Segundo exacto donde la rosa desaparece (puedes ajustarlo)
        }
    ],
    lyrics: [
        {
            time: 2.5,
            text: [
                { t: "I " },
                { t: "found ", d: 0.3 },
                { t: " a ", d: 0.2 },
                { t: "love", c: "#ff4d4d", d: 1, p: 1.3 },
                { t: " for me" }],
            translation: "Encontré un amor para mí",
            duration: 4.1
        },
        {
            time: 10.0,
            text: [
                { t: "Darling, ", d: 1 },
                { t: "just ", d: 0.5 },
                { t: "dive ", c: "#4dff4d", d: 0.5 },
                { t: "right ", d: 0.2 },
                { t: "in ", d: 0.2, p: 1.5 },
                { t: "and ", d: 0.2 },
                { t: "follow ", d: 0.6 },
                { t: "my ", d: 0.3 },
                { t: "lead", d: 0.7 }
            ],
            translation: "Cariño, simplemente lánzate y sígueme",
            duration: 9.0
        },
        {
            time: 17.5,
            text: [
                { t: "Well, ", d: 0.5 },
                { t: "I ", d: 0.2 },
                { t: "found  ", d: 0.5 },
                { t: "a ", d: 0.2 },
                { t: "girl, ", d: 1, c: "#ffb3fe", p: 1.4 },
                { t: "beautiful ", d: 1.3 },
                { t: "and ", d: 0.2 },
                { t: "sweet", c: "#f3e5ab" }
            ],
            translation: "Bueno, encontré a una chica, hermosa y dulce",
            duration: 7.5
        },
        {
            time: 25.5,
            text: [
                { t: "Oh, ", d: 0.4 },
                { t: "I ", d: 0.2 },
                { t: "never ", d: 0.6 },
                { t: "knew ", d: 0.5 },
                { t: "you ", d: 0.3 },
                { t: "were ", d: 0.2 },
                { t: "the ", d: 0.2 },
                { t: "someone ", d: 1 },
                { t: "waiting ", d: 0.7 },
                { t: "for ", d: 0.3 },
                { t: "me", d: 2.0 }
            ], translation: "Oh, nunca supe que eras ese alguien esperando por mí",
            duration: 6.0
        },
        {
            time: 31.5,
            text: [
                { t: "'Cause ", d: 0.4 },
                { t: "we ", d: 0.3 },
                { t: "were ", d: 0.3 },
                { t: "just ", d: 0.4 },
                { t: "kids ", d: 0.8, p: 0.3 },
                { t: "when ", d: 0.4 },
                { t: "we ", d: 0.3 },
                { t: "fell ", d: 0.5 },
                { t: "in ", d: 0.4 },
                { t: "love", c: "#ff4d4d", d: 1.0 }
            ],
            translation: "Porque éramos solo niños cuando nos enamoramos",
            duration: 6.5
        },
        {
            time: 36.50,
            text: [
                { t: "Not ", d: 0.4 },
                { t: "knowing ", d: 0.7 },
                { t: "what ", d: 1.3 },
                { t: "it ", d: 0.4 },
                { t: "was", d: 1.5, p: 0.8 }
            ],
            translation: "Sin saber qué era",
            duration: 5.0
        },
        {
            time: 40.0,
            text: [
                { t: "I ", d: 0.4 },
                { t: "will ", d: 0.4 },
                { t: "not ", d: 0.5 },
                { t: "give ", d: 0.5 },
                { t: "you ", d: 0.5, c: "#ffb3fe" },
                { t: "up ", d: 0.8, p: 0.9 },
                { t: "this ", d: 0.8 },
                { t: "time", d: 2.3, c: "#4dff4d" }
            ], translation: "No te abandonaré esta vez",
            duration: 6.0
        },
        {
            time: 48.0,
            text: [
                { t: "Darling, ", d: 0.5 },
                { t: "just ", d: 0.3 },
                { t: "kiss ", d: 0.8, c: "#ff4d4d" },
                { t: "me ", d: 0.4 },
                { t: "slow", d: 1.2, c: "#f3e5ab" }
            ],
            translation: "Cariño, solo bésame lento",
            duration: 5.5
        },
        {
            time: 51.5,
            text: [
                { t: "Your ", d: 0.4, c: "#ffb3fe" },
                { t: "heart ", d: 0.5, c: "#ff4d4d" },
                { t: "is ", d: 0.2 },
                { t: "all ", d: 0.5 },
                { t: "I ", d: 0.3 },
                { t: "own", d: 1.5 }
            ],
            translation: "Tu corazón es todo lo que poseo",
            duration: 4.5
        },
        {
            time: 55.0,
            text: [
                { t: "And ", d: 0.4 },
                { t: "in ", d: 0.2 },
                { t: "your ", d: 0.4, c: "#ffb3fe" },
                { t: "eyes, ", d: 0.9, c: "#ffd900" },
                { t: "you're ", d: 0.7 },
                { t: "holding ", d: 1.2 },
                { t: "mine", d: 1.2 }
            ],
            translation: "Y en tus ojos, sostienes los míos",
            duration: 6.0
        },
        {
            time: 62.3,
            text: [
                { t: "Baby ", d: 1.5, c: "#ffb3fe" },
                { t: "I'm, ", d: 0.5, p: 2.2 },
                { t: "dancing ", d: 0.7 },
                { t: "in ", d: 0.3 },
                { t: "the ", d: 0.4 },
                { t: "dark", d: 1.2 }
            ],
            translation: "Bebé, estoy bailando en la oscuridad",
            duration: 5.0
        },
        {
            time: 70.0,
            text: [
                { t: "With ", d: 0.3 },
                { t: "you ", d: 0.2, c: "#ffb3fe" },
                { t: "between ", d: 0.5 },
                { t: "my ", d: 0.3 },
                { t: "arms", d: 1.0 }
            ],
            translation: "Contigo entre mis brazos",
            duration: 4.0
        },
        {
            time: 73.50,
            text: [
                { t: "Barefoot ", d: 0.6 },
                { t: "on ", d: 0.2 },
                { t: "the ", d: 0.2 },
                { t: "grass", d: 1.0 }
            ],
            translation: "Descalzos sobre el césped",
            duration: 3.5
        },
        {
            time: 77.0,
            text: [
                { t: "Listening ", d: 0.6 },
                { t: "to ", d: 0.2 },
                { t: "our ", d: 0.7 },
                { t: "favourite ", d: 0.9 },
                { t: "song", d: 1.0, c: "#f3e5ab" }
            ],
            translation: "Escuchando nuestra canción favorita",
            duration: 5.0
        },
        {
            time: 81.0,
            text: [
                { t: "When ", d: 0.3 },
                { t: "you ", d: 0.2 },
                { t: "said ", d: 0.3 },
                { t: "you ", d: 0.2, c: "#ffb3fe" },
                { t: "looked ", d: 0.4 },
                { t: "a ", d: 0.2 },
                { t: "mess", d: 1.0 }
            ],
            translation: "Cuando dijiste que te veías mal",
            duration: 4.5
        },
        {
            time: 84.0,
            text: [
                { t: "I ", d: 0.2 },
                { t: "whispered ", d: 0.7 },
                { t: "underneath ", d: 0.7 },
                { t: "my ", d: 0.2 },
                { t: "breath", d: 1.0 }
            ],
            translation: "Susurré bajo mi aliento",
            duration: 5.0
        },
        {
            time: 87.5,
            text: [
                { t: "But ", d: 0.3 },
                { t: "you ", d: 0.4 },
                { t: "heard ", d: 0.8 },
                { t: "it", d: 1.0 }
            ],
            translation: "Pero lo escuchaste",
            duration: 3.5
        },
        {
            time: 90.0,
            text: [
                { t: "Darling, ", d: 0.8 },
                { t: "you ", d: 0.2, c: "#ffb3fe" },
                { t: "look ", d: 0.4, p: 1.0 },
                { t: "perfect ", c: "#ffd900", d: 1.2 },
                { t: "tonight", d: 1.0 }
            ],
            translation: "Cariño, te ves perfecta esta noche",
            duration: 6.0
        },
        {
            time: 101.0,
            text: [
                { t: "I ", d: 0.2 },
                { t: "found ", d: 0.3 },
                { t: "a ", d: 0.2 },
                { t: "woman, ", d: 1.2, p: 1.5 },
                { t: "stronger ", d: 0.7 },
                { t: "than ", d: 0.3 },
                { t: "anyone ", d: 0.7 },
                { t: "I ", d: 0.2 },
                { t: "know", d: 1.0 }
            ],
            translation: "Encontré a una mujer, más fuerte que nadie que conozca",
            duration: 8.0
        },
        {
            time: 108.0,
            text: [
                { t: "She ", d: 0.3, c: "#ffb3fe" },
                { t: "shares ", d: 0.5 },
                { t: "my ", d: 0.2 },
                { t: "dreams, ", d: 0.5 },
                { t: "I ", d: 0.2 },
                { t: "hope ", d: 0.4 },
                { t: "that ", d: 0.2 },
                { t: "someday ", d: 0.6 },
                { t: "I'll ", d: 0.3 },
                { t: "share ", d: 0.4 },
                { t: "her ", d: 0.2 },
                { t: "home", d: 3.0 }
            ],
            translation: "Ella comparte mis sueños, espero que algún día comparta su hogar",
            duration: 9.5
        },
        {
            time: 108.0,
            text: [
                { t: "She ", d: 0.3 },
                { t: "shares ", d: 0.5 },
                { t: "my ", d: 0.2 },
                { t: "dreams, ", d: 0.5 },
                { t: "I ", d: 0.2 },
                { t: "hope ", d: 0.4 },
                { t: "that ", d: 0.2 },
                { t: "someday ", d: 0.6 },
                { t: "I'll ", d: 0.3 },
                { t: "share ", d: 0.4 },
                { t: "her ", d: 0.2 },
                { t: "home", d: 3.0 }
            ],
            translation: "Ella comparte mis sueños, espero que algún día comparta su hogar",
            duration: 9.5
        },
        {
            time: 116.0,
            text: [
                { t: "I ", d: 0.2 },
                { t: "found ", d: 0.3 },
                { t: "a ", d: 0.2 },
                { t: "love ", c: "#ff4d4d", d: 1.0, p: 2.4 },
                { t: "to ", d: 0.2 },
                { t: "carry ", d: 0.5 },
                { t: "more ", d: 0.3 },
                { t: "than ", d: 0.2 },
                { t: "just ", d: 0.3 },
                { t: "my ", d: 0.2 },
                { t: "secrets", d: 1.5 }
            ],
            translation: "Encontré un amor para llevar más que solo mis secretos",
            duration: 8.0
        },
        {
            time: 124.0,
            text: [
                { t: "To ", d: 0.2 },
                { t: "carry ", d: 0.4 },
                { t: "love, ", c: "#ff4d4d", d: 1.0, p: 0.6 },
                { t: "to ", d: 0.2 },
                { t: "carry ", d: 0.4 },
                { t: "children ", d: 0.8 },
                { t: "of ", d: 0.2 },
                { t: "our ", d: 0.8 },
                { t: "own", d: 1.0 }
            ],
            translation: "Para llevar amor, para llevar nuestros propios hijos",
            duration: 7.5
        },
        {
            time: 130.0,
            text: [
                { t: "We ", d: 0.3 },
                { t: "are ", d: 0.3 },
                { t: "still ", d: 0.3 },
                { t: "kids ", d: 0.8, p: 0.5 },
                { t: "but ", d: 0.2 },
                { t: "we're ", d: 0.3 },
                { t: "so ", d: 0.4 },
                { t: "in ", d: 0.2 },
                { t: "love", c: "#ff4d4d", d: 1.5 }
            ],
            translation: "Aún somos niños, pero estamos tan enamorados",
            duration: 6.5
        },
        {
            time: 135.5,
            text: [
                { t: "Fightin' ", d: 0.6 },
                { t: "against ", d: 0.4 },
                { t: "all ", d: 0.3 },
                { t: "odds", d: 1.5 }
            ],
            translation: "Luchando contra todas las probabilidades",
            duration: 4.5
        },
        {
            time: 139.0,
            text: [
                { t: "I ", d: 0.2 },
                { t: "know ", d: 0.3 },
                { t: "we'll ", d: 0.2 },
                { t: "be ", d: 1.2 },
                { t: "alright ", d: 1 },
                { t: "this ", d: 0.8 },
                { t: "time", d: 1.9, c: "#4dff4d" }
            ],
            translation: "Sé que estaremos bien esta vez",
            duration: 5.5
        },
        {
            time: 146.5,
            text: [
                { t: "Darling, ", d: 0.8, p: 0.3 },
                { t: "just ", d: 0.3 },
                { t: "hold ", d: 0.5 },
                { t: "my ", d: 0.2 },
                { t: "hand", d: 1.5 }
            ],
            translation: "Cariño, solo toma mi mano",
            duration: 5.0
        },
        {
            time: 150.0,
            text: [
                { t: "Be ", d: 0.2 },
                { t: "my ", d: 0.3 },
                { t: "girl, ", c: "#ffb3fe", d: 0.8 },
                { t: "I'll ", d: 0.2 },
                { t: "be ", d: 0.2 },
                { t: "your ", d: 0.3 },
                { t: "man", d: 1.5 }
            ],
            translation: "Sé mi chica, yo seré tu hombre",
            duration: 4.5
        },
        {
            time: 154.0,
            text: [
                { t: "I ", d: 0.3 },
                { t: "see ", d: 0.4 },
                { t: "my ", d: 0.3 },
                { t: "future ", d: 1.6 },
                { t: "in ", d: 1 },
                { t: "your ", d: 0.3, c: "#ffb3fe" },
                { t: "eyes", d: 1.5, c: "#ffd900" }
            ],
            translation: "Veo mi futuro en tus ojos",
            duration: 5.5
        },
        {
            time: 161.0,
            text: [
                { t: "Oh, ", d: 0.5, p: 0.2 },
                { t: "baby, ", d: 0.6, c: "#ffb3fe" },
                { t: "I'm ", d: 0.2, p: 1.8 },
                { t: "dancing ", d: 0.6 },
                { t: "in ", d: 0.2 },
                { t: "the ", d: 0.2 },
                { t: "dark", d: 1.2 }
            ],
            translation: "Oh, bebé, estoy bailando en la oscuridad",
            duration: 5.0
        },
        {
            time: 167.5,
            text: [
                { t: "with ", d: 0.9 },
                { t: "you ", d: 0.3, c: "#ffb3fe" },
                { t: "between ", d: 0.7 },
                { t: "my ", d: 0.4 },
                { t: "arms", d: 1.5 }
            ],
            translation: "contigo entre mis brazos",
            duration: 4.5
        },
        {
            time: 172.5,
            text: [
                { t: "Barefoot ", d: 0.6 },
                { t: "on ", d: 0.2 },
                { t: "the ", d: 0.2 },
                { t: "grass", d: 1.4 }
            ],
            translation: "Descalzos sobre el césped",
            duration: 4.0
        },
        {
            time: 176.0,
            text: [
                { t: "while ", d: 0.3 },
                { t: "listenin' ", d: 0.6 },
                { t: "to ", d: 0.2 },
                { t: "our ", d: 0.4 },
                { t: "favourite ", d: 1.0 },
                { t: "song", d: 0.6 }
            ],
            translation: "mientras escuchamos nuestra canción favorita",
            duration: 5.0
        },
        {
            time: 179.0,
            text: [
                { t: "When ", d: 0.2 },
                { t: "I ", d: 0.2 },
                { t: "saw ", d: 0.3 },
                { t: "you ", d: 0.2 },
                { t: "in ", d: 0.2 },
                { t: "that ", d: 0.3 },
                { t: "dress, ", d: 0.8, p: 0.8 },
                { t: "lookin' ", d: 0.5 },
                { t: "so ", d: 0.3 },
                { t: "beautiful", c: "#ffb3fe", d: 1.5 }
            ],
            translation: "Cuando te vi con ese vestido, luciendo tan hermosa",
            duration: 7.0
        },
        {
            time: 185.0,
            text: [
                { t: "I ", d: 0.2 },
                { t: "don't ", d: 0.4 },
                { t: "deserve ", d: 1.7 },
                { t: "this,", d: 1.0 }
            ],
            translation: "No merezco esto,",
            duration: 3.5
        },
        {
            time: 189.0,
            text: [
                { t: "darling, ", d: 0.6, p: 0.3 },
                { t: "you ", d: 0.2, c: "#ffb3fe" },
                { t: "look ", d: 0.4, p: 0.5 },
                { t: "perfect ", c: "#ffd900", d: 1.2 },
                { t: "tonight", d: 1.5 }
            ],
            translation: "cariño, te ves perfecta esta noche",
            duration: 6.0
        },
        {
            time: 199.0,
            text: [
                { t: "No, ", d: 0.6, p: 0.2 },
                { t: "no, ", d: 0.6, p: 0.2 },
                { t: "no", d: 1.0 }
            ],
            translation: "No, no, no",
            duration: 4.0
        },
        {
            time: 203.5,
            text: [
                { t: "Mm-mm", d: 2.0 }
            ],
            translation: "Mm-mm",
            duration: 4.0
        },
        {
            time: 206.0,
            text: [
                { t: "Baby, ", d: 1.8, c: "#ffb3fe", p: 0.2 },
                { t: "I'm ", d: 1.8, p: 0.2 },
                { t: "dancing ", d: 0.8 },
                { t: "in ", d: 0.5 },
                { t: "the ", d: 0.5 },
                { t: "dark", d: 1.2 }
            ],
            translation: "Bebé, estoy bailando en la oscuridad",
            duration: 5.0
        },
        {
            time: 214.0,
            text: [
                { t: "with ", d: 0.5 },
                { t: "you ", d: 0.2, c: "#ffb3fe" },
                { t: "between ", d: 0.5 },
                { t: "my ", d: 0.3 },
                { t: "arms", d: 1.5 }
            ],
            translation: "contigo entre mis brazos",
            duration: 4.5
        },
        {
            time: 218.0,
            text: [
                { t: "Barefoot ", d: 0.6 },
                { t: "on ", d: 0.2 },
                { t: "the ", d: 0.2 },
                { t: "grass", d: 1.2 }
            ],
            translation: "Descalzos sobre el césped",
            duration: 4.0
        },
        {
            time: 221.5,
            text: [
                { t: "while ", d: 0.3 },
                { t: "listenin' ", d: 0.6 },
                { t: "to ", d: 0.2 },
                { t: "our ", d: 0.4 },
                { t: "favourite ", d: 0.8 },
                { t: "song", d: 1.0 }
            ],
            translation: "mientras escuchamos nuestra canción favorita",
            duration: 5.0
        },
        {
            time: 225.0,
            text: [
                { t: "I ", d: 0.2 },
                { t: "have ", d: 0.3 },
                { t: "faith ", d: 0.5 },
                { t: "in ", d: 0.2 },
                { t: "what ", d: 0.3 },
                { t: "I ", d: 0.2 },
                { t: "see, ", d: 0.8, p: 0.5 },
                { t: "now ", d: 0.3 },
                { t: "I ", d: 0.2 },
                { t: "know ", d: 0.4 },
                { t: "I ", d: 0.3 },
                { t: "have ", d: 0.7 },
                { t: "met", d: 0.9 }
            ],
            translation: "Tengo fe en lo que veo, ahora sé que he conocido",
            duration: 6.5
        },
        {
            time: 231.0,
            text: [
                { t: "An ", d: 0.2 },
                { t: "angel ", d: 1.3 },
                { t: "in ", d: 0.4 },
                { t: "person, ", d: 1, p: 0.5 },
                { t: "and ", d: 0.2 },
                { t: "she ", d: 0.8, c: "#ffb3fe" },
                { t: "looks ", d: 0.7 },
                { t: "perfect", c: "#ffd900", d: 1.5 }
            ],
            translation: "A un ángel en persona, y ella luce perfecta",
            duration: 6.0
        },
        {
            time: 238.0,
            text: [
                { t: "I ", d: 0.2 },
                { t: "don't ", d: 1.0 },
                { t: "deserve ", d: 1.6 },
                { t: "this,", d: 1.0 }
            ],
            translation: "No merezco esto,",
            duration: 3.5
        },
        {
            time: 242.0,
            text: [
                { t: "you ", d: 0.6 },
                { t: "look ", d: 1.0, p: 0.3 },
                { t: "perfect ", c: "#ffd900", d: 1.7 },
                { t: "tonight", d: 1.3 }
            ],
            translation: "te ves perfecta esta noche",
            duration: 17.8
        }
    ]
}

export default perfect;