import { Fragment } from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };

  return (
    <Fragment>
      <div className="container">
        <p className="countPart">COUNT {count} </p>
        <div className="btns">
          <button className="addBtn" onClick={addCount}>
            +
          </button>
          <button className="resetBtn" onClick={resetCount}>
            Reset
          </button>
          <button className="minusBtn" onClick={minusCount}>
            -
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
