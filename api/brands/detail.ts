import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/brands/1-toodz-house": {
    code: 200,
    status: "OK",
    data: {
      id: "1",
      name: "Toodz House",
      logo: "https://i.ibb.co/LdTGs36/toodz.png",
      banner: "https://i.ibb.co/Thfw3nR/toodz-banner.png",
      imageCenter: "https://loremflickr.com/cache/resized/65535_51112412671_66dd769de5_h_1200_600_nofilter.jpg",
      lang: {
        en: {
          title: "A Cafe We Can Call Home",
          description:
            "Toodz House Cafe is the first food & beverage category business created by Andanu Prasetyo in 2010. It all started with him utilizing what he had from his own home, to cook with simple kitchen utensils and help from a household assistant who doubles as a cook. Toodz House Cafe is one of the favorite go-to-places for when you crave some home-cooked meals, as we are known for their Carbonara Rice.",
          vision: "To create a positive impact and remain relevant over time.",
          mission: "Always exploring and developing the natural wealth of our archipelago and local human resources.",
        },
        id: {
          title: "Sebuah kafe yang terasa seperti rumah.",
          description:
            "Toodz House Cafe adalah usaha kategori food & beverage pertama yang dibuat oleh Andanu Prasetyo di tahun 2010. Berawal dari memanfaatkan apa yang sudah ada dari peralatan dapur seadanya sampai bantuan dari asisten rumah tangga yang merangkap sebagai juru masak, kini Toodz House Cafe menjadi salah satu tempat favorit bagi kamu saat rindu masakan rumah dengan menu andalan Carbonara Rice.",
          vision: "Untuk menciptakan dampak positif dan tetap relevan dari waktu ke waktu.",
          mission: "Selalu mengeksplorasi dan mengembangkan kekayaan nusantara juga sumber daya lokal.",
        },
      },
    },
  },
  "GET /api/brands/2-toko-kopi-tuku": {
    code: 200,
    status: "OK",
    data: {
      id: "1",
      name: "Toko Kopi Tuku",
      logo: "https://i.ibb.co/3fp7CpM/tuku-logo.png",
      banner: "https://i.ibb.co/VHq6j9h/tuku-banner.png",
      imageCenter: "https://i.ibb.co/mXqc4mM/tuku-image-center.png",
      lang: {
        en: {
          title: "A pioneer of new and exciting coffee dibs.",
          description:
            "Our journey started from a small shop on Jalan Cipete Raya back in 2015. We paved our first dibs to the public by introducing the taste of milk coffee with palm sugar as a form of aspiration. What we aim to do is to increase coffee consumption in Indonesia and consequently create a good impact on the industry. Now, Toko Kopi Tuku also has an Event & Commercial business unit to market their products both in e-commerce or exhibitions.",
          vision: "To become a brand that can be a mood booster in the daily life of stakeholders.",
          mission:
            "Always provide products and experiences suitable to existing needs while remaining relevant with the times in order to make people’s days better.",
        },
        id: {
          title: "Pelopor kopi gaya baru.",
          description:
            "Perjalanan kami dimulai dari sebuah warung kecil di Jalan Cipete Raya pada tahun 2015 silam.  Mengawali jejak dengan memperkenalkan rasa kopi susu dengan gula aren kepada masyarakat, kami kini terus berjalan dengan cita-cita untuk ikut serta dalam meningkatkan konsumsi kopi di Indonesia demi memberi dampak baik bagi hulu dan hilir. Kini, Toko Kopi Tuku memiliki unit bisnis Event & Commercial untuk memasarkan produknya melalui e-commerce dan pameran.",
          vision: "Untuk menjadi sebuah brand yang selalu menjadi mood booster dalam keseharian stakeholder.",
          mission:
            "Selalu memberikan produk dan experience yang relevan, sesuai dengan kebutuhan dan perkembangan zaman untuk membuat hari-hari menjadi lebih baik.",
        },
      },
    },
  },
  "GET /api/brands/3-futago": {
    code: 200,
    status: "OK",
    data: {
      id: "1",
      name: "Futago",
      logo: "https://i.ibb.co/bBRLJHH/futago-logo.png",
      banner: "https://i.ibb.co/mS9T0Bc/futago-banner.png",
      imageCenter: "https://i.ibb.co/jww2bq8/futago-center-image.png",
      lang: {
        en: {
          title: "A perfect blend of distinctive JAPINDO taste and culture.",
          description:
            "Futago, which was originally better known as Onigiri Futago, has been around since 2007. Initially, Futago was founded by three Indonesian-Japanese descent siblings who got their inspiration from the blend of cultures in the family, even from lunch or the food they enjoyed. In 2020, we started to open a shop to offer a dining experience with our JAPINDO concept, halal Japanese-Indonesian fusion food. This humble shop is called Futago Ya.",
          vision: "We will continue to innovate in creating the JAPINDO experience to offer an alternative to Indonesia's urban lifestyle.",
          mission:
            "We are committed to continue our journey to explore local Indonesian ingredients to enrich the taste of JAPINDO. Futago always strives for creative products and services that are relevant to the times.",
        },
        id: {
          title: "Perpaduan sempurna antara cita rasa dan budaya khas JAPINDO",
          description:
            "Futago yang semula lebih dikenal dengan nama Onigiri Futago ini sudah ada sejak tahun 2007. Awalnya, Futago didirikan oleh tiga bersaudara keturunan Indonesia-Jepang, terinspirasi dari perpaduan budaya dalam keluarga seperti makanan yang dinikmati sehari-hari.  Pada tahun 2020, kami mulai membuka kedai untuk menawarkan pengalaman bersantap dengan konsep JAPINDO, makanan halal ala Jepang-Indonesia. Kedai sederhana ini bernama Futago Ya.",
          vision:
            "Futago akan terus berinovasi untuk menciptakan pengalaman JAPINDO yang menawarkan gaya alternatif bagi kehidupan kaum urban Indonesia.",
          mission:
            "Futago berkomitmen untuk terus mengeksplorasi bahan-bahan lokal Indonesia untuk memperkaya cita rasa JAPINDO. Futago selalu berkreasi melalui produk dan layanan yang relevan dengan perkembangan zaman.",
        },
      },
    },
  },
  "GET /api/brands/4-beragam-coffee-business-solution": {
    code: 200,
    status: "OK",
    data: {
      id: "1",
      name: "Futago",
      logo: "https://i.ibb.co/ZV15TFF/beragam-logo.png",
      banner: "https://i.ibb.co/2vbnjqC/beragam-banner.png",
      imageCenter: "https://i.ibb.co/yPbB4SZ/beragam-center-iamge.png",
      lang: {
        en: {
          title: "The Coffee People You Can Rely On",
          description:
            "Beragam is a coffee roastery that supplies coffee beans for several coffee shops including Toko Kopi Tuku. Here in Beragam, we offer an easy and fun approach for you to focus on the best coffee business experience. Our consulting services express a high-disciplined way of work. We strive to highlight Beragam as a one-stop coffee consultant with products and services not limited only to coffee beans, but also supporting ingredients, and consulting services.",
          vision: "We have a vision to re-innovate and redefine Indonesian coffee in terms of products, consumption styles, and business ecosystem.",
          mission:
            "We have a mission to continuously innovate to help our clients solve their problems without forgetting our well intentioned duty to serve other relevant stakeholders in the industry.",
        },
        id: {
          title: "Pakar Kopi yang Dapat Kamu Andalkan",
          description:
            "Beragam adalah sebuah roastery kopi yang memasok biji kopi untuk beberapa toko kopi, termasuk Toko Kopi Tuku. Di Beragam, kami memberi sebuah pendekatan yang mudah dan menyenangkan bagi kamu demi mendapatkan coffee business experience yang terbaik. Layanan konsultasi kami mencerminkan cara kerja dengan disiplin tinggi. Beragam berkomitmen untuk menjadi konsultan kopi terpadu dengan produk dan layanan yang tidak hanya terbatas di biji kopi, tetapi juga bahan baku pendukung dan layanan konsultasi.",
          vision:
            "Kami memiliki visi untuk mengubah dan mendefinisikan kembali kopi Indonesia dalam hal produk, cara konsumsi, dan ekosistem bisnis.",
          mission:
            "Kami memiliki misi untuk terus berinovasi demi membantu klien kami mengatasi masalah mereka, tanpa melupakan niat dan usaha baik untuk membantu stakeholder industri terkait lainnya di saat yang sama.",
        },
      },
    },
  },
};

export default delay(proxy, 500);
