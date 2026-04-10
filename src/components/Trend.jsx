import React, { useEffect, useState } from "react";

const Trend = () => {
  const [count, setCount] = useState(0);
  const [color, setBackgroundColor] = useState("")

  const [colorsArray, setColorsArray] = useState(["blue", "red", "orange", "green"])

  useEffect(() =>{
    console.log("count icreased", count);

  }, [count]);

  useEffect(()=>{
    colorsArray.map((color)=>{
   
   console.log(color);

  const colorIndex = Math.round((Math.random() * 3))

    console.log(colorIndex);

    const newColor = colorsArray[colorIndex]

    console.log(newColor);

    setBackgroundColor(newColor)
      
    })
  }, [])


  const chooseColor = () => {
    const colorIndex = Math.round((Math.random() * 3))

    console.log(colorIndex);

    const newColor = colorsArray[colorIndex]

    console.log(newColor);

    setBackgroundColor(newColor)
    
    
  }


  const boxStyle = {
    "height": "100px",
    "width": "100px",
    "backgroundColor": color
  }


  return(
     <div>
    <button onClick={()=>{setCount(count + 1)}}>Change count</button>
    <div style={boxStyle} onClick={chooseColor}></div>

  </div>
  )
  
 
};

export default Trend;
