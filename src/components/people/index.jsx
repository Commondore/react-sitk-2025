import { Person } from "./person/person";

export const People = ({ people, increaseAge, changeName, removePerson }) => {
  return (
    <div className="wrapper">
      {people.map((person) => {
        return (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            image={person.image}
            increase={() => increaseAge(person.id)}
            change={(event) => changeName(event, person.id)}
            remove={() => removePerson(person.id)}
          />
        );
      })}
    </div>
  );
};
