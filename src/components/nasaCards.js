import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody
} from "reactstrap";

const NasaCards = props => {
  return (
    <CardDeck key={props.id}>
      <Card>
        <CardImg src={props.imgUrl} alt="nasa img" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText className="text-sm-center">{props.explanation}</CardText>
          <CardText>
            <small className="text-muted">{props.date}</small>
          </CardText>
          <CardText>
            <small className="text-muted">{props.copyright}</small>
          </CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default NasaCards;
