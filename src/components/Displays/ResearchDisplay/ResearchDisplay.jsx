import React, { useEffect, useState, useRef } from "react";
import "./ResearchDisplay.css";
import "../../Displays/Displays.css";

export default function ResearchDisplay(props) {
  const [imgArr, setImgArr] = useState([]);
  const [queryWord, setQueryWord] = useState("");
  const [status, setStatus] = useState("Waiting for request");
  const scrollDiv = React.createRef();
  const inputRef = useRef();

  const requestImgs = async (e) => {
    e.preventDefault();
    console.log(scrollDiv);

    let searchWord = queryWord;
    setImgArr([]);
    props.makePurchase(40);
    setStatus("Searching");
    try {
      let response = await fetch(
        `https://list.ly/api/v4/search/image?q=${queryWord}`
      ).then((res) => res.json());
      console.log("response", response);

      let formatted = await response.results.map((el) => el.image);
      setImgArr(formatted);

      if (!formatted.length) {
        setStatus(
          `Found no results for "${searchWord}". \n\n Better luck next time!`
        );
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setQueryWord(e.target.value);
  };
  const checkref = () => {
    console.log(scrollDiv);
    console.log(inputRef);
  };
  useEffect(() => {
    scrollDiv.current.scrollTop = 0;
  }, [imgArr]);
  return (
    <div className="container  ">
      <div className="row h-25 px-3 pt-2 research-sub-head">
        {" "}
        We conduct important reasearch here, mostly by looking up cool images.
        You can try too, but it'll cost ya 40 coins. <br />
      </div>
      <div className="row h-75 ">
        <div className="col-5  d-flex flex-column">
          <div className="row h-50 p-5 d-flex align-items-end">
            Type whatever you wanna know about here:{" "}
          </div>
          <form className="row mx-0 my-3 px-0 h-50 d-flex flex-column justify-content-between align-items-center">
            <input
              ref={inputRef}
              type="text"
              value={queryWord}
              name="queryWord"
              onChange={handleChange}
              className="w-75"
              placeholder="eg. Monkey"
            />
            <button className="request-btn w-50" onClick={requestImgs}>
              Search Images
            </button>
          </form>
        </div>

        <div className="col-7 p-0 height-limit">
          {imgArr.length ? (
            <div
              className="container d-flex flex-column img-container overflow-auto height-limit custom-scroll research-thumb-color"
              ref={scrollDiv}
            >
              {imgArr.map((url, i) => (
                <div className=" my-3 testing">
                  <img key={i} src={url} className="research-img m-2 mx-1 " />
                </div>
              ))}
            </div>
          ) : (
            <div
              className="container d-flex justify-content-center align-items-center full"
              ref={scrollDiv}
            >
              <h4 className="research-sub-head"> {status}... </h4>
            </div>
          )}
          {/* <button onClick={checkref}>check ref</button> */}
        </div>
      </div>
    </div>
  );
}
