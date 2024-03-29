import { useParams } from "react-router-dom";
import MultiForm from '../components/MultiForm';

const Edit = () => {

    const { productID } = useParams(); // Devuelve un objeto con los parametros recibidos por URL

    return (
        <div className="container my-5">
            <div className="row justify-content-md-center">
                <h1>Edit</h1>
            </div>
            <MultiForm id={productID} />
        </div>
    )
};

export default Edit;
