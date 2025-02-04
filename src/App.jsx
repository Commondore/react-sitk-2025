import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Person } from "./components/person/person";
import { users } from "./data";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Person name={users[0].name} age={users[0].age} image={users[0].image} />
        <Person name={users[1].name} age={users[1].age} image={users[1].image} />
        <Person name={users[2].name} age={users[2].age} image={users[2].image} />
      </div>
    </>
  );
};

export default App;
