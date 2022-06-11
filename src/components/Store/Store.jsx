import React from "react";
import { Link } from "react-router-dom";
import "./Store.css";
function Store(props) {
  return (
    <div className="col  p-0 d-flex flex-row gx-0">
      <div className={props.isRight ? "col-2 " : "col "}>
        {props.isRight ? (
          <>
            <div className="row gx-0 " style={{ height: "42%" }}></div>
            <div className="row gx-0 path" style={{ height: "16%" }}></div>
            <div className="row gx-0 " style={{ height: "42%" }}></div>
          </>
        ) : (
          <div className="container h-100 d-flex justify-content-around p-2 px-5">
            <div className="col d-flex justify-content-center align-items-center m-auto">
              <h4 className="border border-5 p-2 mx-5 position-absolute opacity-75 text-white rounded">
                <Link className="link-style" to={`/${props.link}`}>
                  {props.shopName}
                </Link>
              </h4>
            </div>
            <div className="col">
              <Link to={`/${props.link}`}>
                <img
                  className="shop left"
                  src="img/shop-left.png"
                  alt="store"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className={props.isRight ? "col " : "col-2 "}>
        {!props.isRight ? (
          <>
            <div className="row gx-0 " style={{ height: "42%" }}></div>
            <div className="row gx-0 path" style={{ height: "16%" }}></div>
            <div className="row gx-0 " style={{ height: "42%" }}></div>
          </>
        ) : (
          <div className="container h-100 d-flex justify-content-around p-2 px-5">
            <div className="col">
              <Link to={`/${props.link}`}>
                <img
                  className="shop right"
                  src="img/shop-left.png"
                  alt="Store"
                />
              </Link>
            </div>
            <div className="col col d-flex justify-content-center align-items-center m-auto">
              <h4 className="border border-5 p-2  mx-5 position-absolute opacity-75 text-white rounded">
                <Link className="link-style" to={`/${props.link}`}>
                  {props.shopName}
                </Link>
              </h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Store;
