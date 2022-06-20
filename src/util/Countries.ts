import axios from "axios";

export const getAllCountries = async () => {
  const { data } = await axios.get("https://restcountries.com/v3.1/all");
  return data;
};

export const getCountryByName = async (name: string) => {
  const { data } = await axios.get(
    `https://restcountries.com/v3.1/name/${name}`
  );
  return data[0];
};

export const getCountryByCode = async (code: string) => {
  const { data } = await axios.get(
    `https://restcountries.com/v3.1/alpha/${code}`
  );
  return data[0];
};
