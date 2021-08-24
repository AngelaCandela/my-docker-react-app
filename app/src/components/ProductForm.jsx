import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

// TODO: Destructuring MultiForm class

const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    const nameInput = document.getElementById("nameInput");
    const priceInput = document.getElementById("priceInput");
    setName(nameInput.value);
    setPrice(priceInput.value);
=======
>>>>>>> Destructuring MultiForm class
    addProduct(name, price);
    setName('');
    setPrice(null);
  };

<<<<<<< HEAD
  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };
  //
  // const handlePriceChange = (e) => {
  //   setPrice(e.target.value);
  // };
=======
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
>>>>>>> Destructuring MultiForm class

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
<<<<<<< HEAD
                // onChange={handleNameChange}
                // value={name}
=======
                onChange={handleNameChange}
                value={name}
>>>>>>> Destructuring MultiForm class
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
<<<<<<< HEAD
                // onChange={handlePriceChange}
                // value={price}
=======
                onChange={handlePriceChange}
                value={price}
>>>>>>> Destructuring MultiForm class
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
