import React from "react";
import Store from "../Store/Store";
import PathIntersection from "../PathIntersection/PathIntersection";

export default function Village() {
  return (
    <>
      <div className="container-fluid h-100 d-flex flex-column grassy">
        <div className="row flex-grow-1">
          <Store shopName="Research Lab" link="research" isRight={false} />
          <PathIntersection />
          <Store shopName="Pet Store" link="pets" isRight={true} />
        </div>
        <div className="row flex-grow-1">
          <Store shopName="Joke Peddler" link="jokes" isRight={false} />
          <PathIntersection />
          <Store shopName="Weather Station" link="weather" isRight={true} />
        </div>
        <div className="row flex-grow-1">
          <Store shopName="Movie Theatre" link="movies" isRight={false} />
          <PathIntersection />
          <Store shopName="News Stand" link="news" isRight={true} />
        </div>
      </div>
    </>
  );
}
