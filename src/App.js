import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Village from "./components/Village/Village";
import { Routes, Route } from "react-router-dom";
import ShopCounter from "./components/ShopCounter/ShopCounter";
import JokeDisplay from "./components/Displays/JokeDisplay/JokeDisplay";
import ResearchDisplay from "./components/Displays/ResearchDisplay/ResearchDisplay"
function App() {
  const [coins, setCoins] = useState(500);

  let makePurchase = (amt) => {
    setCoins(coins - amt);
  };
  const researchStyle = {
    wp: "rgb(129, 102, 146)",
    sc: "rgb(149, 108, 188)",
    bc: "blueviolet",
    filter: "f-meme",
  };
  const jokeStyle = {
    wp: "rgb(58 102 122)",
    sc: "rgb(99 231 176)",
    bc: "rgb(29 173 70)",
    filter: "f-joke",
  };
  return (
    <div className="App">
      <nav class="navbar-dark bg-dark justify-content-between position-absolute opacity-75 px-1">
        <div className="container">
          <div class="navbar-brand link-style">API-Village</div>
        </div>
      </nav>
      <nav class="navbar-dark bg-dark justify-content-between position-absolute opacity-75 px-1 nav-right">
        <div className="container">
          <div class="navbar-brand">
            <img
              src="img/coin.png"
              className="icon py-1 link-style"
              alt="coin"
            />{" "}
            {coins}
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Village />}></Route>
        <Route
          path="/jokes"
          element={
            <ShopCounter
              name="Joke Merchant"
              signName="JokeStop"
              styling={jokeStyle}
              display={<JokeDisplay makePurchase={makePurchase} />}
            />
          }
        ></Route>
        <Route
          path="/research"
          element={
            <ShopCounter
              name="Research Hut"
              signName="the Research Hut"
              styling={researchStyle}
              display = {<ResearchDisplay makePurchase={makePurchase} />}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
