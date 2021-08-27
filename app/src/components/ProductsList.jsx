import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ProductsContext } from "./context/context";

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
        return (
          <div key={product.name} className="card mt-5 p-3 col-4">
            <img alt="" src="" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Name: {product.name}</h5>
              <p className="card-text">Price: {product.price}€</p>
              <p className="card-text">Id: {product.id}</p>
              <button onClick={() => history.push('edit/' + product.id)} className="btn btn-primary ">Edit</button>
              <button onClick={() => remove(product)} className="btn btn-danger deleted ml-3">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  )
};

export default ProductsList;
