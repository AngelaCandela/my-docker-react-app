import Header1 from '../components/atom/Header1'
import Container from "../components/layout/Container"
import ProductsList from '../components/ProductsList';

const Index = () => (
  <Container className="my-5">
    <Header1
        title={`Listado de productos ${process.env.REACT_APP_NAME}`}/>
    <ProductsList />
  </Container>
);

export default Index;
