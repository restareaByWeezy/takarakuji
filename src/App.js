import React from "react";
import Header from "./components/Header";
import Numbers from "./components/Numbers";
import "./App.scss";

const App = () => {
  const backWinningNumber = "153722";

  const winningObject = {
    front: ["103"],
    back: {
      first: [backWinningNumber],
      nearFirst: [
        `${Number(backWinningNumber) + 1}`,
        `${Number(backWinningNumber) - 1}`,
      ],
      second: ["183170", "158583", "126274"],
      extra: ["4643", "0478", "2716", "3507"],
      third: ["600", "257", "449"],
      forth: ["30"],
      fifth: ["4"],
    },
  };

  return (
    <div className='app'>
      <Header winningObject={winningObject}></Header>
      <Numbers winningObject={winningObject}></Numbers>
    </div>
  );
};

export default App;
