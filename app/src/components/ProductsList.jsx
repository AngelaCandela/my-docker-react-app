import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ProductsContext } from "./context/context";
import Card from "./Card";

const ProductsList = () => {

  let history = useHistory();
  const { products, setProducts } = useContext(ProductsContext);

  const remove = (product) => {
    const filteredProducts = products.filter(item => item.id !== product.id);
    setProducts(filteredProducts);
  };

  return (
    <div className="row">
      {products.map(product => {
        return <Card product={product}/>
      })}
    </div>
  )
};

export default ProductsList;
