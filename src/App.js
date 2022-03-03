import Header from "./components/Header";
import "./App.css";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import Country from "./components/Country";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import { useState, useEffect, useRef } from 'react';

function App() {
 const [darkMode, setDarkMode] = useState(false);

 const [countries, setCountries] = useState([]);

 const countriesInputRef =useRef()
 const regionRef = useRef()

 const noResults = countries.status || countries.message

  const switchMode = () => {
    setDarkMode(prevState => !prevState)
  }

useEffect(() =>{
  try {
    fetchData()
  } catch (error) {
    console.log(error)
  }
}, [])

 const fetchData = async () =>{
   const res = await fetch("https://restcountries.com/v2/all");
   const data = await res.json()

  if(data.status ===400){
    setCountries([])
    return
  }
   setCountries(data)
 }

const searchCountries = () =>{
  const serachValue = countriesInputRef.current.value

  if (serachValue.trim()) {
    const fetchSearch = async () => {
      const response = await fetch(
        `https://restcountries.com/v2/name/${serachValue}`
      );
      const data = await response.json();

      setCountries(data);
    };

    try {
      fetchSearch();
    } catch (error) {
      console.log(error);
    }
  } else {
    fetchData();
  }
}


const selectRegion = () => {
  const selectValue = regionRef.current.value

  if(selectValue.trim()){
    const fetchSelect = async()=>{
      const response = await fetch(
        `https://restcountries.com/v2/region/${selectValue}`
      );
      const data = await response.json()


      if(selectValue ==='All') {
        try {
          fetchData()
        } catch (error) {
          console.log(error)
        }
        return
      }
      setCountries(data)
    }

    try {
      fetchSelect()
    } catch (error) {
      console.log(error)
    }
  }
}

const showDetails = (code) => {
  
}
  return (
    <div className={`app ${darkMode ? "darkMode" : ""}`}>
      <Header onClick={switchMode} darkMode={darkMode} />

      <Routes>
        <Route
          path="/"
          element={
            <div className="main-body">
              <div className="inputs">
                <div className={`search-input ${darkMode ? "darkMode" : ""}`}>
                  <SearchTwoToneIcon />
                  <input type="text" placeholder="Search for a country..." ref={countriesInputRef} onChange={searchCountries}/>
                </div>
                <div className={`filter-region ${darkMode ? "darkMode" : ""}`}>
                  <select ref={regionRef} onChange={selectRegion}>
                    <option>All</option>
                    <option>Americas</option>
                    <option>Europe</option>
                    <option>Asia</option>
                    <option>Africa</option>
                    <option>Oceania</option>
                  </select>
                </div>
              </div>

              <div className="countries">
                {!noResults ? (countries.map((country) => (
                  <Country
                    darkMode={darkMode}
                    key={country.cca3}
                    code={country.cca3}
                    name= {country.name}
                    capital = {country.capital}
                    population = {country.population}
                    region = {country.region}
                    flag= {country.flag}
                    showDetails = { showDetails }
                  />
                ))) : (
                  <p>No countries found</p>
                )}
              </div>
            </div>
          }
        />
        <Route
          path="country-details"
          element={<CountryDetails darkMode={darkMode} />}
        />
      </Routes>
    </div>
  );
}

export default App;
