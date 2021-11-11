import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/homepage": {
    code: 200,
    status: "OK",
    data: {
      banner: "https://i.ibb.co/8sLJfPF/lp-banner.jpg",
      en: {
        title: "Improve & Inspire sustainable daily living experience",
        description:
          "MAKA aims to provide an ideal balance of research and support for modern Indonesian consumers to appreciate our local resources with higher standards of production and sustainability.",
        brandTitle: "Stand Close to Nowadays Life",
        brandDescription: "We pride ourselves on bringing the best quality-focused products that highlight our curated local resources.",
      },
      id: {
        title: "Terinspirasi dan menginspirasi hidup keberlanjutan",
        description:
          "Kami ada untuk memenuhi kebutuhan konsumen modern Indonesia melalui produk dan layanan yang kami ciptakan. Fokus kami adalah berkreasi dengan sumber daya asli Indonesia untuk selalu relevan dalam tiap masa demi hidup berkelanjutan.",
        brandTitle: "Berdiri Dekat dengan Kehidupan Saat Ini",
        brandDescription: "Kami bangga membawa produk yang berfokus pada kualitas terbaik yang menyoroti sumber daya lokal kami yang dikuratori.",
      },
    },
  },
};

export default delay(proxy, 500);
