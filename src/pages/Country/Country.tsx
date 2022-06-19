import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import Container from "../../components/Container/Container";
import { getCountryByName } from "../../util/Countries";
import { numberWithCommas } from "../../util/Formatters";
import { ICountry } from "../../util/types";
import "./Country.scss";
const Country = () => {
  const { country } = useParams();
  const [selectedCountry, setSelectedCountry] = useState<ICountry>();
  const [countryNativeName, setCountryNativeName] = useState("");
  const [countryCurrencies, setCountryCurrencies] = useState<Array<string>>();
  const [countryLanguages, setCountryLanguages] = useState<Array<string>>();

  useEffect(() => {
    if (!country) return;
    getCountryByName(country).then((res) => {
      setSelectedCountry(res);
      let nativeName = "";
      let currencies: string[] = [];
      let languages: string[] = [];
      for (var index in res.name.nativeName) {
        nativeName = res.name.nativeName[index].common;
      }
      for (var index in res.currencies) {
        currencies = [...currencies, res.currencies[index].name + " "];
      }
      for (var index in res.languages) {
        languages = [...languages, res.languages[index] + " "];
      }
      setCountryNativeName(nativeName);
      setCountryCurrencies(currencies);
      setCountryLanguages(languages);
    });
  }, []);

  return (
    <div className="country-wrapper">
      <Container>
        <BackButton />
        <div className="country-data">
          <img src={selectedCountry?.flags?.png} alt="" />
          <div className="country-info">
            <h1>{selectedCountry?.name?.common}</h1>
            <div>
              <ul>
                <li>
                  <span>Native Name:</span> {countryNativeName}
                </li>
                <li>
                  <span>Population:</span>{" "}
                  {selectedCountry &&
                    numberWithCommas(selectedCountry.population)}
                </li>
                <li>
                  <span>Region:</span> {selectedCountry?.region}
                </li>
                <li>
                  <span>Sub Region:</span> {selectedCountry?.subregion}
                </li>
                <li>
                  <span>Capital:</span> {selectedCountry?.capital}
                </li>
              </ul>
              <ul>
                <li>
                  <span>Top Level Domains:</span>{" "}
                  {selectedCountry?.tld.map((domain) => domain + " ")}
                </li>
                <li>
                  <span>Currencies:</span> {countryCurrencies}
                </li>
                <li>
                  <span>Languages:</span> {countryLanguages}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Country;
