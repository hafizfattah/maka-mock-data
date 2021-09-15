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
        createdAt: 1629639109264,
        author: "admin",
      },
      {
        id: "2",
        name: "Toko Kopi Tuku",
        logo: "https://i.ibb.co/dQYs61W/tuku.png",
        createdAt: 1629639109264,
        author: "admin",
      },
      {
        id: "3",
        name: "Futago",
        logo: "https://i.ibb.co/7KPkz7p/futago.png",
        createdAt: 1629639109264,
        author: "admin",
      },
      {
        id: "4",
        name: "Beragam Coffee Business Solution",
        logo: "https://i.ibb.co/YZBkVx3/beragam.png",
        createdAt: 1629639109264,
        author: "admin",
      },
    ],
  },
};

export default delay(proxy, 500);
