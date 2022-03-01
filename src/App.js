import Header from "./components/Header";
import "./App.css";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import Country from "./components/Country";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <div className="main-body">
              <div className="inputs">
                <div className="search-input">
                  <SearchTwoToneIcon />
                  <input type="text" placeholder="Search for a country..." />
                </div>
                <div className="filter-region">
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
                <Country />
              </div>
            </div>
          }
        />
        <Route path="country-details" element={<CountryDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
