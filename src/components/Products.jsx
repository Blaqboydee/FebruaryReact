import React, {useContext} from 'react'
import { FaSpinner } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';


const Products = () => {

const {products} = useContext(ProductContext)

console.log(products);


  return (
    <div>
      <h1>Products</h1>
      {
        products.length == 0? "Loading" :
      
      products.map((product)=>
      <div>
        <h2>{product.title}</h2>
       <img style={{"width": "200px"}} src={product.images[0]} alt="" />
       <p>{product.category}</p>
       <Link to={`/dashboard/productdetails/${product.id}`}>See More</Link>
      </div>
      )}
    </div>
  )
}

export default Products