import React from 'react'

const Country = ({darkMode, population, flag, capital, name, region, showDetails, code}) => {


  const showDetailsHandler = () => {
    showDetails(code)
  }

  return (
    <div className={`country ${darkMode ? "darkMode" : ""}`}onClick={showDetailsHandler}>
      <div className="flag-container">
        <img src={flag} alt="Flags" />
      </div>
      <div className="details">
        <h3 className={`name ${darkMode ? "darkMode" : ""}`}>{name}</h3>
        <p>
          Population: {""}
          <span className={`values ${darkMode ? "darkMode" : ""}`}>
            {population.toLocaleString()}{" "}
          </span>
        </p>
        <p>
          Region: {""}
          <span className={`values ${darkMode ? "darkMode" : ""}`}>
            {region}
          </span>
        </p>
        <p>
          Capital: {""}
          <span className={`values ${darkMode ? "darkMode" : ""}`}>
            {capital}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Country