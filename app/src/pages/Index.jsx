import Header1 from '../components/atom/Header1'
import Container from "../components/layout/Container"
import Card from '../components/Card';
import PropTypes from 'prop-types';
import { ProductContext } from '../components/context/ProductContext';
import { useContext } from 'react';

const Index = () => {

    const products = useContext(ProductContext);

    return (
        <Container className="my-5">
            <Header1
                title={`Listado de productos ${process.env.REACT_APP_NAME}`} />
            <div className="row">
                {products.map(theProduct => {
                    { <Card theProduct={theProduct} /> }
                })}
            </div>
        </Container>
    )
};

Index.propTypes = {
    products: PropTypes.array.isRequired,
    setProducts: PropTypes.func.isRequired
}

export default Index;
