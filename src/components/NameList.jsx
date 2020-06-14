import React from "react";
import '../App.scss';


export function ImageAvatar(props) {
  return (
    <span className="contact__avatar">
      <img src={props.image} alt = {props.image} />
    </span>
  );
}


export function Name(props) {
  return (
    <span className="contact__data" >{props.name}</span>
  );
}

