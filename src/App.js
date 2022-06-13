import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Village from "./components/Village/Village";
import { Routes, Route } from "react-router-dom";
import ShopCounter from "./components/ShopCounter/ShopCounter";
import JokeDisplay from "./components/Displays/JokeDisplay/JokeDisplay";
import ResearchDisplay from "./components/Displays/ResearchDisplay/ResearchDisplay";
import PetDisplay from "./components/Displays/PetDisplay/PetDisplay";
import WeatherDisplay from "./components/Displays/WeatherDisplay/WeatherDisplay";
import MovieDisplay from "./components/Displays/MovieDisplay/MovieDisplay";
import NewsDisplay from "./components/Displays/NewsDisplay/NewsDisplay"

function App() {
  const [coins, setCoins] = useState(500);

  let makePurchase = (amt) => {
    let curCoins = coins;
    setCoins(curCoins - amt);
  };

  const researchStyle = {
    wp: "rgb(58 102 122)",
    sc: "rgb(99 231 176)",
    bc: "rgb(29 173 70)",
    fc: {
      prim: "rgb(85 156 189)",
      sec: "",
    },
    filter: "f-joke",
  };
  const jokeStyle = {
    wp: "rgb(59 59 96)",
    sc: "rgb(177 128 193)",
    bc: "rgb(122 30 121)",
    fc: {
      prim: "rgb(107 86 149)",
      sec: "",
    },
    filter: "f-meme",
  };
  const petStyle = {
    wp: "rgb(40 38 33)",
    sc: "rgb(182, 187, 101)",
    bc: "rgb(80 57 10)",
    fc: {
      prim: "rgb(120 100 55)",
      sec: "",
    },
    filter: "f-pet",
  };
  const weatherStyle = {
    wp: "rgb(58 102 122)",
    sc: "rgb(99 231 176)",
    bc: "rgb(29 173 70)",
    fc: {
      prim: "rgb(85 156 189)",
      sec: "",
    },
    filter: "f-joke",
  };
  const movieStyle = {
    wp: "rgb(58 102 122)",
    sc: "rgb(99 231 176)",
    bc: "rgb(29 173 70)",
    fc: {
      prim: "rgb(85 156 189)",
      sec: "",
    },
    filter: "f-joke",
  };
  const newsStyle = {
    wp: "rgb(58 102 122)",
    sc: "rgb(99 231 176)",
    bc: "rgb(29 173 70)",
    fc: {
      prim: "rgb(85 156 189)",
      sec: "",
    },
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
              display={
                <JokeDisplay
                  fontColor={jokeStyle.fc}
                  makePurchase={makePurchase}
                />
              }
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
              display={
                <ResearchDisplay
                  fontColor={researchStyle.fc}
                  makePurchase={makePurchase}
                />
              }
            />
          }
        ></Route>
        <Route
          path="/pets"
          element={
            <ShopCounter
              name="Dog Depot"
              signName="Dog Depot"
              styling={petStyle}
              display={
                <PetDisplay
                  fontColor={petStyle.fc}
                  makePurchase={makePurchase}
                />
              }
            />
          }
        ></Route>
        <Route
          path="/weather"
          element={
            <ShopCounter
              name="Weather Man"
              signName="the Weather Station"
              styling={weatherStyle}
              display={
                <WeatherDisplay
                  fontColor={weatherStyle.fc}
                  borderColor={weatherStyle.bc}
                  makePurchase={makePurchase}
                />
              }
            />
          }
        ></Route>
        <Route
          path="/movies"
          element={
            <ShopCounter
              name="Movie Critic"
              signName="the Video Store"
              styling={movieStyle}
              display={
                <MovieDisplay
                  fontColor={movieStyle.fc}
                  borderColor={movieStyle.bc}
                  makePurchase={makePurchase}
                />
              }
            />
          }
        ></Route>
        <Route
          path="/news"
          element={
            <ShopCounter
              name="News Analyst"
              signName="the News Stand"
              styling={newsStyle}
              display={
                <NewsDisplay
                  fontColor={newsStyle.fc}
                  borderColor={newsStyle.bc}
                  makePurchase={makePurchase}
                />
              }
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
