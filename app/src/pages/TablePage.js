import Table from '../components/Table';
import { books } from '../data/books';

function TablePage() {

  return (
    <div className="App">
      <Table books={books}/>
    </div>
  );
}

export default TablePage;
