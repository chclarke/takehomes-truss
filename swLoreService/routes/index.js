const express = require("express");
const getDataRoute = require("./getData.js");
const router = express.Router();

module.exports = () => {
  router.get("/", (req, res, next) => {
    res.render("index");
  });

  router.use("/getData", getDataRoute());

  return router;
};
