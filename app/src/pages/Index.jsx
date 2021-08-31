import Header1 from '../components/atom/Header1'
import Container from "../components/layout/Container"
import Card from '../components/Card';
import { ProductContext } from '../components/context/ProductContext';
import { useContext } from 'react';
import usePageBottom from '../components/lib/usePageBottom';

const Index = () => {

    const { memoizedProductValue, setProducts } = useContext(ProductContext);

    if (usePageBottom()) {
        fetch("/data/products.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setProducts(prev => [...prev, data]))
            // .then(data => setProducts(data))
            .catch(error => {
                console.error('There was an error:', error);
            });
    }

    return (
        <Container className="my-5">
            <Header1
                title={`Listado de productos ${process.env.REACT_APP_NAME}`} />
            <div className="row">
                {memoizedProductValue.map(theProduct => {
                    return <Card key={theProduct.name} theProduct={theProduct} />
                })}
            </div>
        </Container>
    )
};

export default Index;
