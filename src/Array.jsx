import React, { useState } from "react";

const Array = () => {
  const [isVisible, setIsVisible] = useState(true);

  const togglePassword = () => {
    setIsVisible(prev => !prev)
  }

  return (
    <>
      <div>
        <input type={isVisible? "password" : "text"} />
        <button onClick={togglePassword}>{isVisible ? "Show" : "Hide"}</button>
      </div>
      ;
    </>
  );
};

export default Array;
