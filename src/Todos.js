import React, { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./Todo";
const Todos = () => {
  const [todos, setTodos] = useState(null);
  const [input, setInput] = useState("");
  const [_, setReferesh] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://60eedea7eb4c0a0017bf4685.mockapi.io/api/test/todo/"
      );
      setTodos(data);
      console.log(data);
    })();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    const addedTodo = await axios.post(
      "https://60eedea7eb4c0a0017bf4685.mockapi.io/api/test/todo/",
      {},
      {
        body: JSON.stringify({
          task: input,
        }),
      }
    );
    setTodos((todos) => [...todos, addTodo]);
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="todos">
      <h2>You have {todos?.length} Todos</h2>

      {todos?.map((todo) => (
        <Todo key={`${todo.id}${todo.task}`} {...todo} remove={removeTodo} />
      ))}
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
};

export default Todos;
