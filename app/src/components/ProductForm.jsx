import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

// TODO: Destructuring MultiForm class

const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("nameInput");
    const priceInput = document.getElementById("priceInput");
    setName(nameInput.value);
    setPrice(priceInput.value);
    addProduct(name, price);
    setName('');
    setPrice(null);
  };

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };
  //
  // const handlePriceChange = (e) => {
  //   setPrice(e.target.value);
  // };

  return (
      <div className="row">
          <form onSubmit={handleSubmit}>
              <label>
                  Name
              </label>
              <input
                id="nameInput"
                className="col-12"
                name="name"
                type="text"
                // onChange={handleNameChange}
                // value={name}
              />
              <br />
              <label>
                Price
              </label>
              <input
                id="priceInput"
                className="col-12"
                name="price"
                type="number"
                // onChange={handlePriceChange}
                // value={price}
              />
              <Button
                type="submit"
                className="mt-3">
                Send
              </Button>
          </form>
      </div>
  );
};

export default ProductForm;
