import React, { useState } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";
const dummyTodos = ["todo1", "todo2", "todo3"];
function Home() {
  const [todos,setTodos] = useState(dummyTodos);
  const handleNewTodo = (newtodo) => {
    setTodos([...todos,newtodo]);
  };

  return (
    <div>
      <NewTodo onTodo={handleNewTodo} />
      <Todos todos={todos} />
    </div>
  );
}

export default Home;
