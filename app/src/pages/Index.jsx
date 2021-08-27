import Header1 from '../components/atom/Header1'
import Container from "../components/layout/Container"
import Card from '../components/Card';
import PropTypes from 'prop-types';


const Index = () => {
    return (
        <Container className="my-5">
            <Header1
                title={`Listado de productos ${process.env.REACT_APP_NAME}`}/>
            {/* TODO: hacer el map de product aqui */}
            {/* Por cada iteracion llamar a card */}
            { <Card />}
        </Container>
    )
};

Index.propTypes = {
    products: PropTypes.array.isRequired,
    setProducts: PropTypes.func.isRequired
}

export default Index;
