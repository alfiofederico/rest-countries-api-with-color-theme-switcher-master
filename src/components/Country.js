import React from 'react'

const Country = ({darkMode}) => {
  return (
    <div className={`country ${darkMode ? "darkMode" : ""}`}>
      <div className="flag-conteiner">
        <img src="" alt="Flags" />
      </div>
      <div className="details">
        <h3 className={`name ${darkMode ? "darkMode" : ""}`}>Name</h3>
        <p>
          Population: {""}
          <span className={`values ${darkMode ? "darkMode" : ""}`}>Test</span>
        </p>
        <p>
          Region: {""}
          <span className={`values ${darkMode ? "darkMode" : ""}`}>Test</span>
        </p>
        <p>
          Capital: {""}
          <span className={`values ${darkMode ? "darkMode" : ""}`}>Test</span>
        </p>
      </div>
    </div>
  );
}

export default Country