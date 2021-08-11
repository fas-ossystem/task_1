import React from 'react';
import './Task_1_8.css';

const Cells = (props) => {
  const letter = ["A", "B", "C", "D", "E", "F", "G", "H"];
  let coordX = letter[props.col];
  let coordY = props.row+1;

  return <div class={props.color} onClick={() => 
            alert (`${coordX}:${coordY}`)}></div>
};

export default Cells;



