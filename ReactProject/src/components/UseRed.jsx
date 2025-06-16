import { useReducer, useState } from "react";

export default function UseRed() {
  // ✅ Define reducer function properly
  function reducer(state, action) {
    switch (action.type) {
      case "decrement":
        return { ...state, key: state.key - action.payload };
      case "increment":
        return { ...state, key: state.key + action.payload };
      default:
        return state;
    }
  }

  const [count, setCount] = useState(0);

  // ✅ Correct usage: pass your reducer function name here
  const [state, dispatch] = useReducer(reducer, { key: 0 });

  return (
    <div>
      <h3>useState: {count}</h3>
      <h3>useReducer: {state.key}</h3>

      <button onClick={() => setCount(count + 1)}>Increment useState</button>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment useReducer
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement useReducer
      </button>
    </div>
  );
}
