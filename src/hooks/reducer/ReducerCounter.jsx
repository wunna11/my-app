import React, { useReducer } from "react";

let initialState = {
  counter: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      throw new Error("Unkonwn action type");
  }
}

export default function ReducerCouter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>ReducerCouter {state.counter}</h1>

      <button
        type="button"
        onClick={() => {
          dispatch({
            type: "increment",
          });
        }}
      >
        Increment
      </button>
    </div>
  );
}
