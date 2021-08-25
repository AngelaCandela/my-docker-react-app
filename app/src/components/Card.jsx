import React, { useCallback } from 'react';
import { URL_APP_BASE } from '../CONST';
import PropTypes from 'prop-types';

const Card = ({ products, setProducts }) => {

  const handlerDeleted = useCallback((theProduct) => {
    try {
      console.log('Remove Product: ', theProduct)
      setProducts(products.filter(item => item.name !== theProduct.name))
    } catch (error) {
      console.error("Error: ", error)
    }
  }, [products])

  return (
    <div className="row">
      {products.map(theProduct => {
        return (
          <div key={theProduct.name} className="card mt-5 p-3 col-4">
            <img alt="" src="" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{theProduct.name}</h5>
              <p className="card-text">Precio: {theProduct.price}€</p>
              <a href={URL_APP_BASE + 'edit/' + theProduct.id} className="btn btn-primary ">Editar</a>
              <button onClick={() => handlerDeleted(theProduct)} className="btn btn-danger handlerDeleted ml-3" >Borrar</button>
            </div>
          </div>
        );
      })}
    </div>
  )
};

Card.PropTypes = {
  products: PropTypes.array.isRequired,
  setProducts: PropTypes.func.isRequired
}

export default Card;
