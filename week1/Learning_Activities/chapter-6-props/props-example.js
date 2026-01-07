// PropsExample.js
import React from "react";

// Componente hijo
function Greeting(props) {
  return <h2>Hello, {props.name}! Welcome to React.</h2>;
}

// Componente padre
function App() {
  return (
    <div>
      <h1>Props Example</h1>
      {/* Pasando datos al hijo usando props */}
      <Greeting name="Laura" />
      <Greeting name="Pablo" />
      <Greeting name="Next.js Learner" />
    </div>
  );
}

export default App;
