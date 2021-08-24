import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';


const ProductForm = ({ setProducts }) => {

    const inputNameRef = useRef();
    const inputPriceRef = useRef();

    /* TODO: falta añadir el useEffect Si viene un ID como prop */

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct();
    }

    const addProduct = () => {
        const newProduct = {
            name: inputNameRef.current.value,
            price: inputPriceRef.current.value
        };

        setProducts(prev => [newProduct, ...prev]);

        // alert("Se ha guardado con exito");
    }

    return (
        <div className="row">
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre
                </label>
                <input
                    className="col-12"
                    name="name"
                    type="text"
                    ref={inputNameRef}
                />
                <br />
                <label>
                    Precio
                </label>
                <input
                    className="col-12"
                    name="price"
                    type="number"
                    ref={inputPriceRef}
                />
                <input
                    type="submit"
                    className="mt-3"
                    value="Enviar"/>
            </form>
        </div>
    );
}

ProductForm.propTypes = {
    setProducts: PropTypes.func.isRequired
};

export default ProductForm;
