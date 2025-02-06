import { useState } from "react";

export const Title = () => {
  const [title, setTitle] = useState("Добро пожаловать!");

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <h1 className="main-title">{title}</h1>
      <input type="text" className="field" value={title} onChange={changeTitle} />
    </div>
  );
};
