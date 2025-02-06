import { useState } from "react";

export const Title = () => {
  const [title, setTitle] = useState("Добро пожаловать!");

  const changeTitle = () => {
    setTitle("Новый заголовок");
  };

  return (
    <h1 className="main-title" onClick={changeTitle}>
      {title}
    </h1>
  );
};
