import React from "react";

function Child(props) {
  // Receve data from child
  const receveData = props.data;
  console.log(receveData);
// Sendin data from App
  const dataFromChild = {
    name: "nasim",
    roll: 25555,
    year: 20021,
  };
  props.onChildData(dataFromChild);

  return <div></div>;
}

export default Child;
