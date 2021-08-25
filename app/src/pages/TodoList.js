import Header1 from '../components/atom/Header1';
import Container from "../components/layout/Container";
import React, {useState, useReducer} from "react";
import Todo from "../components/Todo";

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
};

const reducer = (todos, action) => {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if(todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);
    default:
      return todos;
  };
};

const newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false };
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  };

  return (
    <Container className="my-5">
      <Header1 title="To-dos List"/>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
      </form>
      {todos.map(todo =>
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      )}
    </Container>
  )
};

export default TodoList;
