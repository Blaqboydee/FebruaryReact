import React from 'react'

const Product = (props) => {
  console.log(props);
  
    
  return (
    <div>
    
      <h2>{props.name}</h2>
      <img src={props.img} alt="" />
      <p>{props.desc}</p>
      <p>{props.price}</p>
    </div>
  )
}

export default Product