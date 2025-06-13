//  Rendering Array

function Fruits() {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

//  Rendering Array of Objects

function FruitsObj() {
  const fruitsObj = [
    { name: "Apple", color: "Red", price: 12 },
    { name: "Banana", color: "Yellow", price: 5 },
    { name: "Orange", color: "Orange", price: 8 },
  ];

  return (
    <div>
      <ul>
        {fruitsObj.map((fruitObj) => (
          <li key={fruitObj.name}>
            {fruitObj.name} {fruitObj.color} {fruitObj.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Fruits, FruitsObj };
