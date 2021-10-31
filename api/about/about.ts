import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/about": {
    code: 200,
    status: "OK",
    data: {
      banner: "https://i.ibb.co/3vcbCDq/about-bg-1.png",
      image: "https://i.ibb.co/YjWTJxG/about-vm.png",
      teamImage: "https://i.ibb.co/bBPtSys/Tuku-Team.jpg",
      en: {
        title: "Improve & Inspire Sustainable Daily Living Experience",
        caption: "We believe that native Indonesian resources are essential to ensuring the sustainability of our daily living.",
        description:
          "Our approach in business is simple and straightforward. We aim to make remarkable and relevant products that appeal to our consumers and create experiences that meet the needs of our specific segments. Here in Maka, we believe Indonesia is rich with abundant natural resources and blessed with people from different cultural backgrounds. We optimized our resources to continue to innovate and solve problems for our country's needs. We will continue to invest in natural ecosystem network capabilities, behavioral understanding, science, and technology to prepare for anything that may happen in the future.",
        vision:
          "Kami berkomitmen untuk membangun ekosistem yang lebih baik dengan memahami perilaku manusia dan inovasi teknologi agar kami siap menghadapi masa depan.",
        mission: "To improve the quality of life towards higher standards of sustainability through our product creation and meaningful engagement.",
      },
      id: {
        title: "Terinspirasi dan menginspirasi hidup keberlanjutan",
        caption: "Kami percaya bahwa sumber daya asli Indonesia sangat penting untuk memastikan keberlanjutan kehidupan kita sehari-hari.",
        description:
          "Kami ada untuk memenuhi kebutuhan konsumen modern Indonesia melalui produk dan layanan yang kami ciptakan. Fokus kami adalah berkreasi dengan sumber daya asli Indonesia untuk selalu relevan dalam tiap masa demi hidup berkelanjutan.",
        vision:
          "Kami berkomitmen untuk membangun ekosistem yang lebih baik dengan memahami perilaku manusia dan inovasi teknologi agar kami siap menghadapi masa depan.",
        mission: "Misi kami untuk bisa terus mengembangkan pengalaman hidup berkelanjutan melalui kreasi produk dan keterlibatan yang berarti.",
      },
    },
  },
};

export default delay(proxy, 500);
