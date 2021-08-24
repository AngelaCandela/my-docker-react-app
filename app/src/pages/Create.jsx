import Header1 from "../components/atom/Header1"
import Container from "../components/layout/Container"
import ProductForm from '../components/ProductForm';

const Create = ({ products, addProduct }) => (
    <Container className="my-5">
        <div className="row justify-content-md-center">
            <Header1 title="Create"/>
        </div>
        <ProductForm products={products} addProduct={addProduct} />
    </Container>
);

export default Create;
