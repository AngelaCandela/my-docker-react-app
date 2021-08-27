import React, { useCallback, useContext } from 'react';
import { URL_APP_BASE } from '../CONST';
import PropTypes from 'prop-types';
import { ProductContext } from '../components/context/ProductContext';

const Card = ({ theProduct }) => {

  const { memoizedProductValue, setProducts } = useContext(ProductContext);

  const handlerDeleted = useCallback((theProduct) => {
    try {
      console.log('Remove Product: ', theProduct)
      setProducts(memoizedProductValue.filter(item => item.name !== theProduct.name))
    } catch (error) {
      console.error("Error: ", error)
    }
  }, [memoizedProductValue, setProducts])

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
};

Card.propTypes = {
  theProduct: PropTypes.object.isRequired
}

export default Card;
