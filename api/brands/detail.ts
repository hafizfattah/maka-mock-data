import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/brands/1-toodz-house": {
    code: 200,
    status: "OK",
    data: {
      id: "1",
      name: "Toodz House",
      logo: "https://i.ibb.co/yBrqtPD/toodz.png",
      banner: "https://i.ibb.co/MSSLgP4/toodz-banner.jpg",
      imageCenter: "https://i.ibb.co/PDKtttZ/toodz-center-image.png",
      teamImages: ['https://i.ibb.co/vw6Hdmb/team-toodz.jpg'],
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
      products: [
        {
          name: "Waffle",
          imageUrl: "https://i.ibb.co/xqqPT4W/toodz-product-1.png",
        },
        {
          name: "Spagheti",
          imageUrl: "https://i.ibb.co/BBbZyLg/toodz-product-2.png",
        },
        {
          name: "Chicken Cheese",
          imageUrl: "https://i.ibb.co/rGyNMP0/toodz-product-3.png",
        },
        {
          name: "Union Ring",
          imageUrl: "https://i.ibb.co/8g5C6Kj/toodz-product-4.png",
        },
      ],
    },
  },
  "GET /api/brands/2-toko-kopi-tuku": {
    code: 200,
    status: "OK",
    data: {
      id: "1",
      name: "Toko Kopi Tuku",
      logo: "https://i.ibb.co/C6X2Zr1/tuku-logo.png",
      banner: "https://i.ibb.co/bNVznj1/tuku-banner.jpg",
      imageCenter: "https://i.ibb.co/PGdp6Qb/tuku-image-center.png",
      teamImages: ['https://i.ibb.co/Hg8CwYV/team-tuku.jpg'],
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
      products: [
        {
          name: "Coffe mug",
          imageUrl: "https://i.ibb.co/BLp2QXP/tuku-product-1.png",
        },
        {
          name: "Donut",
          imageUrl: "https://i.ibb.co/QJK2wQY/tuku-product-2.png",
        },
        {
          name: "Kopi susu tetangga",
          imageUrl: "https://i.ibb.co/RSB7Yfg/tuku-product-3.png",
        },
      ],
    },
  },
  "GET /api/brands/3-futago": {
    code: 200,
    status: "OK",
    data: {
      id: "1",
      name: "Futago",
      logo: "https://i.ibb.co/6tLtZz6/futago.png",
      banner: "https://i.ibb.co/3mdPCG5/futago-banner.png",
      imageCenter: "https://i.ibb.co/8M1j7vh/futago-center-image.png",
      teamImages: ['https://i.ibb.co/FKns21p/futago-team.jpg'],
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
      products: [
        {
          name: "Onigiri",
          imageUrl: "https://i.ibb.co/dWpVCf1/futago-product-1.png",
        },
        {
          name: "Chicken Katsu",
          imageUrl: "https://i.ibb.co/WfSS9jd/futago-product-2.png",
        },
        {
          name: "Ramen",
          imageUrl: "https://i.ibb.co/rFP0VCh/futago-product-3.png",
        },
        {
          name: "Ramen",
          imageUrl: "https://i.ibb.co/rFP0VCh/futago-product-3.png",
        },
        {
          name: "Ramen",
          imageUrl: "https://i.ibb.co/j4Lh09M/futago-product-4.png",
        },
        {
          name: "Ramen",
          imageUrl: "https://i.ibb.co/VvpSKdn/futago-product-5.png",
        },
        {
          name: "Ramen",
          imageUrl: "https://i.ibb.co/H4HG963/futago-product-6.png",
        },
        {
          name: "Ramen",
          imageUrl: "https://i.ibb.co/rMXCmC2/futago-product-7.png",
        },
      ],
    },
  },
  "GET /api/brands/4-beragam-coffee-business-solution": {
    code: 200,
    status: "OK",
    data: {
      id: "1",
      name: "Futago",
      logo: "https://i.ibb.co/zRTFCP7/beragam.png",
      banner: "https://i.ibb.co/gtqjtv7/beragam-bg.jpg",
      imageCenter: "https://i.ibb.co/6nRG80g/beragam-center-image.jpg",
      teamImages: ['https://i.ibb.co/k8T4Wxd/team-beragam.jpg'],
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
      products: [
        {
          name: "Wanara",
          imageUrl: "https://i.ibb.co/tDv4Gzq/beragam-product-1.png",
        },
        {
          name: "Kasarung",
          imageUrl: "https://i.ibb.co/5k73sDd/beragam-product-2.png",
        },
        {
          name: "Timun Mas",
          imageUrl: "https://i.ibb.co/dfqnqT2/beragam-product-3.png",
        },
        {
          name: "Roro Jonggrang",
          imageUrl: "https://i.ibb.co/T1zTSJW/beragam-product-4.png",
        },
        {
          name: "Kasarung 250g",
          imageUrl: "https://i.ibb.co/31PCJWn/beragam-product-5.png",
        },
        {
          name: "Solok Rajo 250g",
          imageUrl: "https://i.ibb.co/b33TLy8/beragam-product-6.png",
        },
        {
          name: "Roro Jonggrang 250g",
          imageUrl: "https://i.ibb.co/85bDMp8/beragam-product-7.png",
        },
      ],
    },
  },
};

export default delay(proxy, 500);
