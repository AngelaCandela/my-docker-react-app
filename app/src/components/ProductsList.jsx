import React, { useContext } from "react";
import { ProductsContext } from "./context/context";
import Card from "./Card";

const ProductsList = () => {

  const { products } = useContext(ProductsContext);

  return (
    <div className="row">
      {products.map(product => {
        return <Card product={product}/>
      })}
    </div>
  )
};

export default ProductsList;
