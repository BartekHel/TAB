import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./vite.svg"; // Popraw ścieżkę do pliku vite.svg
import Navbar from "../components/Navbar";
import "../css/Navbar.css";
import "../css/MainPage.css";

function App() {
  const [phrase, setPhrase] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [sort, setSort] = useState("0");

  const searchForOffers = (phrase) => {};

  const filterAndSortOffers = (minPrice, maxPrice, sort) => {};

  const nextPage = (direction) => {};

  return (
    <div>
      <div className="side-panel">
        <input
          type="text"
          placeholder="Enter phrase"
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
          className="sidePanelSearch"
        />
        <input
          type="button"
          value="Search"
          onClick={() => searchForOffers(phrase)}
          className="sidePanelButton"
        />

        <div className="sortLabelFrame">
          <h1 className="sideMainHeader">Sort</h1>
          <input
            type="radio"
            id="radio0"
            value="0"
            className="customCheckbox"
            name="sort"
            checked={sort === "0"}
            onChange={() => setSort("0")}
          />
          <label htmlFor="radio0" className="customSortLabel">Most popular</label>
          <br />
          <input
            type="radio"
            id="radio1"
            value="1"
            className="customCheckbox"
            name="sort"
            checked={sort === "1"}
            onChange={() => setSort("1")}
          />
          <label htmlFor="radio1" className="customSortLabel">Least popular</label>
          <br />
          <input
            type="radio"
            id="radio2"
            value="2"
            className="customCheckbox"
            name="sort"
            checked={sort === "2"}
            onChange={() => setSort("2")}
          />
          <label htmlFor="radio2" className="customSortLabel">Most expensive</label>
          <br />
          <input
            type="radio"
            id="radio3"
            value="3"
            className="customCheckbox"
            name="sort"
            checked={sort === "3"}
            onChange={() => setSort("3")}
          />
          <label htmlFor="radio3" className="customSortLabel">Least expensive</label>
          <br />
        </div>

        <div className="filterLabelFrame">
          <h1 className="sideMainHeader">Filter</h1>
          <h2 className="sideh1">Price</h2>
          <br />
          <label htmlFor="minPrice" className="customNumberLabel">
            Min
          </label>
          <br />
          <input
            type="number"
            id="minPrice"
            className="customNumber"
            value={minPrice}
            onChange={(e) => setMinPrice(parseInt(e.target.value))}
            step="1000"
            min="0"
          />
          <br />
          <label htmlFor="maxPrice" className="customNumberLabel">
            Max
          </label>
          <br />
          <input
            type="number"
            id="maxIPrice"
            className="customNumber"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            step="1000"
            min="0"
          />
          <br />
        </div>
        <div className="type">
          <h1>
            <button
              className="filterButton"
              onClick={() => filterAndSortOffers(minPrice, maxPrice, sort)}>
              Filter
            </button>
            <br />
          </h1>
        </div>
      </div>

      <div className="mainDiv">
        <div className="footer">
          <h1>
            <button className="footerButton" onClick={() => nextPage(-1)}>
              Previous
            </button>
            <button className="footerButton" onClick={() => nextPage(1)}>
              Next
            </button>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
