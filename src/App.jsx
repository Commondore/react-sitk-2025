import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Person } from "./components/person/person";
import { users } from "./data";

const App = () => {
  const [title, setTitle] = useState("Добро пожаловать!");
  const [people, setPeople] = useState(users);
  const [counter, setCounter] = useState(0);

  const changeTitle = () => {
    setTitle("Новый заголовок");
  };

  const changeName = () => {
    const copyPeople = [...people];
    const person = { ...copyPeople[0] };
    person.name = "Peter Parker";

    copyPeople[0] = person;

    setPeople(copyPeople);
  };

  const increaseAge = () => {
    setPeople((prevPeople) => {
      return prevPeople.map((person) => {
        return {
          ...person,
          age: person.age + 1,
        };
      });
    });
  };

  const changeCounter = () => {
    setCounter((counter) => {
      return counter + 1;
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="main-title" onClick={changeTitle}>
          {title} Счетчик: {counter}
        </h1>
        <button className="btn" onClick={changeName}>
          Изменить имя
        </button>
        <button className="btn" onClick={increaseAge}>
          Увеличить возраст
        </button>

        <button className="btn" onClick={() => setCounter((counter) => counter + 1)}>
          Увеличить счетчик
        </button>
      </div>
      <div className="wrapper">
        <Person name={people[0].name} age={people[0].age} image={people[0].image} />
        <Person name={people[1].name} age={people[1].age} image={people[1].image} />
        <Person name={people[2].name} age={people[2].age} image={people[2].image} />
      </div>
    </>
  );
};

export default App;
