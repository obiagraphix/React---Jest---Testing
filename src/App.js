import React, { useState } from "react";
import Button from "./Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = (increment) => {
    setCount(count + increment);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Button increment={1} onClickFunction={incrementCount} />
        <Button increment={10} onClickFunction={incrementCount} />
        <Button increment={100} onClickFunction={incrementCount} />
        <Button increment={1000} onClickFunction={incrementCount} />
        <span>{count}</span>
      </header>
    </div>
  );
}

export default App;
