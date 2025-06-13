import { First, Second, Third, Fourth } from "./components/Props.jsx";
import "./assets/Common.css";
import { Fruits, FruitsObj } from "./components/Fruits.jsx";

function Welcome() {
  const person = {
    count: "Third",
    message: "Great !",
    seatNumber: [1, 2, 3],
  };
  const personSec = {
    count: "Fourth",
    message: "Great !",
    seatNumber: [1, 2, 3],
  };
  return (
    <div>
      <First count="First" message="Great !" />
      <Second count="Second" message="Great !" />
      <Third person={person} />
      <Fourth personSec={personSec} />
      <Fruits />
      <FruitsObj />
    </div>
  );
}

export default Welcome;
