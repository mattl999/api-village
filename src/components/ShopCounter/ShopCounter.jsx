import React from "react";
import "./ShopCounter.css";
import "../Displays/Displays.css"
import { Link } from "react-router-dom";
export default function ShopCounter(props) {
  return (
    <div className="App ">
      <Link to={"/"}>
        <nav class="navbar-dark bg-dark justify-content-between position-absolute opacity-75 p-1 nav-middle">
          <div className="container">
            <a class="navbar-brand link-style">Back to Village</a>
          </div>
        </nav>
      </Link>

      <div className="row h-75 gx-0 ">
        <div
          className="container joke-wallpaper d-flex flex-row"
          style={{ backgroundColor: props.styling.wp }}
        >
          <div className="col-8 p-5 ">
            <div
              className="container display text-light p-3 d-flex flex-column align-items-center justify-content between height-limit-lg"
              style={{ borderColor: props.styling.bc }}
            >
              <div className="row">
              <h2 className="pixel-font">Welcome to {props.signName}!</h2>
              </div>
              <div className="row full pixel-font">
              {props.display}
              </div>

            </div>
          </div>
          <div className="col-4 d-flex align-items-end">
            <div className="container-fluid h-100" style={{ height: "33.33%" }}>
              <div className="row p-5 gx-0 " style={{ height: "28%" }}>
                <div
                  className="shop-sign d-flex align-items-center justify-content-center pixel-font"
                  style={{
                    borderColor: props.styling.bc,
                    backgroundColor: props.styling.sc,
                  }}
                >
                  {props.name}
                </div>
              </div>
              <div className="row gx-0 " style={{ height: "72%" }}></div>
              <img
                src="img/shopkeeper1.png"
                className="shopkeeper position-absolute"
                id={props.styling.filter}
                alt="shopkeeper"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row h-25 gx-0 ">
        <div className="row h-25 gx-0 countertop"></div>
        <div className="row h-75 gx-0 counter"></div>
      </div>
    </div>
  );
}
