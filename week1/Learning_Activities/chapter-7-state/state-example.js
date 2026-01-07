// StateExample.js
import React, { useState } from "react";

function Counter() {
  // Declarando el estado
  const [count, setCount] = useState(0);

  // Funciones para actualizar el estado
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>State Example: Counter</h1>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
