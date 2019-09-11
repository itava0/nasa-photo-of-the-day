import React from "react";

const NasaCards = props => {
  return (
    <div key={props.id}>
      <img src={props.imgUrl} />
      <h2>{props.title}</h2>
      <p>{props.explanation}</p>
      <p>{props.date}</p>
      <p>{props.copyright}</p>
    </div>
  );
};

export default NasaCards;