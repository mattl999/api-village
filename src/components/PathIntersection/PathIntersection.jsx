import React from "react";
import '../PathIntersection/PathIntersection.css'

 function PathIntersection() {
  return (
    <div className="col path">
      <div className="row " style={{ height: "42%" }}>
        <div className="col-5 p-0 tl-corner grassy"></div>
        <div className="path col-2 "></div>
        <div className="col-5 p-0 tr-corner grassy"></div>
      </div>
      <div className="path row " style={{ height: "16%" }}>

      </div>
      <div className="row " style={{ height: "42%" }}>
        <div className="col-5 p-0 bl-corner grassy "></div>
        <div className="path col-2 "></div>
        <div className="col-5 p-0 br-corner grassy "></div>
      </div>
    </div>
  );
}
export default PathIntersection