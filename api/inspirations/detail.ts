import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/inspirations/1": {
    code: 200,
    status: "OK",
    data: {
      banner: "https://i.ibb.co/zG1CxWH/tukuxliving-1.png",
      en: {
        title: "Tuku x Living Loving",
        caption: "Our collaboration package that consists of Kopi Susu Tetangga and a game for you to play at home.",
        description:
          "Toko Kopi Tuku and Living Loving collaborate to create something for Tetangga Tuku to play and be creative while at home in the middle of the pandemic. Tetangga Tuku and Anak Rumahan can spend time at home playing Quartet and Dominoes that were designed by Anak Rumahan while being creative using Tuku-in, which is the ingredient of Kopi Susu Tetangga that comes from the inspiration of Anak Rumahan's recipes that will be shared every week.",
      },
      id: {
        title: "Tuku x Living Loving",
        caption: "Paket kolaborasi kami yang terdiri dari Kopi Susu Tetangga dan permainan untuk Anda mainkan di rumah.",
        description:
          "Toko Kopi Tuku dan Living Loving berkolaborasi menciptakan sesuatu untuk Tetangga Tuku untuk bermain dan berkreasi selama di rumah di tengah pandemi. Tetangga Tuku dan Anak Rumahan bisa menghabiskan waktu di rumah bermain Kuartet dan Domino yang dirancang oleh Anak Rumahan sambil berkreasi menggunakan Tuku-in yang merupakan bahan dari Kopi Susu Tetangga yang berasal dari inspirasi resep Anak Rumahan yang akan dibagikan setiap pekan.",
      },
      gallery: [
        {
          id: 1,
          image:
            "https://static.republika.co.id/uploads/images/inpicture_slide/presiden-joko-widodo-kiri-bersama-ibu-negara-iriana-ketiga-_170702140946-900.jpg",
        },
        {
          id: 2,
          image:
            "https://static.republika.co.id/uploads/images/inpicture_slide/presiden-joko-widodo-kiri-ibu-negara-iriana-ketiga-kanan-_170702141021-281.jpg",
        },
        {
          id: 3,
          image: "https://awsimages.detik.net.id/community/media/visual/2017/07/02/8792230f-720b-4bfd-82a4-be84e2257666.jpg?a=1",
        },
        {
          id: 4,
          image: "https://manual.co.id/wp-content/uploads/2019/03/Tuku_BP-Bintaro-Cafe-1-980x719.jpg",
        },
        {
          id: 5,
          image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1516794453/am49lwlmvtknt4wefiyy.jpg",
        },
        {
          id: 6,
          image: "https://vidabekasi.com/wp-content/uploads/2021/03/IMG_03141.jpg",
        },
      ],
    },
  },
  "GET /api/inspirations/2": {
    code: 200,
    status: "OK",
    data: {
      banner: "https://i.ibb.co/crxy33L/sapa-dengan-rasa.png",
      en: {
        title: "SAPA DENGAN RASA  - TUKU X POS INDONESIA",
        caption: "Sapa Dengan Rasa”, a new way for you to say hello in the form of ready-to-brew postcards.",
        description:
          "Together with Pos Indonesia, we invited all of #TetanggaTuku to try “Sapa Dengan Rasa”, a new way to say hello in the form of ready-to-brew postcards. Highlighting a sense of nostalgia for exchanging messages through mails, our collaboration was inspired by #TetanggaTuku who always tried to keep in touch during the pandemic by sending Kopi Tetangga for their loved ones. “Sapa Dengan Rasa” is a selection of postcards with several flavors of Indonesian coffee and chocolate. “Sapa Dengan Rasa” also comes with our special edition stamps in collaboration with Pos Indonesia.",
      },
      id: {
        title: "SAPA DENGAN RASA  - TUKU X POS INDONESIA",
        caption: "Sapa Dengan Rasa, sebuah cara baru untuk kamu menyapa lewat kartu pos siap seduh",
        description:
          "Toko Kopi Tuku bersama dengan Pos Indonesia mengajak semua #TetanggaTuku untuk mencoba “Sapa Dengan Rasa”, sebuah cara menyapa baru lewat kartu pos siap seduh. Berangkat dari rasa nostalgia surat-menyurat, kolaborasi kami terinspirasi dari Tetangga Tuku yang selalu berusaha tetap menjalin silaturahmi di masa pandemi, salah satunya dengan mengirimkan Kopi Tetangga untuk orang-orang tersayang. Pilihan kartu pos “Sapa Dengan Rasa” menyajikan beberapa cita rasa kopi dan cokelat Indonesia dalam bentuk bubuk siap seduh, lengkap dengan perangko spesial edisi Toko Kopi Tuku dari Pos Indonesia.",
      },
      gallery: [
        {
          id: 1,
          image:
            "https://static.republika.co.id/uploads/images/inpicture_slide/presiden-joko-widodo-kiri-bersama-ibu-negara-iriana-ketiga-_170702140946-900.jpg",
        },
        {
          id: 2,
          image:
            "https://static.republika.co.id/uploads/images/inpicture_slide/presiden-joko-widodo-kiri-ibu-negara-iriana-ketiga-kanan-_170702141021-281.jpg",
        },
        {
          id: 3,
          image: "https://awsimages.detik.net.id/community/media/visual/2017/07/02/8792230f-720b-4bfd-82a4-be84e2257666.jpg?a=1",
        },
        {
          id: 4,
          image: "https://manual.co.id/wp-content/uploads/2019/03/Tuku_BP-Bintaro-Cafe-1-980x719.jpg",
        },
        {
          id: 5,
          image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1516794453/am49lwlmvtknt4wefiyy.jpg",
        },
        {
          id: 6,
          image: "https://vidabekasi.com/wp-content/uploads/2021/03/IMG_03141.jpg",
        },
      ],
    },
  },
  "GET /api/inspirations/3": {
    code: 200,
    status: "OK",
    data: {
      banner: "https://i.ibb.co/hXqtJh0/tuku-maaf.png",
      en: {
        title: "TUKU “MAAF”",
        caption: "“Beri Maaf” is a new form of conveying apologies for you to send a heartfelt message to your loved ones despite being apart.",
        description:
          "In Eid 2020, we felt the need to take on the role to bridge a connection between #TetanggaTuku who were unable to spend their Eid with families in the middle of the pandemic. Through this collaboration with several other local brands, we presented a new form of conveying apologies during the holy month of Ramadan. Even though some distance set #TetanggaTuku and their families apart, they could still send their heartfelt messages to each other.",
      },
      id: {
        title: "TUKU “MAAF”",
        caption: "Paket “Beri Maaf”, sebuah wujud baru pesan maaf untuk kamu yang terpisah jarak.",
        description:
          "Toko Kopi Tuku dan Living Loving berkolaborasi menciptakan sesuatu untuk Tetangga Tuku untuk bermain dan berkreasi selama di rumah di tengah pandemi. Tetangga Tuku dan Anak Rumahan bisa menghabiskan waktu di rumah bermain Kuartet dan Domino yang dirancang oleh Anak Rumahan sambil berkreasi menggunakan Tuku-in yang merupakan bahan dari Kopi Susu Tetangga yang berasal dari inspirasi resep Anak Rumahan yang akan dibagikan setiap pekan.",
      },
      gallery: [
        {
          id: 1,
          image:
            "https://static.republika.co.id/uploads/images/inpicture_slide/presiden-joko-widodo-kiri-bersama-ibu-negara-iriana-ketiga-_170702140946-900.jpg",
        },
        {
          id: 2,
          image:
            "https://static.republika.co.id/uploads/images/inpicture_slide/presiden-joko-widodo-kiri-ibu-negara-iriana-ketiga-kanan-_170702141021-281.jpg",
        },
        {
          id: 3,
          image: "https://awsimages.detik.net.id/community/media/visual/2017/07/02/8792230f-720b-4bfd-82a4-be84e2257666.jpg?a=1",
        },
        {
          id: 4,
          image: "https://manual.co.id/wp-content/uploads/2019/03/Tuku_BP-Bintaro-Cafe-1-980x719.jpg",
        },
        {
          id: 5,
          image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1516794453/am49lwlmvtknt4wefiyy.jpg",
        },
        {
          id: 6,
          image: "https://vidabekasi.com/wp-content/uploads/2021/03/IMG_03141.jpg",
        },
      ],
    },
  },
  "GET /api/inspirations/4": {
    code: 200,
    status: "OK",
    data: {
      banner: "https://i.ibb.co/D1RpRJJ/futagoxkrispi.png",
      en: {
        title: "FUTAGO X TAHU KRISPI FATMAWATI",
        caption:
          "To welcome the month of Ramadan in 2021, Futago x Tahu Krispi Fatmawati held hands together to collaboratively create a product for Futagotachi and Sobat Tahu.",
        description:
          "Minari (Mini Inari) is a product that highlights the experiences and flavors of JAPINDO by Futago, wrapped in the local fried foods style brought by Tahu Krispi Fatmawati.",
      },
      id: {
        title: "FUTAGO X TAHU KRISPI FATMAWATI",
        caption: "“Minari” - Mini Inari, sebuah produk yang menggabungkan konsep JAPINDO dan kelokalan gorengan ala Tahu Krispi Fatmawati.",
        description:
          "Menyambut bulan Ramadhan tahun 2021, Futago hadir dengan sebuah kolaborasi dengan konsep dan cita rasa yang sederhana untuk para Futagotachi dan Sobat Tahu. Dengan nama Minari (Mini Inari), produk kami dibuat dari gabungan konsep dan pengalaman JAPINDO oleh Futago yang dibalut kelokalan gorengan ala Tahu Krispi Fatmawati.",
      },
      gallery: [
        {
          id: 1,
          image:
            "https://static.republika.co.id/uploads/images/inpicture_slide/presiden-joko-widodo-kiri-bersama-ibu-negara-iriana-ketiga-_170702140946-900.jpg",
        },
        {
          id: 2,
          image:
            "https://static.republika.co.id/uploads/images/inpicture_slide/presiden-joko-widodo-kiri-ibu-negara-iriana-ketiga-kanan-_170702141021-281.jpg",
        },
        {
          id: 3,
          image: "https://awsimages.detik.net.id/community/media/visual/2017/07/02/8792230f-720b-4bfd-82a4-be84e2257666.jpg?a=1",
        },
        {
          id: 4,
          image: "https://manual.co.id/wp-content/uploads/2019/03/Tuku_BP-Bintaro-Cafe-1-980x719.jpg",
        },
        {
          id: 5,
          image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1516794453/am49lwlmvtknt4wefiyy.jpg",
        },
        {
          id: 6,
          image: "https://vidabekasi.com/wp-content/uploads/2021/03/IMG_03141.jpg",
        },
      ],
    },
  },
};

export default delay(proxy, 500);
