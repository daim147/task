import React from "react";
import axios from "axios";
const Todo = (data) => {
  const deletePost = async () => {
    await axios.delete(
      `https://60eedea7eb4c0a0017bf4685.mockapi.io/api/test/todo/${data.id}`
    );

    data.remove(data.id);
  };
  return (
    <div className="todo">
      <div className="info">
        <p>{data.task}</p>
      </div>
      <button onClick={deletePost}>Delete</button>
    </div>
  );
};

export default Todo;
