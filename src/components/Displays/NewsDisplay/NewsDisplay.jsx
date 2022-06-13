import React, { useEffect, useState, useRef } from "react";
import "./NewsDisplay.css";
import "../../Displays/Displays.css";
import { Timeline } from "react-twitter-widgets";

export default function ResearchDisplay(props) {
  const [status, setStatus] = useState("Waiting for request");
  const [isPaid, setIsPaid] = useState(false);
  const scrollDiv = React.createRef();

  

  return (
    <div className="container  ">
      <div
        className="row h-25 px-5 pt-4 pt-2 sub-head"
        style={{ color: props.fontColor.prim }}
      >
        {" "}
        We spend our days monitoring current events and keeping the people of
        Api-Village informed. For 50 coins I'll show you what were working on.{" "}
        <br />
      </div>
      <div className="row h-75 ">
        <div className="col p-0 height-limit">
          {isPaid ? (
            <div className="container full d-flex  w-100">
                <div className="col-5 p-5 center">This is top-secret research. Please don't tell anybody</div>
                <div className=" container col-7 mt-3 px-5 tweet-scroll custom-scroll tweet-thumb-color" ref={scrollDiv}>
                <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'elonmusk'
            }}
            // options={{
            //   height: '350'
            // }} 
            />
                </div>
            
            </div>
          ) : (
            <div className="container full center  w-100" ref={scrollDiv}>
              <button onClick={() => setIsPaid(true)}> View top-secret news Research</button>
            </div>
          )}

          {/* <button onClick={checkref}>check ref</button> */}
        </div>
      </div>
    </div>
  );
}
