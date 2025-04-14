import React from 'react'
import { useContext } from 'react'
import ItemContext from '../context/Item'

const Item = (props) => {
    const cart=useContext(ItemContext);
    console.log(cart)
  return (
    <>
    <div>{props.name}</div>
    <div>{props.price}</div>
    <button onClick={()=>cart.setItem([...cart.item,{name:props.name,price:props.price}])}>Add to cart</button>
    </>
  )
}

export default Item