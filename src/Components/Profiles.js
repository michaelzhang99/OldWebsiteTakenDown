import React from "react";

function Profiles(props) {
  return (
    <div className="MainPlace">
      <img src={props.img} />
      <h3> {props.name}</h3>
      <p>{props.contact}</p>
    </div>
  );
}

export default Profiles;
