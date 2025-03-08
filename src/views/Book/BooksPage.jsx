import Book from "../../components/Book/Book.jsx";
import Header from "../../components/Header/Header.jsx";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBooks, fecthBooks } from "../../store/booksSlice.js";
import { toast } from "react-toastify";
import "../../components/Book/book.css";

export default function BooksPage() {
    const dispatch = useDispatch();
    const books = useSelector(selectBooks).books;
    const pageTitle = "📖 Book List";
    const bookStatus = useSelector(selectBooks).status;

    useEffect(() => {
        if (bookStatus === "idle") {
            dispatch(fecthBooks());
        } else if (bookStatus === "failed") {
            toast.error("Error loading books. Please try again later.");
        }
    }, [bookStatus, dispatch]);
    
    return (
        <>
            <div className="container">
                <Header pageTitle={pageTitle} />
                <div className="books-container">
                    <div className="books-list">
                        {books.length > 0 ? (
                            books.map(book => <Book key={book.id} book={book} />)
                        ) : (
                            bookStatus === "loading" ? <p>Loading books...</p> : <p>No books found.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
