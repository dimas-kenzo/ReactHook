import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <h3>Use State</h3>
      
      <input placeholder="Masukan Nama Anda" onChange={(e) => setInputValue(e.target.value)} />
      <br /><br />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
