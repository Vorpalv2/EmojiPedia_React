import React from "react";

const Card = (props) => {
  return (
    <div className="term">
      <dt>
        <span>ID : {props.ID}</span>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.Emoji}
        </span>
        <span>{props.Name}</span>
      </dt>
      <dd>{props.Meaning}</dd>
    </div>
  );
};

export default Card;
