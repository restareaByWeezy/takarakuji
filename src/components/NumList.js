import React from "react";
import '../styles/NumList.scss'

const NumList = (props) => {
  return (
    <div className='numList'>
      <span>{props.front}組{props.back}</span>
      <span>{props.rank}</span>
    </div>            
  );
};

export default NumList;
