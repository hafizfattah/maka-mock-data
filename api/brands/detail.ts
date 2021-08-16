import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/brands/:id": {
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
    ],
  },
};

export default delay(proxy, 500);
