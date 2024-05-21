import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./vite.svg"; // Popraw ścieżkę do pliku vite.svg
// import "../css/Navbar.css";
import "../css/MainPage.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [phrase, setPhrase] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [sort, setSort] = useState("0");
  const navigate=useNavigate();

  const searchForOffers = (phrase) => {};

  const filterAndSortOffers = (minPrice, maxPrice, sort) => {};

  const handleShow = (offerName) => {
    const carId=1;
    navigate(`/carDetails/${carId}`);
  };

  const nextPage = (direction) => {};

  const initialOffers = [
    {
      name: "Audi A4",
      price: 45000,
      year: 2022,
      mileage: 20000,
      icon: "/car.svg",
    },
    {
      name: "BMW X5",
      price: 65000,
      year: 2021,
      mileage: 15000,
      icon: "/car.svg",
    },
    {
      name: "Mercedes-Benz",
      price: 50000,
      year: 2020,
      mileage: 25000,
      icon: "/car.svg",
    },
    {
      name: "Honda Accord",
      price: 32000,
      year: 2019,
      mileage: 30000,
      icon: "/car.svg",
    },
    {
      name: "Toyota Camry",
      price: 35000,
      year: 2021,
      mileage: 18000,
      icon: "/car.svg",
    },
    {
      name: "Ford Mustang",
      price: 40000,
      year: 2018,
      mileage: 35000,
      icon: "/car.svg",
    },
    {
      name: "Volkswagen Golf",
      price: 25000,
      year: 2019,
      mileage: 22000,
      icon: "/car.svg",
    },
    {
      name: "Tesla Model 3",
      price: 60000,
      year: 2023,
      mileage: 5000,
      icon: "/car.svg",
    },
    {
      name: "Porsche 911",
      price: 120000,
      year: 2022,
      mileage: 10000,
      icon: "/car.svg",
    },
    {
      name: "Chevrolet Corvette",
      price: 70000,
      year: 2021,
      mileage: 12000,
      icon: "/car.svg",
    },
  ];

  const [offers, setOffers] = useState(initialOffers);

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
          <label htmlFor="radio0" className="customSortLabel">
            Most popular
          </label>
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
          <label htmlFor="radio1" className="customSortLabel">
            Least popular
          </label>
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
          <label htmlFor="radio2" className="customSortLabel">
            Most expensive
          </label>
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
          <label htmlFor="radio3" className="customSortLabel">
            Least expensive
          </label>
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
              onClick={() => filterAndSortOffers(minPrice, maxPrice, sort)} >
              Filter
            </button>
            <br />
          </h1>
        </div>
      </div>

      <div className="mainDiv">
        <div className="containersContainer" id="containersContainerID">
          {offers.map((offer, index) => (
            <div key={index} className="offerCard">
              <img src={offer.icon} alt={offer.name} className="offerImage" />
              <div className="offerDetails">
                <h1>{offer.name}</h1>
                <p>Price: ${offer.price}</p>
                <p>Year: {offer.year}</p>
                <p>Mileage: {offer.mileage} </p>
                <div className="buttonContainer">
                  <button className="offerButton" onClick={() => handleShow(offer.name)}>Show</button>
                </div>
              </div>
            </div>
          ))}
        </div>
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
