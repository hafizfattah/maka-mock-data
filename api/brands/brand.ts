import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/brands": {
    code: 200,
    status: "OK",
    data: [
      {
        id: "1",
        name: "Toodz House",
        logo: "https://i.ibb.co/yBrqtPD/toodz.png",
        createdAt: 1629639109264,
        author: "admin",
      },
      {
        id: "2",
        name: "Toko Kopi Tuku",
        logo: "https://i.ibb.co/C6X2Zr1/tuku-logo.png",
        createdAt: 1629639109264,
        author: "admin",
      },
      {
        id: "3",
        name: "Futago",
        logo: "https://i.ibb.co/6tLtZz6/futago.png",
        createdAt: 1629639109264,
        author: "admin",
      },
      {
        id: "4",
        name: "Beragam Coffee Business Solution",
        logo: "https://i.ibb.co/zRTFCP7/beragam.png",
        createdAt: 1629639109264,
        author: "admin",
      },
    ],
  },
};

export default delay(proxy, 500);
