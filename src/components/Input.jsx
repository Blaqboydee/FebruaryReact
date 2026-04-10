import React from 'react'

const Input = ({onchange, type, placeholder, name}) => {

     
  return (
    <div>
        <input name={name} onChange={onchange} type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input