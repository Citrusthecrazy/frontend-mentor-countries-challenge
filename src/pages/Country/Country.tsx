import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import BorderButton from "../../components/BorderButton/BorderButton";
import Container from "../../components/Container/Container";
import { ThemeContext } from "../../contexts/ThemeContext";
import { getCountryByName } from "../../util/Countries";
import { numberWithCommas } from "../../util/Formatters";
import { ICountry, IThemeContext } from "../../util/types";
import "./Country.scss";
const Country = () => {
  const { country } = useParams();
  const [selectedCountry, setSelectedCountry] = useState<ICountry>();
  const [countryNativeName, setCountryNativeName] = useState<string | null>("");
  const [countryCurrencies, setCountryCurrencies] =
    useState<Array<string> | null>();
  const [countryLanguages, setCountryLanguages] =
    useState<Array<string> | null>();
  const [borderCountries, setBorderCountries] =
    useState<Array<string> | null>();
  const { theme } = useContext(ThemeContext) as IThemeContext;

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
      setBorderCountries(res.borders);
    });

    return () => {
      setCountryNativeName(null);
      setCountryCurrencies(null);
      setCountryLanguages(null);
      setBorderCountries(null);
    };
  }, [country]);

  return (
    <div className={`country-wrapper country-${theme}`}>
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
            <div className="border-countries-wrapper">
              <span>Border countries: </span>
              <div className="border-countries">
                {borderCountries &&
                  borderCountries?.map((borderCountry) => (
                    <BorderButton country={borderCountry} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Country;
