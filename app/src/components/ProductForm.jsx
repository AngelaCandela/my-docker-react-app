import React, { useEffect, useContext, useRef, useState } from 'react';
import { ProductsContext } from './context/context';

const ProductForm = ({ id }) => {

  const { products, setProducts, addProduct } = useContext(ProductsContext);

  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const nameInput = useRef();
  const priceInput = useRef();

  useEffect(() => {
    if(id !== undefined) {
      try {
        const product = products.find(product => product.id.toString() === id);
        nameInput.current.value = product.name;
        priceInput.current.value = product.price;
      } catch (error) {
          console.error(error);
      };
    }
  }, [id, products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameInput.current.value;
    const price = priceInput.current.value;
    if(id !== undefined) {
      editProduct(name, price);
    } else {
      createProduct(name, price);
    }
  };

  const editProduct = (name, price) => {
    const newProductsArray = products.map(product => {
      if(product.id.toString() === id) {
        return {
          ...product,
          name: name,
          price: price
        }
      } else {
        return product;
      }
    });
    setProducts(newProductsArray);
    alert('The product has been edited successfully!');
  };

  const createProduct = (name, price) => {
    const id = generateRandomId();
    if (addProduct(id, name, price)) {
      alert('The product has been created successfully!');
      clearInputs();
    };
  };

  const generateRandomId = () => {
    const newId = Math.floor(Math.random() * 1000);
    products.forEach(product => {
      if(product.id === newId) {
        generateRandomId();
      }
    });
    return newId;
  };

  const clearInputs = () => {
    nameInput.current.value = '';
    priceInput.current.value = '';
  };

  return (
      <div className="row">
          <form onSubmit={handleSubmit}>
              <label>
                  Name
              </label>
              <input
                className="col-12"
                name="name"
                type="text"
                ref={nameInput}
              />
              <br />
              <label>
                Price
              </label>
              <input
                className="col-12"
                name="price"
                type="number"
                ref={priceInput}
              />
              <input
                type="submit"
                className="mt-3"
                value={id ? "Edit product" : "Create product"}/>
          </form>
      </div>
  );
};

export default ProductForm;
