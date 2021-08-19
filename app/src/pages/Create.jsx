import Header1 from "../components/atom/Header1"
import Container from "../components/layout/Container"
import MultiForm from '../components/MultiForm';

const Create = () => (
    <Container className="my-5">
        <div className="row justify-content-md-center">
            <Header1 title="Create"/>
        </div>
        <MultiForm />
    </Container>
);

export default Create;
