import "./person.css";

export const Person = ({ name, age, image, increase, change, remove }) => {
  return (
    <div className="person">
      <img width={150} src={image} alt="" onClick={remove} />
      <h3 className="title" onClick={increase}>
        Name: {name}
      </h3>
      <input type="text" className="field" value={name} onChange={change} />
      <p className="age">Age: {age}</p>
      <p>Случайное число {Math.floor(Math.random() * 10)}</p>
    </div>
  );
};
