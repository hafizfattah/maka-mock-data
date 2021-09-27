import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/footer": {
    code: 200,
    status: "OK",
    data: {
      address: " Jl. Cipete Raya B No.7, RT.6/RW.3, Cipete Sel., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12410",
      phone: "+6283811588994",
      email: "hello@maka.com",
      socialMedia: [
        {
          name: "facebook",
          url: "https://www.facebook.com/",
          icon: "https://i.ibb.co/Qn8tKZy/facebook.png",
        },
        {
          name: "twitter",
          url: "https://www.facebook.com/",
          icon: "https://i.ibb.co/hWd2Cyd/twitter.png",
        },
        {
          name: "instagram",
          url: "https://www.facebook.com/",
          icon: "https://i.ibb.co/hLpnjBW/instagram.png",
        },
      ],
    },
  },
};

export default delay(proxy, 500);
