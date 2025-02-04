import "./person.css";

export const Person = ({ name, age, image }) => {
  return (
    <div className="person">
      <img width={150} src={image} alt="" />
      <h3 className="title">Name: {name}</h3>
      <p className="age">Age: {age}</p>
      <p>Случайное число {Math.floor(Math.random() * 10)}</p>
    </div>
  );
};
