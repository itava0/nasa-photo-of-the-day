import React, { useState, useEffect } from "react";
import NasaCards from "./nasaCards";
import axios from "axios";

function NasaLists() {
  const [nasa, setNasa] = useState([]);
  const [day, setDate] = useState("1");
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=I6nFbdeH3wC8aTAbvb6NGroh51cHrLYyENKzoEHh&date=2019-08-${day}`
      )
      .then(res => {
        console.log(res.data);
        const nasa = res.data;
        setNasa(nasa);
        console.log(setDate());
      })
      .catch(err => {
        console.log("The Data was not returned", err);
      });
  }, [day]);
  return (
    <div>
      <NasaCards
        key={nasa.id}
        title={nasa.title}
        explanation={nasa.explanation}
        imgUrl={nasa.url}
        date={nasa.date}
        copyright={nasa.copyright}
      />
      <div>
        <button onClick={() => setDate(Math.floor(Math.random() * 30))}>
          Click For Random
        </button>
      </div>
    </div>
  );
}

export default NasaLists;
