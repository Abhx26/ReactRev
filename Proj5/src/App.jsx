import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './components/Item'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Jee</h1>
      <Item name="Macbook" price={100000}> </Item>
      <Item name="Iphone" price={10000}> </Item>
      <Cart></Cart>
    </>
  )
}

export default App
