import express from "express";
import glob from "glob";
import apiMocker from "mocker-api";

const app = express();

glob(__dirname + "/api/**/*.ts", {}, (_, files) => {
  apiMocker(app, files);
});

app.listen(process.env.PORT || 3232);
