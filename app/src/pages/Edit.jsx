import { useParams } from "react-router-dom";
import ProductForm from '../components/ProductForm';

const Edit = ({ products, setProducts }) => {

    const { productId } = useParams(); // Devuelve un objeto con los parametros recibidos por URL

    return (
        <div className="container my-5">
            <div className="row justify-content-md-center">
                <h1>Edit</h1>
            </div>
            <ProductForm products={products} setProducts={setProducts} id={productId} />
        </div>
    )
};

export default Edit;
