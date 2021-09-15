import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/messages": {
    code: 200,
    status: "OK",
    data: [
      {
        id: "1",
        name: "Adisti",
        email: "adisti@gmail.com",
        createdAt: 1629639109264,
        readed: false,
        replied: false,
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corporis ex odio enim nam reprehenderit delectus magni porro aliquam, dolore in eius natus esse et eos pariatur fugit? Mollitia, architecto.",
      },
      {
        id: "2",
        name: "Andanu",
        email: "andanu@gmail.com",
        createdAt: 1629639109264,
        readed: true,
        replied: true,
        message:
          "Dolores a sequi, molestiae, facere tempora ab quia saepe assumenda optio aperiam modi voluptates neque omnis officiis nemo cumque cum aliquid laudantium animi.",
      },
      {
        id: "3",
        name: "Diana",
        email: "diana@gmail.com",
        createdAt: 1629639109264,
        readed: false,
        replied: false,
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corporis ex odio enim nam reprehenderit delectus magni porro aliquam, dolore in eius natus esse et eos pariatur fugit? Mollitia, architecto.",
      },
      {
        id: "4",
        name: "Resa",
        email: "resa@gmail.com",
        createdAt: 1629639109264,
        readed: true,
        replied: false,
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corporis ex odio enim nam reprehenderit delectus magni porro aliquam, dolore in eius natus esse et eos pariatur fugit? Mollitia, architecto.",
      },
      {
        id: "5",
        name: "Roni",
        email: "ahmad@yahoo.com",
        createdAt: 1629639109264,
        readed: false,
        replied: false,
        message:
          "Dolores a sequi, molestiae, facere tempora ab quia saepe assumenda optio aperiam modi voluptates neque omnis officiis nemo cumque cum aliquid laudantium animi.",
      },
      {
        id: "6",
        name: "Septiansyah",
        email: "sales@astra.co.id",
        createdAt: 1629639109264,
        readed: true,
        replied: false,
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corporis ex odio enim nam reprehenderit delectus magni porro aliquam, dolore in eius natus esse et eos pariatur fugit? Mollitia, architecto.",
      },
      {
        id: "7",
        name: "Vella",
        email: "manager@bukalapak.com",
        createdAt: 1629639109264,
        readed: false,
        replied: false,
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corporis ex odio enim nam reprehenderit delectus magni porro aliquam, dolore in eius natus esse et eos pariatur fugit? Mollitia, architecto.",
      },
    ],
  },
};

export default delay(proxy, 500);
