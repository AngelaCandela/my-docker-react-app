import Table from '../components/Table';
import { books } from '../data/books';

const TablePage = () => (
    <div className="App">
      <Table books={books}/>
    </div>
);

export default TablePage;
