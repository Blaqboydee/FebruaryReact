import React from "react";

const Button = ({dothis, classname, text}) => {
  // console.log(props);

  return (
    <div>
      <button onClick={dothis} className={classname}>
        {text}
      </button>
    </div>
  );
};

export default Button;