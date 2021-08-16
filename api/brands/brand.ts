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
      },
      {
        id: "2",
        name: "Tuku",
        logo: "https://i.ibb.co/dQYs61W/tuku.png",
      },
      {
        id: "3",
        name: "Futago",
        logo: "https://i.ibb.co/7KPkz7p/futago.png",
      },
      {
        id: "4",
        name: "Beragam",
        logo: "https://i.ibb.co/YZBkVx3/beragam.png",
      },
    ],
  },
};

export default delay(proxy, 500);
