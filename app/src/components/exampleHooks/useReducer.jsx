import React, { useReducer } from 'react';

const initialState = {count: 0};

const myReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const AppReducer = () => {
  const [state, dispatch] = useReducer(myReducer, initialState);

  console.log('render');
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  )
}

export default AppReducer;
