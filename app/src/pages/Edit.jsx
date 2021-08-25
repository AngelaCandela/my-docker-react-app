import { useParams } from "react-router-dom";
import Header1 from "../components/atom/Header1";
import Container from "../components/layout/Container";
import ProductForm from '../components/ProductForm';

const Edit = ({ products, setProducts }) => {

    const { productId } = useParams(); // Devuelve un objeto con los parametros recibidos por URL

    return (
        <Container className="my-5">
            <div className="row justify-content-md-center">
                <Header1 title="Edit"/>
            </div>
            <ProductForm products={products} setProducts={setProducts} id={productId} />
        </Container>
    )
};

export default Edit;
