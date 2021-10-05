import React from "react"
import ProductList from "../../layouts/ProductList"
import WithLayout from "../../layouts/WithLayout"

const Product = () => {
  const WrappedProduct = WithLayout(ProductList)

  return (<WrappedProduct/>)
}

export default Product;
