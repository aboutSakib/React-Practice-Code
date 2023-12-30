import React, { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState("");
  const handleInput = (Event) => {
    setTodo(Event.target.value);
  };
  const handleSubmit = (Event) => {
    Event.preventDefault();
    props.onTodo(todo)
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">New Todo:</label>
      <input
        type="text"
        id="todo"
        name="todo"
        value={todo}
        onChange={handleInput}
      />
      <button>Add Todos</button>
    </form>
  );
};

export default NewTodo;
