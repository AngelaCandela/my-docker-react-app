import React from "react";
import { ACTIONS } from "../pages/TodoList";

const Todo = ({ todo, dispatch }) => {
  return (
    <div id="todo">
      <li className={todo.complete ? 'complete' : 'todo'}>{todo.name}</li>
      <div>
        <button
          className="btn btn-success m-1"
          onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}>
            Toggle
        </button>
        <button
          className="btn btn-danger m-1"
          onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id }})}>
            Delete
        </button>
      </div>
    </div>
  )
};

export default Todo;
