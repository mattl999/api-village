import React, { useEffect, useState, useRef } from "react";
import "./WeatherDisplay.css";
import "../../Displays/Displays.css";
import { getCurrentLatLng } from "../../../utils/getCurrentLatLng";
import { getCurWeatherByLatLng, capitalize } from "../../../utils/weather-api";
import Map from "./Map";

export default function WeatherDisplay(props) {
  const [coords, setCoords] = useState(null);
  const [weather, setWeather] = useState({
    temp: null,
    conditions: null,
    city: null,
  });

  const getLatLng = async () => {
    let coords = await getCurrentLatLng();
    setCoords(coords);
    console.log("heyo:", coords);
    fetchData(coords.lat, coords.lng);
  };
  let fetchData = async (lat, lng) => {
    console.log("hello", lat, lng);
    let weatherData = await getCurWeatherByLatLng(lat, lng);
    console.log("hi", weatherData);
    setCoords({ lat: lat, lng: lng });
    setWeather({
      temp: Math.round(weatherData.main.temp),
      conditions: capitalize(weatherData.weather[0].description),
      city: weatherData.name,
    });
  };

  useEffect(() => {}, []);

  return (
    <div className="container d-flex flex-column px-0 ">
      <div
        className="row px-3 mt-1 flex-shrink-0"
        style={{ color: props.fontColor.prim }}
      >
        {" "}
        We can tell you the weather of the place you're at right now, but we'll
        need to know where you're at first. If you're not comfortable with this,
        thats OK! Plenty of shops in the town! <br />
      </div>
      {coords ? (
        <div className="row flex-grow-1 m-1 mx-0 mt-4 p-1">
          <div className="col-5 d-flex flex-column center justify-content-evenly" style={{ color: props.fontColor.prim }}>
            <div className="row">City: {weather.city} </div>
            <div className="row">Temp: {weather.temp}&deg;C </div>
            <div className="row">Weather: {weather.conditions} </div>
          </div>
          <div
            className="col-7 px-0  map-border"
            style={{ borderColor: props.fontColor.prim }}
          >
            <Map zoom={5} lat={coords.lat} lng={coords.lng} />
          </div>
        </div>
      ) : (
        <div className="full center">
          <button onClick={getLatLng}>Share Coordinates</button>
        </div>
      )}
    </div>
  );
}
