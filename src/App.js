import Header from "./components/Header";
import "./App.css";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import Country from "./components/Country";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import {useState} from 'react';

function App() {

  const switchMode = () => {
    setDarkMode(prevState => !prevState)
  }

  const [darkMode, setDarkMode] = useState(false)

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
                  <input type="text" placeholder="Search for a country..." />
                </div>
                <div className={`filter-region ${darkMode ? "darkMode" : ""}`}>
                  <select>
                    <option>All</option>
                    <option>America</option>
                    <option>Europa</option>
                    <option>Asia</option>
                    <option>Africa</option>
                    <option>Oceania</option>
                  </select>
                </div>
              </div>

              <div className="countries">
                <Country darkMode={darkMode} />
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
