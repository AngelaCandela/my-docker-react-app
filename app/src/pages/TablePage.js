import Table from '../components/Table';
// TODO: migrate books to real json
import { books } from '../data/books';

const TablePage = () => (
    <div className="App">
      <Table books={books}/>
    </div>
);

export default TablePage;
