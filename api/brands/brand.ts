import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/brands": {
    code: 200,
    status: "OK",
    data: [
      {
        id: "1",
        name: "Toodz House",
        logo: "https://i.ibb.co/SyQzjfL/toodz-logo-1.png",
        createdAt: 1629639109264,
        author: "admin",
      },
      {
        id: "2",
        name: "Toko Kopi Tuku",
        logo: "https://i.ibb.co/0qhrwNp/tuku-logo-1.png",
        createdAt: 1629639109264,
        author: "admin",
      },
      {
        id: "3",
        name: "Futago",
        logo: "https://i.ibb.co/1QHsWdj/futago-logo-1.png",
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
