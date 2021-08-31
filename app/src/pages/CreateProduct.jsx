import Header1 from "../components/atom/Header1"
import Container from "../components/layout/Container"
import ProductForm from "../components/ProductForm";

const CreateProduct = () => (
    <Container className="my-5">
        <div className="row justify-content-md-center">
            <Header1 title="Create" />
        </div>
        <ProductForm />
    </Container>
);

export default CreateProduct;
