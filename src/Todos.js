import React, { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./Todo";
const Todos = () => {
  const [todos, setTodos] = useState(null);
  const [input, setInput] = useState("");
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://60eedea7eb4c0a0017bf4685.mockapi.io/api/test/todo/"
      );
      setTodos(data);
    })();
  }, []);

  const addTodo = async (e) => {
    if (input.trim() === "") return;
    setDisable(true);

    e.preventDefault();
    const { data } = await axios.post(
      "https://60eedea7eb4c0a0017bf4685.mockapi.io/api/test/todo/",
      { task: input }
    );
    setInput("");
    setDisable(false);
    setTodos((todos) => [...todos, data]);
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="todos">
      <h2>You have {todos?.length} Todos</h2>

      {todos?.map((todo) => (
        <Todo key={`${todo?.id}${todo.task}`} {...todo} remove={removeTodo} />
      ))}
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button disabled={disable ? true : false} type="submit">
          Sumbit
        </button>
      </form>
    </div>
  );
};

export default Todos;
