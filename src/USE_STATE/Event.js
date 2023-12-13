import React from "react";

function Event() {
    const handleParentClick=(event)=>{
    console.log("hey bro",event);
    }
  const handleClick = (event) => {
    //using stopPropagation
    event.stopPropagation();
    console.log("hey sakib ", event);
  };
 
  return (
    <div className="parent" onClick={handleParentClick}>
      <h1>Welcome to everyone</h1>
      <button onClick={handleClick}>click Me</button>
    </div>
  );
}

export default Event;
