import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/inspirations/:id": {
    code: 200,
    status: "OK",
    data: {
      banner:
        "https://static.republika.co.id/uploads/images/inpicture_slide/presiden-joko-widodo-kiri-bersama-ibu-negara-iriana-ketiga-_170702140946-900.jpg",
      en: {
        title: "Tuku X Trasher",
        caption: "Our collaboration package that consists of Kopi Susu Tetangga and a game for you to play at home.",
        description:
          "Toko Kopi Tuku and Living Loving collaborate to create something for Tetangga Tuku to play and be creative while at home in the middle of the pandemic. Tetangga Tuku and Anak Rumahan can spend time at home playing Quartet and Dominoes that were designed by Anak Rumahan while being creative using Tuku-in, which is the ingredient of Kopi Susu Tetangga that comes from the inspiration of Anak Rumahan's recipes that will be shared every week.",
      },
      id: {
        title: "Tuku X Trasher",
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
};

export default delay(proxy, 500);
