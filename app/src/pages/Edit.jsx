import { useParams } from "react-router-dom";
import ProductForm from '../components/ProductForm';

const Edit = () => {

    const { productName } = useParams(); // Devuelve un objeto con los parametros recibidos por URL

    return (
        <div className="container my-5">
            <div className="row justify-content-md-center">
                <h1>Edit</h1>
            </div>
            <ProductForm id={productName} />
        </div>
    )
};

export default Edit;
