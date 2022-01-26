import React, { useState } from "react";

const Numbers = () => {
  const [value, setValue] = useState("");
  const [numbers, setNumbers] = useState([]);
  let numArr = [...numbers];

  const onChange = e => {
    setValue(e.target.value);
  };

  const onClick = e => {
    setNumbers(numArr.push(value));
  };
  const onKeyPress = e => {
    if (e.key === "Enter") {
      onClick();
    }
    console.log("hi");
  };

  return (
    <div>
      <div>
        <input onChange={onChange} onKeyPress={onKeyPress} value={value} />
      </div>
      <div>{numArr}</div>
    </div>
  );
};

export default Numbers;
