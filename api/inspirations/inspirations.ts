import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/inspirations": {
    code: 200,
    status: "OK",
    data: {
      banner: "https://i.ibb.co/m5RG7pD/inspirationbg.png",
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
          title: "Tuku X Trasher",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit ipsam temporibus corrupti accusamus sit modi.",
          image:
            "https://static.republika.co.id/uploads/images/inpicture_slide/presiden-joko-widodo-kiri-bersama-ibu-negara-iriana-ketiga-_170702140946-900.jpg",
        },
        {
          id: "2",
          title: "Futago X Hollycow ",
          description:
            "Repellendus nobis iure, in dolores labore alias consequatur, eum sapiente, nemo dolore cum blanditiis distinctio odit fugit qui id.",
          image:
            "https://cdn0-production-images-kly.akamaized.net/8xrxLdD-H2WI7XngheWF9cz00Ss=/640x480/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3366008/original/092025400_1612247089-unnamed__1_.jpg",
        },
        {
          id: "3",
          title: "Fenomena Rempah Nusantara",
          description:
            "Voluptates incidunt sequi molestias consequuntur sint reprehenderit perspiciatis repudiandae consequatur quia expedita iste excepturi cum!",
          image: "https://asset.kompas.com/crops/W6PIC61U2A_BlF4J0vl_Zd_N0Ck=/33x0:1000x645/750x500/data/photo/2020/05/12/5eba5ec355d99.jpg",
        },
        {
          id: "4",
          title: "Los Polos Hermanos",
          description:
            "Perspiciatis necessitatibus reprehenderit quia quo. Enim delectus eius dolorem sit nostrum aspernatur animi, totam explicabo iure laudantium porro.",
          image:
            "https://offloadmedia.feverup.com/secretlosangeles.com/wp-content/uploads/2019/10/22095522/70991088_150912036128545_2481090655335180758_n-1024x721.jpg",
        },
      ],
    },
  },
};

export default delay(proxy, 500);
