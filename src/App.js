import React, { useState } from "react";
import EffectHook from "./EffectHook";
// What are the draw backs of class based components
// Function based components vs Class Components
// What are hooks
// Rules of hooks

// Class based component are little bit complex
// Functional Components before state less components
// In 16.8 hooks
// Hooks special function which we can handle the state and life cycle methods of react

// State
// life cycle methods

// Rules of Hooks
// 1) Hooks needs be imported at top level
//  2) you cannot define the useState in loops
// 3 you cannot call the hook in condtional

const App = () => {
  const [count, setCount] = useState(0);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // 1) data
  // 2) the method which will update the state
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleChange = (e) => {
    // setForm([e.target.name] : e.target.value)
    console.log(e.target.name);
    const name = e.target.name;

    setForm({ ...form, name: e.target.value });
    console.log(form);
  };
  return (
    <div>
      {/* Counter
      {count}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button> */}

      <form>
        <input
          type="text"
          placeholder="firstName"
          name="firstName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="lastName"
          name="lastName"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        {/* <input type="text" placeholder="firstName"/> */}
        <button>Sign up</button>

        <div>{form.firstName}</div>
      </form>
      <EffectHook />
    </div>
  );
};
export default App;
