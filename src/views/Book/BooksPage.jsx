import Book from "../../components/Book/Book.jsx";
import Header from "../../components/Header/Header.jsx";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBooks, fecthBooks } from "../../store/booksSlice.js";

export default function BooksPage() {
    const dispatch = useDispatch();
    const books = useSelector(selectBooks).books;
    const pageTitle = "📖 Book List";
    const bookStatus = useSelector(selectBooks).status;

    useEffect(() => {
        if (bookStatus == "idle") {
            dispatch(fecthBooks());
        }
    }, []);
    
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
