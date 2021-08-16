import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/about": {
    code: 200,
    status: "OK",
    data: {
      banner: "https://i.ibb.co/GsLK45y/about-bg.png",
      image: "https://i.ibb.co/4pvNGWK/about-vm.png",
      en: {
        title: "Improve & Inspire Sustainable Daily Living Experience",
        caption: "We believe that native Indonesian resources are essential to ensuring the sustainability of our daily living.",
        description:
          "Our approach in business is simple and straightforward. We aim to make remarkable and relevant products that appeal to our consumers and create experiences that meet the needs of our specific segments. Here in Maka, we believe Indonesia is rich with abundant natural resources and blessed with people from different cultural backgrounds. We optimized our resources to continue to innovate and solve problems for our country's needs. We will continue to invest in natural ecosystem network capabilities, behavioral understanding, science, and technology to prepare for anything that may happen in the future.",
        vision:
          "We are committed to building a better ecosystem by understanding human behavior and innovation in technology for us to be ready to face the future.",
        mission: "To improve the quality of life towards higher standards of sustainability through our product creation and meaningful engagement.",
      },
      id: {
        title: "Tingkatkan dan Inspirasikan Pengalaman Hidup Sehari-hari yang Berkelanjutan",
        caption: "Kami percaya bahwa sumber daya asli Indonesia sangat penting untuk memastikan keberlanjutan kehidupan kita sehari-hari.",
        description:
          "Pendekatan kami dalam bisnis sederhana dan lugas. Kami bertujuan untuk membuat produk yang luar biasa dan relevan yang menarik bagi konsumen kami dan menciptakan pengalaman yang memenuhi kebutuhan segmen spesifik kami. Di sini, di Maka, kami percaya Indonesia kaya dengan sumber daya alam yang melimpah dan diberkati dengan orang-orang dari latar belakang budaya yang berbeda. Kami mengoptimalkan sumber daya kami untuk terus berinovasi dan memecahkan masalah untuk kebutuhan negara kami. Kami akan terus berinvestasi dalam kemampuan jaringan ekosistem alam, pemahaman perilaku, ilmu pengetahuan, dan teknologi untuk mempersiapkan apa pun yang mungkin terjadi di masa depan. masa depan.",
        vision:
          "Kami berkomitmen untuk membangun ekosistem yang lebih baik dengan memahami perilaku manusia dan inovasi teknologi agar kami siap menghadapi masa depan.",
        mission:
          "Untuk meningkatkan kualitas hidup menuju standar keberlanjutan yang lebih tinggi melalui penciptaan produk dan keterlibatan yang berarti.",
      },
    },
  },
};

export default delay(proxy, 500);
