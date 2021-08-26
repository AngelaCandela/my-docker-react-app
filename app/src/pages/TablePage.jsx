import Header1 from '../components/atom/Header1'
import Container from "../components/layout/Container"
import BooksTable from '../components/BooksTable';
import books from '../data/books.json';

const TablePage = () => (
  <Container className="my-5">
    <Header1 title="Table" />
    <BooksTable books={books} />
  </Container>
);

export default TablePage
