import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/pages": {
    code: 200,
    status: "OK",
    data: [
      {
        id: "1",
        name: "about",
        createdAt: 1629639109264,
        author: "admin",
        deleteable: true,
        viewable: true,
      },
      {
        id: "2",
        name: "brands",
        createdAt: 1629639109264,
        author: "admin",
        deleteable: true,
        viewable: false,
      },
      {
        id: "3",
        name: "inspirations",
        createdAt: 1629639109264,
        author: "admin",
        deleteable: true,
        viewable: true,
      },
    ],
  },
};

export default delay(proxy, 500);
