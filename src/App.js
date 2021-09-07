import React from "react";
import Clock from "./Clock";
import Todos from "./Todos";

const App = () => {
  return (
    <div className="app">
      <Clock />
      <Todos />
    </div>
  );
};

export default App;
