import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const parameter = useParams()
    console.log(parameter);
    
  return (
    <div>Details of {parameter.caroline}</div>
  )
}

export default Details