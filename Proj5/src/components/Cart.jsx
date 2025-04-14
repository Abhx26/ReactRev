import React from 'react'
import { useContext } from 'react'
import ItemContext from '../context/Item'
const Cart = () => {
    const items=useContext(ItemContext);
    const total = items.item.reduce((acc, curr) => acc + curr.price, 0);
  return (

    <>
    <div>Cart</div>
    {
        items.item.map(i=><li>
        {i.name}-{i.price}
        </li>)
    }
    <div>Total Price:{total}</div>
    </>
    

  )
}

export default Cart