import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/brands": {
    code: 200,
    status: "OK",
    data: [
      {
        id: "1",
        name: "Toodz House",
        logo: "https://i.ibb.co/LdTGs36/toodz.png",
        banner: "https://i.ibb.co/Thfw3nR/toodz-banner.png",
        imageCenter: "https://loremflickr.com/cache/resized/65535_51112412671_66dd769de5_h_1200_600_nofilter.jpg",
        title: "A Cafe We Can Call Home",
        description:
          "Toodz House Cafe is the first food & beverage category business created by Andanu Prasetyo in 2010. It all started with him utilizing what he had from his own home, to cook with simple kitchen utensils and help from a household assistant who doubles as a cook. Toodz House Cafe is one of the favorite go-to-places for when you crave some home-cooked meals, as we are known for their Carbonara Rice.",
        vision: "To create a positive impact and remain relevant over time.",
        mission: "Always exploring and developing the natural wealth of our archipelago and local human resources.",
      },
      {
        id: "2",
        name: "Tuku",
        logo: "https://i.ibb.co/dQYs61W/tuku.png",
        banner: "https://i.ibb.co/WFbP34b/tuku.png",
        imageCenter: "https://loremflickr.com/cache/resized/526_19985797010_2925542dba_h_1200_600_nofilter.jpg",
        title: "A Pioneer of New & Exciting Coffee Dibs",
        description:
          "Our journey started from a small shop on Jalan Cipete Raya back in 2015. We pave our first dibs to the public by introducing the taste of milk coffee with palm sugar as a form of aspiration. What we aim to do is to increase coffee consumption in Indonesia which has a good impact on the industry. Now, Tuku Coffee Shop also has an Event & Commercial business unit to market their products both in e-commerce or exhibitions.",
        vision: "To become a brand that can be a mood booster in the daily life of stakeholders.",
        mission:
          "Always provide products and experiences according to needs while remaining relevant with the times in order to make the days better.",
      },
      {
        id: "3",
        name: "Futago",
        logo: "https://i.ibb.co/7KPkz7p/futago.png",
        banner: "https://i.ibb.co/HqyySWv/futago.png",
        imageCenter: "https://loremflickr.com/cache/resized/65535_51093569049_c0c2273b4d_h_1200_600_nofilter.jpg",
        title: "A Perfect Blend of Distinctive JAPINDO Taste & Culture",
        description:
          "Futago, which was originally better known as Onigiri Futago, has been around since 2007. Initially, Futago was founded by 3 (three) Indonesian-Japanese descent siblings who got their inspiration from the blend of cultures in the family, even from lunch or the food we enjoyed. In 2020 we started to open a shop to offer a dining experience with our Japindo concept, halal Japanese-Indonesian fusion food. This humble shop is called Futago Ya.",
        vision: "We will continue to innovate in creating the JAPINDO experience to offer an alternative to Indonesia's urban lifestyle.",
        mission:
          "We are committed to continue our journey to explore local Indonesian ingredients to enrich the taste of JAPINDO. Futago is always creative through products and services that are relevant to the times.",
      },
      {
        id: "4",
        name: "Beragam",
        logo: "https://i.ibb.co/YZBkVx3/beragam.png",
        banner: "https://i.ibb.co/RzjshXS/beragam.png",
        imageCenter: "https://loremflickr.com/cache/resized/65535_51122315676_4d7a1e1722_h_1200_600_nofilter.jpg",
        title: "The Coffee Guy You Can Rely On",
        description:
          "Beragam is a coffee roastery that supplies coffee beans for several coffee shops including Tuku. Here in Beragam, we offer an easy and fun approach for you to focus on the best coffee business experience. Our consulting services express a high-disciplined way of work. We strive to highlight Beragam as a one-stop coffee consultant with products and services not limited to coffee beans, supporting ingredients, and consulting services. ",
        vision: "We have a vision to re-innovate and redefining Indonesian coffee in terms of products, ways of drinking, and ecosystem.",
        mission:
          "We have a mission to continuously innovate to help our client solve their problems without forgetting our duty to serve others with good intentions.",
      },
    ],
  },
};

export default delay(proxy, 500);
