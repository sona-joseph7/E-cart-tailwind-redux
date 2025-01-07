import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const View = () => {

  const [product, setProduct] = useState({})

  const {id} = useParams()
  console.log(id);

  useEffect(()=>{
    if(sessionStorage.getItem("allproducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allproducts"))
    
    // console.log(allProducts.find(item=>item.id==id));
    setProduct(allProducts.find(item=>item.id==id))
    }
  },[])


  

  return (
    <>
    <Header/>
    <div className='flex flex-col mx-5'>
      <div className='grid grid-cols-2 items-center h-screen'>
        <div>
          <img width={'450px'} height={'200px'} src={product?.thumbnail} alt="" />
          <div className='flex justify-between mt-5'>
              <button className='bg-blue-600 text-white p-2'>Add to Wishlist</button>
              <button className='bg-green-600 text-white p-2'>Add to Cart</button>
            </div>
          </div>
        <div>
          <h3 className='font-bold'>PID: {product?.id}</h3>
          <h1 className='text-5xl font-bold'>{product?.title}</h1>
          <h4 className='font-bold text-red-600 text-2xl'>$ {product?.price}</h4>
          <h4>Brand : {product?.brand}</h4>
          <h4>Category : {product?.category}</h4>
          <p>
            <span className='font-bold'>Description :</span>{product?.description}
          

          </p>
          <h3 className='font-bold'>Client Reviews</h3>
          {
            product?.reviews?.length>0?
            product?.reviews?.map(item=>(
              <div key={item?.date} className='shadow-border p-2 mb-2'>
                <h5>
                  <span className='font-bold'>{item?.reviewerName}</span>: <span>{item?.comment}</span>
                </h5>
                <p>Rating: {item?.rating} <i className='fa-solid fa-star text-yellow-400'></i></p>
              </div>
            ))
            :
            <div>No Reviews Yet!!!</div>
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default View