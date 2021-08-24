import React from 'react';

const Card = ({ products, setProducts }) => {

  const remove = (product) => {
    const filteredProducts = products.filter(item => item.name !== product.name);
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
              <a href={'edit/' + product.name} className="btn btn-primary ">Edit</a>
              <button onClick={() => remove(product)} className="btn btn-danger deleted ml-3">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  )
};

export default Card;
