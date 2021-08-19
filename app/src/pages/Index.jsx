import { useState, useEffect } from 'react';
import Header1 from '../components/atom/Header1'
import Card from '../components/Card';
import { URL_API_BASE } from '../CONST';

const Index = () => {
    const [products, setProducts] = useState(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch(URL_API_BASE + 'products?page=1')
            .then(response => response.json())
            .then(data => setProducts(data['hydra:member']))
            .catch(error => {
                 setHasError(true)
                 console.error('There was an error:', error);
             });
    }, []);

    return (
        <div className="container my-5">
            <Header1
                title={`Listado de productos ${process.env.REACT_APP_NAME}`}/>

            {hasError && <p>I'm sorry, something went wrong loading the products!</p>}

            {products && <Card products={products} setProducts={setProducts} />}
        </div>
    )
};

export default Index;
