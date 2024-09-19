import { useEffect, useState } from "react";

const StateUseCase = () => {
  //   const person = [
  //     { name: "Shahzaib", age: 25 },
  //     { name: "Ali", age: 15 },
  //     { name: "John", age: 35 },
  //     { name: "Jolly", age: 18 },
  //   ];

  const [person, setPerson] = useState([
    { name: "Shahzaib", age: 25 },
    { name: "Ali", age: 15 },
    { name: "John", age: 35 },
    { name: "Jolly", age: 18 },
  ]);

//   const [users, setUsers] = useState(0);

//   useEffect(() => {
//     setUsers(person.length);
//   }, [person]);


// Derived State

const userLength = person.length

const avgAge = person.reduce((accum,currElement)=> accum + currElement.age, 0) / userLength

  return (
    <>
      {person.map((element, index) => (
        <h2 key={index}>
          name: {element.name} age: {element.age}
        </h2>
      ))}

      <br />

      <h3>Total User: {userLength}</h3>
      <h3>Avg Age: {Math.round(avgAge)}</h3>
    </>
  );
};

export default StateUseCase;
