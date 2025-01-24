import React, { useReducer } from "react";
import "./App.css";

// Define the reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'DECREASE':
      return { count: state.count - 1 };
    case 'INCREASE':
      return { count: state.count + 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

const Counter = () => {
  // Initialize useReducer with the reducer function and initial state
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  // Color logic remains the same
  const getColor = () => {
    if (state.count > 0) return "green";
    if (state.count < 0) return "red";
    return "black";
  };

  return (
    <div className="container">
      <header>
        <h1>Counter useReducer</h1>
      </header>
      <main>
        <section>
          <p id="value" style={{ color: getColor() }}>
            {state.count}
          </p>
          <section className="button-container">
            <button
              className="btn decrease"
              onClick={() => dispatch({ type: 'DECREASE' })}
            >
              decrease
            </button>
            <button 
              className="btn reset" 
              onClick={() => dispatch({ type: 'RESET' })}
            >
              reset
            </button>
            <button
              className="btn increase"
              onClick={() => dispatch({ type: 'INCREASE' })}
            >
              increase
            </button>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Counter;
