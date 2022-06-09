const express = require("express");
const config = require("../config.js");
const DataService = require("../services/DataService.js");
const router = express.Router();

function sortData(data) {
  let sortedData = data;
  // https://stackoverflow.com/a/8900922
  let sortedDataResults = data.results.sort(function (planetA, planetB) {
    return planetA.name.localeCompare(planetB.name);
  });
  sortedData.results = sortedDataResults;
  return sortedData;
}

module.exports = () => {
  router.get("/", async (req, res, next) => {
    try {
      let apiResponse = await DataService.callApi(config.url);
      let sortedData = sortData(apiResponse.data);
      res.render("retrievedData", { data: sortedData });
    } catch (err) {
      res.render("retrievedData", { error: err });
    }
  });

  return router;
};
