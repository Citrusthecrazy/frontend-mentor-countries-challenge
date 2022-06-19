import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import CountryCard from "../../components/CountryCard/CountryCard";
import FilterByRegion from "../../components/FilterByRegion/FilterByRegion";
import SearchCountry from "../../components/SearchCountry/SearchCountry";
import { getAllCountries } from "../../util/Countries";
import "./Home.scss";
const Home = () => {
  const [filterRegion, setFilterRegion] = useState("");
  const [filterCountry, setFilterCountry] = useState("");
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getAllCountries().then((countries) => setCountries(countries));
  }, []);

  return (
    <div className="home">
      <Container className="home-container">
        <div className="top-bar">
          <SearchCountry
            value={filterCountry}
            onChange={(e) => setFilterCountry(e.target.value)}
          />
          <FilterByRegion value={filterRegion} setValue={setFilterRegion} />
        </div>
        <div className="home-countries-grid">
          {countries.length !== 0 ? (
            countries
              .filter((country: any) =>
                country.name.common
                  .toLowerCase()
                  .includes(filterCountry.toLowerCase())
              )
              .filter((country: any) =>
                country.region
                  .toLowerCase()
                  .includes(filterRegion.toLowerCase())
              )
              .map((country: any) => (
                <CountryCard
                  key={country.name.common}
                  imageSrc={country.flags.png}
                  countryName={country.name.common}
                  capital={country.capital}
                  region={country.region}
                  population={country.population}
                />
              ))
          ) : (
            <p>Fetching countries...</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Home;
