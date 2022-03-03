import React from 'react'
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import {useNavigate, useParams} from 'react-router'


const CountryDetails = ({darkMode, countries, refetch}) => {

 
  const params = useParams()
  const navigate = useNavigate()

  let name;
  let flagImg;
  let capital;
  let nativeName;
  let population;
  let region;
  let subregion;
  let topLevelDomain;
  let currencies = [];
  let languages = [];
  let borders = [];

  countries.forEach(country => {
    if(country.alpha3Code === params.countryCode){
      name = country.name
      flagImg = country.flag
      nativeName = country.nativeName
      population = country.population
      subregion = country.subregion
      region = country.region
      capital = country.capital
      topLevelDomain = country.topLevelDomain

      country.currencies?.forEach(currency => {
        currencies.push(currency.name)
      })
      country.languages?.forEach(language => {
        languages.push(language.name)
      })
      country.borders?.forEach(border => {
        borders.push(border)
      })
    }
  });


  const goBack = () => {
    navigate('/')
  }

  return (
    <div className="country-details">
      <button className={`back ${darkMode ? "darkMode" : ""}`} onClick={goBack}>
        <ArrowBackTwoToneIcon />
        <p>Back</p>
      </button>

      <div className="country-details-body">
        <div className="img-container">
          <img src={flagImg} alt="Flag" />
        </div>

        <div className="info">
          <h2>{name}</h2>
          <div className="info-container">
            <div className="left-info">
              <p>
                Native Name:{""}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {" "}
                  {nativeName}
                </span>
              </p>
              <p>
                Population:{""}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {" "}
                  {population.toLocaleString()}
                </span>
              </p>
              <p>
                Region:{""}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {" "}
                  {region}
                </span>
              </p>
              <p>
                Sub Region:{""}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {" "}
                  {subregion}
                </span>
              </p>
              <p>
                Capital:{""}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {" "}
                  {capital}
                </span>
              </p>
            </div>
            <div className="right-info">
              <p>
                Top Level Domain:{""}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {" "}
                  {topLevelDomain}
                </span>
              </p>
              <p>
                Currencies:
                {currencies.map((currency) => {
                  if (currencies.indexOf(currency) !== currencies.length - 1) {
                    return (
                      <span className={`values ${darkMode ? "darkMode" : ""}`}>
                        {" "}
                        {currency},
                      </span>
                    );
                  } else {
                    return (
                      <span className={`values ${darkMode ? "darkMode" : ""}`}>
                        {" "}
                        {currency}
                      </span>
                    );
                  }
                })}
              </p>
              <p>
                Languages:
                {languages.map((language) => {
                  if (languages.indexOf(language) !== languages.length - 1) {
                    return (
                      <span className={`values ${darkMode ? "darkMode" : ""}`}>
                        {" "}
                        {language},
                      </span>
                    );
                  } else {
                    return (
                      <span
                        className={`values ${darkMode ? "darkMode" : ""}`}
                        key={language}
                      >
                        {" "}
                        {language}
                      </span>
                    );
                  }
                })}
              </p>
            </div>
          </div>
          Border Countries: <br />
          {borders.length ? (
            borders.map((border) => (
              <div key={border} onClick={() =>{refetch(); navigate(`/${border}`)}} className={`border-country ${darkMode ? "darkMode" : ""}`}>
                <p>{border}</p>
              </div>
            ))
          ) : (
            <div className={`values ${darkMode ? "darkMode" : ""}`}>
              <p>No borders</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountryDetails