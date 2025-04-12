import React from 'react'
import './App.css'
import Button from './components/Button'
import { useState } from 'react';

function App() {
  
const [color,setcolor]=useState("black");
  return (
    <div className='w-full h-screen' style={{backgroundColor:color}} >
      <Button onClick={()=>setcolor("red")} name="red"></Button>
    </div>
  )
}

export default App
