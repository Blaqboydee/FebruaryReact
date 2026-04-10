import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const ProductContext = createContext()


export function ProductProvider({children}) {

   const [products, setProducts] = useState([])

    useEffect(()=>{
    axios.get("https://dummyjson.com/products")
    .then(data => {
      console.log(data)
      setProducts(data.data.products)
    })
  },[])



  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  )
}

