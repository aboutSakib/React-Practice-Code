import React from "react";

const sendDataOne = (props) => {

  props.onDataTwo({
    name:"yamin yann",
    title:"Data Two",

});
  const { title } = props;
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default sendDataOne;
