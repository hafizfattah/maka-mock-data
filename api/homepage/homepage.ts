import delay from "mocker-api/lib/delay";

const proxy = {
  "GET /api/homepage": {
    code: 200,
    status: "OK",
    data: {
      title: "Improve & Inspire Sustainable Daily Living Experience",
      description:
        "Maka aims to provide an ideal balance of research and support for modern Indonesian consumers to appreciate our local resources with higher standards of production and sustainability.",
      banner: "https://i.ibb.co/hR9DPVR/lp-banner.png",
      brandTitle: "Stand Close to Nowadays Life",
      brandDescription: "We pride ourselves on bringing the best quality-focused products that highlight our curated local resources.",
    },
  },
};

export default delay(proxy, 500);
