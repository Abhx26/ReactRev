import React, { useState } from 'react'

const Button = ({onClick,name}) => {
const [buttonclr,setbuttonclr]=useState("white")
    function handler()
    {
        onClick()
        setbuttonclr(name)
    }
  return (
    <button  onClick={handler} className='text-black'
    style={{backgroundColor:buttonclr}}>{name}</button>
  )
}

export default Button