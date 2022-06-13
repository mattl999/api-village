import React, { useEffect, useState, useRef } from "react";
import "./PetDisplay.css";
import "../../Displays/Displays.css";
import { dogBreeds } from "../../../utils/dogBreeds";
import { requestedBreedName, deHyphenate } from "../../../utils/dogMethods";

export default function ResearchDisplay(props) {
  const [status, setStatus] = useState("Wating for Request");
  const [activeUrl, setActiveUrl] = useState("");
;
  const breed = useRef();
  const [selectedBreed, setSelectedBreed] = useState("");
  const [searchedBreed, setSearchedBreed] = useState("");

  const requestBreed = async (e) => {
    setActiveUrl("");
    props.makePurchase(10);
    setStatus("Searching");
    console.log("selected breed: ", selectedBreed);
    try {
      let url = await fetch(
        `https://dog.ceo/api/breed/${selectedBreed}/images/random`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log("res.message:", res.message);
          console.log("res.message idx:", res.message.indexOf("breeds"));
          setSearchedBreed(deHyphenate(requestedBreedName(res.message)));
          return setActiveUrl(res.message);
        })
        .catch((err) => console.error(err));

      if (!url) {
        setStatus(`Something went wrong. \n\n Doggo did not show itself`);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const requestRandom = async (e) => {
    setActiveUrl("");
    props.makePurchase(40);
    setStatus("Searching");
    try {
      let url = await fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((res) => res.json())
        .then((res) => {
          
          setSearchedBreed(deHyphenate(requestedBreedName(res.message)));
          return res.message;
        });

      console.log("hallo: ", url);
      setActiveUrl(url);

      if (!url) {
        setStatus(`Something went wrong. \n\n Doggo did not show itself`);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (e) => {
    setSelectedBreed(e.target.value.toLowerCase());
    console.log(selectedBreed);
   
  };

  useEffect(() => {
    setSelectedBreed(breed.current.value.toLowerCase());
    console.log(selectedBreed);
    
  }, []);
  return (
    <div className="container  ">
      <div
        className="row h-25 px-3 pt-4 sub-head d-flex justify-content-center"
        style={{ color: props.fontColor.prim }}
      >
        {" "}
        Pick any breed and well find the right dog for you! <br />
        Too many choices? Click 'Search Random' for picture of a random
        breed on the list. 10 Coins-a-pop.
      </div>
      <div className="row h-75 ">
        <div className="col-5  d-flex flex-column">
          <div className="row h-75 py-5 d-flex align-items-center justify-content-center ">
            <label for="breeds">Choose a Breed:</label>

            <select
              ref={breed}
              name="breeds"
              id="breeds"
              className="breed-select custom-scroll breed-thumb-color rounded"
              onChange={handleChange}
            >
              {dogBreeds.map((name) => (
                <option value={name}>{name}</option>
              ))}
            </select>
          </div>
          <div className="row px-0 h-50 d-flex flex-column justify-content-evenly align-items-center ">
            <button
              className="request-btn breed-btn w-75"
              onClick={requestBreed}
            >
              Search Breed
            </button>
            <button
              className="request-btn rndm-btn w-75"
              onClick={requestRandom}
            >
              Search Random
            </button>
          </div>
        </div>

        <div className="col-7 p-0 height-limit  my-3 overflow-hidden ">
          {activeUrl ? (
            <div className="dog-frame height-limit full overflow-hidden">
              <div className="dog-img-frame">
              <img
                
                src={activeUrl}
                className="dog-img mb-3 mx-auto my-auto overflow-hidden"
              />

              </div>
              <span className="caption"> {searchedBreed} </span>
            </div>
          ) : (
            <div className="container d-flex justify-content-center align-items-center full">
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
