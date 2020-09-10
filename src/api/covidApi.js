const axios = require("axios");
const url = "https://covid19.mathdro.id/api";

export default async function fetchData(country) {
  try {
    let data;
    if (country === "") {
      const response = await axios.get(url);
      data = response.data;
    } else {
      const response = await axios.get(`${url}/countries/${country}`);
      data = response.data;
    }
    const modifiedData = {
      confirmed: data.confirmed.value,
      recovered: data.recovered.value,
      deaths: data.deaths.value,
    };

    return modifiedData;
  } catch (error) {
    console.log("error has occured with fetching the data");
  }
}

export async function fetchCountries() {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log("Error fetching the data");
  }
}
