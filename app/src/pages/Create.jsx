import Header1 from "../components/atom/Header1"
import MultiForm from '../components/MultiForm';

const Create = () => (
    <div className="container my-5">
        <div className="row justify-content-md-center">
            <Header1 title="Create"/>
        </div>
        <MultiForm />
    </div>
);

export default Create;
