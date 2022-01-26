import React from "react";
import Header from "./components/Header";
import Numbers from "./components/Numbers";
import "./App.scss"

const App = () => {
  return (
    <div className='app'>
      <Header></Header>
      <Numbers></Numbers>
    </div>
  );
};

export default App;
