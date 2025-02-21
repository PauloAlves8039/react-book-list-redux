import Book from "../../components/Book/Book.jsx";
import Header from "../../components/Header/Header.jsx";
import { useSelector } from "react-redux";
import { selectBooks } from "../../store/booksSlice.js";

export default function BooksPage() {
    const books = useSelector(selectBooks);

    const pageTitle = "📖 Book List";

    return (
        <>
            <div className="container">
                <Header pageTitle={pageTitle} />
                <div className="books-container">
                    <div className="books-list">
                        {books.map(book =>
                            <Book key={book.id} book={book} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
