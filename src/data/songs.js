// src/data/songs.js
export const songLibrary = [
  /* {
    id: 'piel-canela',
    title: 'Piel Canela',
    artist: 'Los Panchos',
    themeColor: '#f3e5ab', // Dorado suave
    lyrics: [
      { time: 0, text: "Si perdiera el arco iris, su belleza", duration: 4.5 },
      { time: 4.5, text: "Y las flores, su perfume y su color", duration: 4.0 },
      { time: 8.5, text: "No sería tan inmensa mi tristeza", duration: 4.5 },
      { time: 13.0, text: "Como aquella de quedarme sin tu amor", duration: 4.5 },
      { time: 17.5, text: "Me importas tú, y tú, y tú", duration: 4.0 },
      { time: 21.5, text: "Y solamente tú, y tú, y tú", duration: 4.5 },
      { time: 26.0, text: "Me importas tú, y tú, y tú", duration: 4.0 },
      { time: 30.0, text: "Y nadie más que tú", duration: 4.5 },
      { time: 34.5, text: "Ojos negros, piel canela", duration: 3.5 },
      { time: 38.0, text: "Que me llegan a desesperar", duration: 4.5 },
      { time: 42.5, text: "Me importas tú, y tú, y tú", duration: 4.5 },
      { time: 47.0, text: "Y solamente tú, y tú, y tú", duration: 4.0 },
      { time: 51.0, text: "Me importas tú, y tú, y tú", duration: 4.5 },
      { time: 55.5, text: "Y nadie más que tú", duration: 5.0 },
    ]
  },
  {
    id: 'besame-mucho',
    title: 'Bésame Mucho',
    artist: 'Consuelo Velázquez',
    themeColor: '#ff6b6b', // Rojo romántico
    lyrics: [
      { time: 0, text: "Bésame, bésame mucho", duration: 5.0 },
      { time: 5.0, text: "Como si fuera esta noche la última vez", duration: 6.0 },
      { time: 11.0, text: "Bésame, bésame mucho", duration: 5.0 },
      { time: 16.0, text: "Que tengo miedo a perderte, perderte después", duration: 6.5 }
    ]
  }, */
  {
    id: 'amapolas',
    title: 'Amapolas',
    artist: 'Leo Rizzi',
    themeColor: '#8bc34a', // Verde pastel
    audioSrc: '/music/amapolas.mp3',
lyrics: [
    { time: 4.20,  text: "TU y YO", duration: 3. },
    { time: 7.62,  text: "Cantándole a las amapolas", duration: 3.5 }, 
    { time: 11.42, text: "Riéndonos que el río llora", duration: 3.3 }, 
    { time: 15.12, text: "Y escuchando lo que te escribí", duration: 3.4 }, 
    { time: 19.22, text: "Tu y YO", duration: 3.42 },     
    { time: 22.94, text: "Bailando alrededor del río", duration: 2.92 }, 
    { time: 26.76, text: "Aceptando todo lo que vino", duration: 3.5 }, 
    { time: 30.56, text: "Bebiéndolo y dejando ir", duration: 3.5 }, 
    { time: 34.66, text: "Bebiéndolo y dejando ir", duration: 3.5 },
    { time: 38.06, text: "♫ ♪ ♫", duration: 4.17 },
    { time: 42.23, text: "Bebiéndolo y dejando ir", duration: 3.5 },
    { time: 45.63, text: ". . .", duration: 3.3 },      
    ]
  },
  {
    id: "yaNoSeQueHacerConmigo",
    title: "Ya No Sé Qué Hacer Conmigo",
    artist: "El Cuarteto De Nos",
    themeColor: "#3fe2ff", // Azul celeste
    audioSrc: "/music/yaNoSeQueHacerConmigo.mp3",
    lyrics: [
      { time: 2.90, text: "Ya fui al psicólogo, fui al teólogo", duration: 2 },
      { time: 5.1, text: "Fui al astrólogo, fui al enólogo", duration: 2.5 },
      { time: 7.7, text: "Ya fui alchólico y fui lambeta", duration: 2.0 },
      { time: 9.8, text: "Ya fui anónimo y ya hice dieta", duration: 2.0 },
      { time: 12.3, text: "Ya lanncé pierdas y escupitajos", duration: 2.0 },
      { time: 14.60, text: "Al lugar donde ahora trabajo", duration: 2.2 },
      { time: 17.0, text: "Y mi legajo cuenta a destajo", duration: 2.0 },
      { time: 19.40, text: "Que me porté bien y que armé relajo", duration: 1.8 },
      { time: 21.30, text: "Y oigo una voz que dice sin razón", duration: 3.7 },
      { time: 25.40, text: "\"Vos siempre cambiando ya no cambias más\"", duration: 4 },
      { time: 31.00, text: "Y yo estoy cada vez más igual", duration: 3.5 },
      { time: 35.8, text: "Ya no sé qué hacer conmigo", duration: 3.6 }, // Repetición de la línea
      { time: 39.7, text: "Y oigo una voz que dice con razón", duration: 3.7 },
      { time: 44, text: "\"Vos siempre cambiando ya no cambias más\"", duration: 5 },
      { time: 49.3, text: "Y yo estoy cada vez más igual", duration: 4.5 },
      { time: 54.10, text: "Ya no sé qué hacer conmigo", duration: 3.5 },
      { time: 58.00, text: ". . .", duration: 2.5 }, 
    ]
  },/*
  {
    id: 'perfect',
    title: 'Perfect',
    artist: 'Ed Sheeran',
    themeColor: '#ffffff', 
    isTranslated: true,    // <-- ESTO ACTIVA EL MODO BILINGÜE SOLO PARA ESTA CANCIÓN
    audioSrc: '/music/perfect.mp3',
    lyrics: [
          { time: 2.5, 
            text: [
              { t: "I " }, 
              { t: "found ", d: 0.3 }, 
              { t: " a ", d: 0.2 }, 
              { t: "love", c: "#ff4d4d", d: 1, p: 1.3 }, 
              { t: " for me" }], 
              translation: "Encontré un amor para mí", 
              duration: 4 
            },
          { time: 10.0, 
            text: [
              { t: "Darling, ", d: 1 }, 
              { t: "just ", d: 0.5 }, 
              { t: "dive ", c: "#4dff4d", d: 0.5 }, 
              { t: "right ", d: 0.2 }, 
              { t: "in ", d: 0.2, p: 1.3 }, 
              { t: "and ", d: 0.2 }, 
              { t: "follow ", d: 0.6 }, 
              { t: "my ", d: 0.3 }, 
              { t: "lead", d: 0.7 }
            ], 
            translation: "Cariño, simplemente lánzate y sígueme", 
            duration: 9.0 
          },
          { time: 17.5, 
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
          { time: 25.5, 
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
          { time: 31.5, 
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
          { time: 36.50, 
            text: [
              { t: "Not ", d: 0.4 }, 
              { t: "knowing ", d: 0.6 }, 
              { t: "what ", d: 0.3 }, 
              { t: "it ", d: 0.2 }, 
              { t: "was", d: 1.5, p: 0.8 }
            ],
            translation: "Sin saber qué era", 
            duration: 5.0 
          },
          { time: 40.0, 
            text: [
              { t: "I ", d: 0.4 }, 
              { t: "will ", d: 0.4 }, 
              { t: "not ", d: 0.5 }, 
              { t: "give ", d: 0.5 }, 
              { t: "you ", d: 0.5 }, 
              { t: "up ", d: 0.8, p: 0.9 }, 
              { t: "this ", d: 0.8 }, 
              { t: "time", d: 2.3 }
            ], translation: "No te abandonaré esta vez", 
            duration: 6.0 
          },
          { time: 48.0, 
            text: [
              { t: "Darling, ", d: 0.5 }, 
              { t: "just ", d: 0.3 }, 
              { t: "kiss ", d: 0.5 }, 
              { t: "me ", d: 0.2 }, 
              { t: "slow", d: 1.2 }
            ], 
            translation: "Cariño, solo bésame lento", 
            duration: 5.5 
          },
          { time: 51.5, 
            text: [
              { t: "Your ", d: 0.4 }, 
              { t: "heart ", d: 0.5 }, 
              { t: "is ", d: 0.2 }, 
              { t: "all ", d: 0.5 }, 
              { t: "I ", d: 0.3 }, 
              { t: "own", d: 1.5 }
            ], 
            translation: "Tu corazón es todo lo que poseo", 
            duration: 4.5 
          },
          { time: 55.0, 
            text: [
              { t: "And ", d: 0.4 }, 
              { t: "in ", d: 0.2 }, 
              { t: "your ", d: 0.4 }, 
              { t: "eyes, ", d: 0.7 },
              { t: "you're ", d: 0.5 }, 
              { t: "holding ", d: 1 }, 
              { t: "mine", d: 1.2 }
            ], 
            translation: "Y en tus ojos, sostienes los míos", 
            duration: 6.0 
          },
          { time: 62.3, 
            text: [
              { t: "Baby ", d: 1.5 }, 
              { t: "I'm, ", d: 0.5, p: 2.2 }, 
              { t: "dancing ", d: 0.7 }, 
              { t: "in ", d: 0.2 }, 
              { t: "the ", d: 0.2 }, 
              { t: "dark", d: 1.2 }
            ], 
            translation: "Bebé, estoy bailando en la oscuridad", 
            duration: 5.0 
          },
          { time: 70.0, 
            text: [
              { t: "With ", d: 0.3 }, 
              { t: "you ", d: 0.2 }, 
              { t: "between ", d: 0.5 }, 
              { t: "my ", d: 0.3 }, 
              { t: "arms", d: 1.0 }
            ], 
            translation: "Contigo entre mis brazos", 
            duration: 4.0 
          },
          { time: 81.0, 
            text: [
              { t: "Barefoot ", d: 0.6 }, 
              { t: "on ", d: 0.2 }, 
              { t: "the ", d: 0.2 }, 
              { t: "grass", d: 1.0 }
            ],
            translation: "Descalzos sobre el césped", 
            duration: 3.5 
          },
          { time: 85.0, 
            text: [
              { t: "Listening ", d: 0.6 }, 
              { t: "to ", d: 0.2 }, 
              { t: "our ", d: 0.3 }, 
              { t: "favourite ", d: 0.6 }, 
              { t: "song", d: 1.0 }
            ], 
            translation: "Escuchando nuestra canción favorita", 
            duration: 5.0 
          },
          { time: 91.0, 
            text: [
              { t: "When ", d: 0.3 }, 
              { t: "you ", d: 0.2 }, 
              { t: "said ", d: 0.3 }, 
              { t: "you ", d: 0.2 }, 
              { t: "looked ", d: 0.4 }, 
              { t: "a ", d: 0.2 }, 
              { t: "mess", d: 1.0 }
            ], 
            translation: "Cuando dijiste que te veías mal", 
            duration: 4.5 
          },
          { time: 96.0, 
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
          { time: 102.0, 
            text: [
              { t: "But ", d: 0.3 }, 
              { t: "you ", d: 0.2 }, 
              { t: "heard ", d: 0.6 }, 
              { t: "it", d: 1.0 }
            ], 
            translation: "Pero lo escuchaste", 
            duration: 3.5 
          },
          { time: 106.0, 
            text: [
              { t: "Darling, ", d: 0.6 }, 
              { t: "you ", d: 0.2 }, 
              { t: "look ", d: 0.3 }, 
              { t: "perfect ", c: "#f3e5ab", d: 1.2 }, 
              { t: "tonight", d: 1.0 }
            ], 
            translation: "Cariño, te ves perfecta esta noche", 
            duration: 6.0 
          },
          { time: 115.0, 
            text: [
              { t: "I ", d: 0.2 }, 
              { t: "found ", d: 0.3 }, 
              { t: "a ", d: 0.2 }, 
              { t: "woman, ", d: 0.7 }, 
              { t: "stronger ", d: 0.7 }, 
              { t: "than ", d: 0.3 }, 
              { t: "anyone ", d: 0.7 }, 
              { t: "I ", d: 0.2 }, 
              { t: "know", d: 1.0 }
            ], 
            translation: "Encontré a una mujer, más fuerte que nadie que conozca", 
            duration: 8.0 
          },
          { time: 124.0, 
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
              { t: "home", d: 1.0 }
            ], 
            translation: "Ella comparte mis sueños, espero que algún día comparta su hogar", 
            duration: 9.5 
          },
          { time: 230.0, 
            text: [
              { t: "And ", d: 0.3 }, 
              { t: "she ", d: 0.2 }, 
              { t: "looks ", d: 0.4 }, 
              { t: "perfect", c: "#f3e5ab", d: 1.5 }


            ], 
            translation: "Y ella se ve perfecta", 
            duration: 5.0 

          },
          { time: 240.0, 
            text: [
            { t: "I ", d: 0.2 }, 
            { t: "don't ", d: 0.4 }, 
            { t: "deserve ", d: 0.7 }, 
            { t: "this", d: 1.0 }
          ], 
          translation: "No merezco esto", 
          duration: 4.0 
        },
          { time: 248.0, 
            text: [
              { t: "You ", d: 0.3 }, 
              { t: "look ", d: 0.4 }, 
              { t: "perfect ", c: "#f3e5ab", d: 1.5 }, 
              { t: "tonight", d: 1.0 }
            ], 
            translation: "Te ves perfecta esta noche", 
            duration: 6.0 }
        ]
  }*/
];