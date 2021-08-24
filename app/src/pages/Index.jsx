import Header1 from '../components/atom/Header1'
import Container from "../components/layout/Container"
import Card from '../components/Card';

const Index = ({products, setProducts}) => {
    return (
        <Container className="my-5">
            <Header1
                title={`Listado de productos ${process.env.REACT_APP_NAME}`}/>

            {products && <Card products={products} setProducts={setProducts} />}
        </Container>
    )
};

export default Index;
