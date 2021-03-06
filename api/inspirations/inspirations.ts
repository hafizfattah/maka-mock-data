import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/inspirations": {
    code: 200,
    status: "OK",
    data: {
      banner: "https://i.ibb.co/ww8MvfW/inspirationbg.png",
      en: {
        title: "Inspired by The Boundlessness of Possibility",
        description:
          "What excites us most is developing collaborations to spread social consciousness with an aim to improve lives at every step along the way.",
      },
      id: {
        title: "Terinspirasi oleh Kemungkinan Tanpa Batas",
        description:
          "Yang paling menggairahkan kami adalah mengembangkan kolaborasi untuk menyebarkan kesadaran sosial dengan tujuan untuk meningkatkan kehidupan di setiap langkah di sepanjang jalan.",
      },
      articles: [
        {
          id: "1",
          title: "Tuku x Living Loving",
          image: "https://i.ibb.co/zG1CxWH/tukuxliving-1.png",
          lang: {
            en: {
              description:
                "Toko Kopi Tuku and Living Loving collaborated to create an outlet for #TetanggaTuku to play and be creative while staying at home in the middle of the pandemic.",
            },
            id: {
              description: "Sebuah paket kolaborasi dari kami berisi Kopi Susu Tetangga dan permainan untuk kamu mainkan di rumah.",
            },
          },
        },
        {
          id: "2",
          title: "SAPA DENGAN RASA  - TUKU X POS INDONESIA",
          image: "https://i.ibb.co/crxy33L/sapa-dengan-rasa.png",
          lang: {
            en: {
              description:
                "Together with Pos Indonesia, we invited all of #TetanggaTuku to try “Sapa Dengan Rasa”, a new way to say hello in the form of ready-to-brew postcards.",
            },
            id: {
              description: "Sapa Dengan Rasa, sebuah cara baru untuk kamu menyapa lewat kartu pos siap seduh.",
            },
          },
        },
        {
          id: "3",
          title: "TUKU “MAAF”",
          image: "https://i.ibb.co/hXqtJh0/tuku-maaf.png",
          lang: {
            en: {
              description:
                "“Beri Maaf” is a new form of conveying apologies for you to send a heartfelt message to your loved ones despite being apart.",
            },
            id: {
              description: "Paket “Beri Maaf”, sebuah wujud baru pesan maaf untuk kamu yang terpisah jarak.",
            },
          },
        },
        {
          id: "4",
          title: "FUTAGO X TAHU KRISPI FATMAWATI",
          image: "https://i.ibb.co/D1RpRJJ/futagoxkrispi.png",
          lang: {
            en: {
              description:
                "To welcome the month of Ramadan in 2021, Futago x Tahu Krispi Fatmawati held hands together to collaboratively create a product for Futagotachi and Sobat Tahu.",
            },
            id: {
              description: "“Minari” - Mini Inari, sebuah produk yang menggabungkan konsep JAPINDO dan kelokalan gorengan ala Tahu Krispi Fatmawati.",
            },
          },
        },
      ],
    },
  },
};

export default delay(proxy, 500);
