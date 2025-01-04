import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-col mx-5'>
      <div className='grid grid-cols-2 items-center h-screen'>
        <img width={'450px'} height={'200px'} src="https://img.freepik.com/premium-photo/yellow-background-with-space-text-shopping-cart-featured_908985-86049.jpg" alt="" />
        <div>
          <h3 className='font-bold'>PID: id</h3>
          <h1 className='text-5xl font-bold'>Product Name</h1>
          <h4 className='font-bold text-red-600 text-2xl'>$ 250</h4>
          <h4>Brand : brand</h4>
          <h4>Category : category</h4>
          <p>
            <span className='font-bold'>Description :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, enim. Odio tenetur minus, officiis ut eum minima amet doloribus quas voluptatum? Temporibus saepe dolor possimus perferendis error doloribus ratione magnam.
          
          <div className='flex justify-between mt-5'>
            <button className='bg-blue-600 text-white p-2'>Add to Wishlist</button>
            <button className='bg-green-600 text-white p-2'>Add to Cart</button>
          </div>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default View