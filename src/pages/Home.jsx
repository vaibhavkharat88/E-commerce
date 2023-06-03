import React from 'react'
import Products from '../components/Products'
// home page of our shopify app
const Home = () => {
  return (
    <>
    <h2 className='text-center mt-5 heading'>Welcome To Shopify Store</h2>

    <section>
        <h3 className='heading-1'>products </h3>
        {/* showing our products here */}
        <Products/>
    </section>

    </>
  )

}

export default Home