import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { users } from "./data";
import { Title } from "./components/title";
import { People } from "./components/people";
import { CounterTitle } from "./components/counter-title";
import { ToggleButton } from "./components/toggle-button";

const App = () => {
  const [people, setPeople] = useState(users);
  const [isShow, setIsShow] = useState(true);

  const changeName = (event, id) => {
    setPeople((prevPeople) =>
      prevPeople.map((person) =>
        person.id === id ? { ...person, name: event.target.value } : person
      )
    );
  };

  const increaseAge = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.map((person) => {
        return {
          ...person,
          age: person.id === id ? person.age + 1 : person.age,
        };
      });
    });
  };

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  const togglePeople = () => {
    setIsShow((isShow) => !isShow);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Title />

        <ToggleButton isShow={isShow} toggle={togglePeople}>
          Переключатель людей
        </ToggleButton>

        <CounterTitle units={people} text="Количество пользователей: " />

        {isShow &&
          (people.length ? (
            <People
              people={people}
              increaseAge={increaseAge}
              changeName={changeName}
              removePerson={removePerson}
            />
          ) : (
            <h2>Пользователей нет!</h2>
          ))}
      </div>
    </>
  );
};

export default App;
