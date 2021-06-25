import React from "react";

const Image = (props) => {
  return (
    <div>
      <img className="slika " src={props.name} alt={props.name} />
    </div>
  );
};

export default Image;
