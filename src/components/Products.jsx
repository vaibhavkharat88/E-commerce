import React, { useEffect } from 'react'
import { add } from '../store/cartSlice'
import { useDispatch, useSelector} from 'react-redux'
import { fetchProducts } from '../store/productSlice'
import { STATUSES } from '../store/productSlice'
const Products = () => {
   const dispatch=useDispatch()
   const {data:product,status}=useSelector((state)=>state.product)
    // const[products,setProducts]=useState([
        
    // ])
    // fetching api with the help of async operation
    useEffect(()=>{
        dispatch(fetchProducts())
    //   async function vk(){
    //     let data=await fetch('https://fakestoreapi.com/products')
    //     data=await data.json()
    //     console.log(data)
    //     setProducts(data)
    //   }
    //   vk()
    },[])
    // code for add to cart
    const handeladd=(product)=>{
      dispatch(add(product))
    }

    if(status===STATUSES.LOADING){
        return <h2 className='heading-2'>Loading</h2>
    }
    if(status===STATUSES.ERROR){
        return <h2>Something went wrong</h2>
    }
  return (
    <>
    <div className="productsWrapper">
      {/* printing api data in jsx */}
      {product.map((product)=>(
        <div className="card" key={product.id}>
          <img src={product.image} alt="gaga" />
          <h4>{product.title}</h4>
          <h4>{product.price}$</h4>
          <button onClick={()=>handeladd(product)} className='btn-1'>Add to Cart</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default Products
