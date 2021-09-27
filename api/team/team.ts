import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/team": {
    code: 200,
    status: "OK",
    data: [
      {
        id: "1",
        name: "Adisti",
        image: "https://i.ibb.co/mFHgfKy/adisti.png",
        createdAt: 1629639109264,
        author: "admin",
      },
      {
        id: "2",
        name: "Andanu",
        image: "https://i.ibb.co/3dbMC7Q/andanu.png",
        createdAt: 1629639109264,
        author: "admin",
      },
      {
        id: "3",
        name: "Diana",
        image: "https://i.ibb.co/jJY3wnL/diana.png",
        createdAt: 1629639109264,
        author: "admin",
      },
      {
        id: "4",
        name: "Resa",
        image: "https://i.ibb.co/XVW8NZG/resa.png",
        createdAt: 1629639109264,
        author: "admin",
      },
      {
        id: "5",
        name: "Roni",
        image: "https://i.ibb.co/3dyW13y/roni.png",
        createdAt: 1629639109264,
        author: "admin",
      },
      {
        id: "6",
        name: "Septiansyah",
        image: "https://i.ibb.co/fdKfBxm/septiansyah.png",
        createdAt: 1629639109264,
        author: "admin",
      },
      {
        id: "7",
        name: "Vella",
        image: "https://i.ibb.co/0BZ6DVB/vella.png",
        createdAt: 1629639109264,
        author: "admin",
      },
    ],
  },
};

export default delay(proxy, 500);
