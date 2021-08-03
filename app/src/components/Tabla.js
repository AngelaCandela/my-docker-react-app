function Tabla() {

    class Book {
        constructor(title, author, sales, price) {
            this.title = title;
            this.author = author;
            this.sales = sales;
            this.price = price;
        }
    }

    const book1 = new Book ("The Selfish Gene", "Richard Dawkins", 740120, 12);
    const book2 = new Book ("The God Delusion", "Richard Dawkins", 610120, 15);
    const book3 = new Book ("La nueva mente del emperador", "Roger Penrose", 120000, 7);
    const book4 = new Book ("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 910120, 16);
    const book5 = new Book ("The Great Gatsby", "F. Scott Fitzgerald", 740120, 22);
    const book6 = new Book ("On the Road", "Jack Kerouac", 610120, 14);
    const book7 = new Book ("The Catcher in the Rye", "JD Salinger", 120000, 19);
    const book8 = new Book ("1984", "George Orwell", 910120, 21);
    const book9 = new Book ("Cien años de soledad", "Gabriel García Márquez", 740120, 11);
    const book10 = new Book ("Pride and Prejudice", "Jane Austen", 610120, 10);

    const books = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10];

    return (
        <div className="container">
            <h1 className="card-title mx-4 mt-4">Table</h1>
            <table className="table table-striped table-hover mx-auto w-75">
                <thead className="thead-dark">
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Sales</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                { books.map((book, index) => {
                    return <tr key={index}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.sales}</td>
                        <td>{book.price}</td>
                    </tr>
                })
                }
                </tbody>
            </table>
        </div>

    )
}

export default Tabla;
