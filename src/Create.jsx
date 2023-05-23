import React from "react";
// import Emojipedia from "./emojipedia";
import Card from "./components/card";

const CreateCard = (CardElement) => {
  return (
    <Card
      ID={CardElement.id}
      Emoji={CardElement.emoji}
      Meaning={CardElement.meaning}
      Name={CardElement.name}
    />
  );
};
export default CreateCard;
