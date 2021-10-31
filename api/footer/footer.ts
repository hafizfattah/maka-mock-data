import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/footer": {
    code: 200,
    status: "OK",
    data: {
      address: "Jl. M.P.R Raya No.14, RT.3/RW.11, Cilandak Bar., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430",
      phone: "021-27814130 / 021-27814321",
      email: "info@maka.id",
      socialMedia: [
        {
          name: "linkedin",
          url: "https://www.linkedin.com/company/maka-makna-angan-karya-andanu/",
          account: "@maka",
        },
        {
          name: "instagram",
          url: "https://www.instagram.com/tokokopituku/",
          account: "@tokokopituku",
        },
        {
          name: "instagram",
          url: "https://www.instagram.com/toodzhouse/",
          account: "@toodzhouse",
        },
        {
          name: "instagram",
          url: "https://www.instagram.com/gofutago/",
          account: "@gofutago",
        },
        {
          name: "instagram",
          url: "https://www.instagram.com/beragamkopiindonesia/",
          account: "@beragamkopiindonesia",
        },
      ],
    },
  },
};

export default delay(proxy, 500);
