import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  const Decreament = () => {
    setCount(count - 1);
  };

  const Reset = () => {
    setCount((count = 0));
  };

  const Increament = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>
        Counter Project || <span id="AuthorName">Shiva#WebDev</span>
      </h2>
      <div className="container-box">
        <h1 className="number">{count}</h1>
        <button type="button" onClick={Decreament} className="Buttons">
          -
        </button>
        <button type="button" onClick={Reset} className="Buttons">
          Reset
        </button>
        <button type="button" onClick={Increament} className="Buttons">
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
