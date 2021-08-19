import Header1 from '../components/atom/Header1'
import Container from "../components/layout/Container"
import Table from '../components/Table';
// TODO: migrate books to real json
import { books } from '../data/books';

const TablePage = () => (
    <Container className="my-5">
      <Header1 title="Table"/>
      <Table books={books}/>
    </Container>
);

export default TablePage;
