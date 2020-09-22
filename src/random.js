const axios = require("axios");
const url = "https://covid19.mathdro.id/api/daily";

async function fetchDailyRate() {
  try {
    const response = await axios.get(url);
    const data = response.data;

    const confirmed = data.map((element) => element.totalConfirmed);
    const days = data.map((element) => element.reportDate);
    const deaths = data.map((element) => element.deaths.total);

    return {
      confirmed: confirmed,
      days: days,
      deaths: deaths,
    };
  } catch (error) {
    console.log("error fetching daily rate data");
  }
}

fetchDailyRate().then((res) => console.log(res.confirmed));
