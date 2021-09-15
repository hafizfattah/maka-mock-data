import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/team": {
    code: 200,
    status: "OK",
    data: [
      {
        id: "1",
        name: "Adisti",
        image: "https://i.ibb.co/55jFnTW/adisti.png",
        createdAt: 1629639109264,
        author: "admin",
      },
      {
        id: "2",
        name: "Andanu",
        image: "https://i.ibb.co/PjqSKxq/andanu.png",
        createdAt: 1629639109264,
        author: "admin",
      },
      {
        id: "3",
        name: "Diana",
        image: "https://i.ibb.co/wcbZ8N7/diana.png",
        createdAt: 1629639109264,
        author: "admin",
      },
      {
        id: "4",
        name: "Resa",
        image: "https://i.ibb.co/X89g0d8/resa.png",
        createdAt: 1629639109264,
        author: "admin",
      },
      {
        id: "5",
        name: "Roni",
        image: "https://i.ibb.co/2dKkQsM/roni.png",
        createdAt: 1629639109264,
        author: "admin",
      },
      {
        id: "6",
        name: "Septiansyah",
        image: "https://i.ibb.co/WyZhH7T/septiansyah.png",
        createdAt: 1629639109264,
        author: "admin",
      },
      {
        id: "7",
        name: "Vella",
        image: "https://i.ibb.co/0cj8Q02/vella.png",
        createdAt: 1629639109264,
        author: "admin",
      },
    ],
  },
};

export default delay(proxy, 500);
