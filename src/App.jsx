import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { users } from "./data";
import { Title } from "./components/title";
import { Counter } from "./components/counter";
import { People } from "./components/people";

const App = () => {
  const [people, setPeople] = useState(users);

  const changeName = (event, id) => {
    const copyPeople = [...people];
    const index = copyPeople.findIndex((person) => person.id === id);
    const person = { ...copyPeople[index] };
    person.name = event.target.value;
    copyPeople[index] = person;
    setPeople(copyPeople);
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

  return (
    <>
      <Navbar />
      <div className="container">
        <Title />
        <Counter />
        <People
          people={people}
          increaseAge={increaseAge}
          changeName={changeName}
          removePerson={removePerson}
        />
      </div>
    </>
  );
};

export default App;
