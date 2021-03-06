import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="card">
      <img id={props.id} className="memory-img"
      alt={props.name}
      src={props.image}
      clicked ={props.clicked}
      onClick={() => props.handleOnClickEvent(props.id)}
      />
  </div>
);

export default ImageCard;
