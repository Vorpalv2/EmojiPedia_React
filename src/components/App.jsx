import React from "react";
import Emojipedia from "../emojipedia";
import CreateCard from "../Create";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{Emojipedia.map(CreateCard)}</dl>
    </div>
  );
}

export default App;
