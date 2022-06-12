import React, {useState } from "react";
import { jokeCats } from "../../../utils/jokeCats";
import './JokeDisplay.css'
import '../../Displays/Displays.css'

export default function JokeDisplay(props) {
  const [catString, setCatString] = useState("");
  const [singleJoke, setSingleJoke] = useState("");
  const [twoPartJoke, setTwoPartJoke] = useState("");

  const requestJoke = async () => {
    setSingleJoke("");
    setTwoPartJoke({ setup: "", delivery: "" });

    props.makePurchase(20);
    let joke = await fetch(
      `https://v2.jokeapi.dev/joke/${
        catString || "Any"
      }?blacklistFlags=nsfw,racist,sexist,explicit`
    ).then((res) => res.json());
    console.log(joke);

    if (!joke.error) {
      if (joke.type === "single") {
        setSingleJoke(joke.joke);
      } else {
        setTwoPartJoke({ setup: joke.setup });
        setTimeout(
          () => setTwoPartJoke({ setup: joke.setup, delivery: joke.delivery }),
          Math.min(joke.setup.length * 90, 4000)
        );
      }
    }
  };
  const checkBox = (name) => {
    if (catString.includes(name)) {
      let idx = catString.indexOf(name);
      if (idx === 0) {
        let newString = catString.slice(name.length + 1);
        newString = newString.replace(name, "");
        setCatString(newString);
        console.log(newString);
      } else {
        let newString = catString.slice(0, idx - 1) + catString.slice(idx);
        newString = newString.replace(name, "");
        setCatString(newString);
        console.log(newString);
      }
    } else {
      if (catString.length) {
        setCatString(catString + "," + name);
        console.log("new:", catString + "," + name);
      } else {
        setCatString(catString + name);
        console.log(catString + name);
      }

      //   console.log("state:",catString);
    }
  };
  return (
    <div className="container ">
      <div className="row h-25 p-3 sub-head">
        {" "}
        For just 20 coins I'll tell you a real knee-slapper! Just pick the kind
        of jokes you wanna hear and I'll do the rest! <br />
        <span className="warning">
          {" "}
          WARNING: The dark jokes can be ... dark. Click at your own risk.{" "}
        </span>{" "}
      </div>
      <div className="row h-75 ">
        <div className="col-5  d-flex flex-column pt-4">
          <div className="sec-header mb-4">Categories:</div>
          <div className="full alignment-grid">
            <div className="full d-flex flex-column justify-content-evenly align-items-start py-2 cat-list">
              {jokeCats.map((name, idx) => (
                <li key={idx}>
                  {" "}
                  <label>
                    <input
                      type="checkbox"
                      name={name}
                      className="nes-checkbox is-dark"
                      onClick={() => checkBox(name)}
                    />
                    <span className="ps-2">{name}</span>
                  </label>
                </li>
              ))}
            </div>
          </div>
          <div className="row p-4 d-flex justify-content-center">
            <button className="request-btn" onClick={() => requestJoke()}>
              Request Joke
            </button>
          </div>
        </div>
        <div className="col-7  p-4 overflow-auto">
          <div className="container full d-flex flex-column justify-content-evenly ">
            {singleJoke ? <div className="single">{singleJoke}</div> : null}
            {twoPartJoke ? (
              <>
                <div className="setup">{twoPartJoke.setup}</div>
                <div className="delivery">{twoPartJoke.delivery}</div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
