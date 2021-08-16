import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/products/:id": {
    code: 200,
    status: "OK",
    data: [
      {
        id: "1",
        name: "Sate Udang",
        image: "https://loremflickr.com/cache/resized/3914_14797355989_cf6b93578d_c_600_600_nofilter.jpg",
      },
      {
        id: "2",
        name: "Steak stuck",
        image: "https://loremflickr.com/cache/resized/65535_51178637969_059415bce4_b_600_600_nofilter.jpg",
      },
      {
        id: "3",
        name: "Nastar",
        image: "https://loremflickr.com/cache/resized/65535_51060587938_0053a0465e_b_600_600_nofilter.jpg",
      },
      {
        id: "4",
        name: "Rempah",
        image: "https://loremflickr.com/cache/resized/65535_51205634567_3422319074_c_600_600_nofilter.jpg",
      },
      {
        id: "5",
        name: "Chicken cordon red",
        image: "https://loremflickr.com/cache/resized/6160_6151194728_d3a97dc1e6_b_600_600_nofilter.jpg",
      },
      {
        id: "6",
        name: "Beer Bintang",
        image: "https://loremflickr.com/cache/resized/65535_51243827897_8e582e4591_b_600_600_nofilter.jpg",
      },
      {
        id: "7",
        name: "Kids meal",
        image: "https://loremflickr.com/cache/resized/65535_50725020591_84726c1485_b_600_600_nofilter.jpg",
      },
      {
        id: "8",
        name: "Spagety ++",
        image: "https://loremflickr.com/cache/resized/65535_51131724222_627e086f01_b_600_600_nofilter.jpg",
      },
    ],
  },
};

export default delay(proxy, 500);
