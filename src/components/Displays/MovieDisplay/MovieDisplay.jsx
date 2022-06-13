import React, { useEffect, useState, useRef } from "react";
import "./MovieDisplay.css";
import "../../Displays/Displays.css";

export default function ResearchDisplay(props) {
  const [vidArr, setVidArr] = useState([]);
  const [queryWord, setQueryWord] = useState("");
  const [status, setStatus] = useState("Waiting for request");
  const scrollDiv = React.createRef();

  const requestVids = async (e) => {
    e.preventDefault();
    console.log(scrollDiv);

    let searchWord = queryWord;
    setVidArr([]);
    props.makePurchase(60);
    setStatus("Searching");
    try {
      let response = await fetch(
        `https://list.ly/api/v4/search/video?q=${queryWord}&per_page=${5}`
      ).then((res) => res.json());
      console.log("response", response);

      let formatted = await response.results.map((el) =>
      `https://www.youtube.com/embed/${el.media_id}` );
      setVidArr(formatted);

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

  useEffect(() => {
    scrollDiv.current.scrollTop = 0;
  }, [vidArr]);
  return (
    <div className="container  ">
      <div
        className="row h-25 px-5 pt-4 pt-2 sub-head"
        style={{ color: props.fontColor.prim }}
      >
        {" "}
        For 60 coins, I'll find just the video you're looking for! Our collection is big, so it might take a few seconds to load. <br />
      </div>
      <div className="row h-75 ">
        <div className="col-5  d-flex flex-column">
          <div
            className="row h-50 p-5 d-flex align-items-end"
            style={{ color: props.fontColor.sec }}
          >
            Enter a word here and click "Search" to search our catalog. <br />{" "}
          </div>
          <form className="row mx-0 my-3 px-0 h-50 d-flex flex-column justify-content-between align-items-center">
            <input
              type="text"
              value={queryWord}
              name="queryWord"
              onChange={handleChange}
              className="w-75"
              placeholder="eg. Monkey"
            />
            <button className="request-btn w-50" onClick={requestVids}>
              Get Movies
            </button>
          </form>
        </div>

        <div className="col-7 p-0 height-limit">
          {vidArr.length ? (
            <div
              className="container d-flex flex-column img-container overflow-auto height-limit custom-scroll research-thumb-color px-0"
              ref={scrollDiv}
            >
              {vidArr.map((url, i) => (
                <div className="">
                  <iframe key={i} src={url} fetchPriority={(i<5 ? "high" : "low")} className="research-img m-2 mx-1" allowFullScreen enable></iframe>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="container d-flex justify-content-center align-items-center full"
              ref={scrollDiv}
            >
              <h4 className="sub-head" style={{ color: props.fontColor.prim }}>
                {" "}
                {status}...{" "}
              </h4>
            </div>
          )}
          {/* <button onClick={checkref}>check ref</button> */}
        </div>
      </div>
    </div>
  );
}
