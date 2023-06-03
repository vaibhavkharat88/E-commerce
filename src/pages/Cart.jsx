import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const dispatch=useDispatch()
  const cartproducts=useSelector((state)=>state.cart)
  const handleremove=(itemid)=>{
    dispatch(remove(itemid))
  }
  return (
    <>
    <h2 className='"row justify-content-center align-items-center'>Your Cart</h2>
    <div className="cartWrapper">
      {cartproducts.map((items)=>(
        <div className='cartCard'>
          <img src={items.image} alt="gaga" />
          <h4>{items.title}</h4>
          <h4>{items.price}$</h4>
          <button className='btn-1' onClick={()=>handleremove(items.id)}>Remove</button>
        </div>         
      ))}

    </div>
    </>
  )
}

export default Cart