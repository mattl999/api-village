import React, { useEffect, useState } from "react";
import "./ResearchDisplay.css";
import "../../Displays/Displays.css";

export default function JokeDisplay(props) {
  const [imgArr, setImgArr] = useState([]);
  const [queryWord, setQueryWord] = useState("");
  const [status, setStatus] = useState("Waiting for request");

  const requestImgs = async (e) => {
    e.preventDefault();
    setImgArr([])
    props.makePurchase(40);
    setStatus("Searching")
    try {
      fetch(`https://list.ly/api/v4/search/image?q=${queryWord}`)
        .then((res) => res.json())
        .then((data) => setImgArr(data.results.map((el) => el.image)).then(
          
        ));
    } catch {}
  };
  const handleChange = (e) => {
    e.preventDefault();
    setQueryWord(e.target.value);
  };

  useEffect(() => {
    console.log(queryWord);
  }, [queryWord]);

  return (
    <div className="container  ">
      <div className="row h-25 p-3 research-sub-head">
        {" "}
        We conduct important reasearch here, mostly by looking up cool images.
        You can try too, but it'll cost ya 40 coins. <br />
        <span className="warning"> WARNING:</span>{" "}
      </div>
      <div className="row h-75 ">
        <div className="col-5  d-flex flex-column">
          <div className="row h-50"></div>
          <form className="row mx-0 px-0 h-50 d-flex flex-column justify-content-evenly align-items-center">
            <input
              type="text"
              value={queryWord}
              name="queryWord"
              onChange={handleChange}
              className="w-75"
            />
            <button className="request-btn w-50" onClick={requestImgs}>
              Search Images
            </button>
          </form>
          {/* <button className="joke-btn" onClick={() => console.log(imgArr)}>
            show state
          </button> */}
        </div>

        <div className="col-7 p-0 height-limit">
          {imgArr.length ? (
            <div className="container d-flex flex-column img-container overflow-auto height-limit custom-scroll research-thumb-color">
              {imgArr.map((url, i) => (
                <div className=" my-3 testing">
                  <img key={i} src={url} className="research-img m-2 mx-1 " />
                </div>
              ))}
            </div>
          ) : (
            <div className="container d-flex justify-content-center align-items-center full">
            <h4 className="research-sub-head"> {status}... </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
