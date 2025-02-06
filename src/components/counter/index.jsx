import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <button className="btn" onClick={() => setCounter((counter) => counter + 1)}>
      Счетчик: {counter}
    </button>
  );
};
