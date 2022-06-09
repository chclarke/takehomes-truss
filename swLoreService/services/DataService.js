const axios = require("axios").default;

async function callApi(url) {
  try {
    console.log(`Attempting to call API at ${url} ...`);
    const response = await axios.get(url);
    if (response) {
      console.log(
        `Response received! ${response.status} ${response.statusText}`
      );
      return response;
    }
  } catch (err) {
    console.error(`Error: ${err}`);
    throw err;
  }
}

module.exports = {
  callApi,
};
