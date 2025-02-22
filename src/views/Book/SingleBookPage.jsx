import { useParams, Link, useNavigate } from "react-router-dom";
import Notes from "../../components/Notes/Notes.jsx";
import { useSelector, useDispatch } from "react-redux";
import { eraseBook, selectBooks } from "../../store/booksSlice.js";

export default function SingleBookPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleEraseBook(id) {
        if(confirm("Are you sure you want to erase this book and all notes associated with it?")) {
            dispatch(eraseBook(id));
            navigate("/");
        }
    }
    
    const {id} = useParams();
    const books = useSelector(selectBooks);
    const book = books.filter(book => book.id == id)[0];

    return (
        <>
            <div className="container">
                <Link to="/">
                    <button className="btn">
                        ← Back to Books
                    </button>
                </Link>

                <div className="single-book">
                    <div className="book-cover">
                        <img src={book.cover} />
                    </div>

                    <div className="book-details">
                        <h3 className="book-title">{book.title}</h3>
                        <h4 className="book-author">{book.author}</h4>
                        <p>{book.synopsis}</p>
                        <div className="read-checkbox">
                            <input type="checkbox" defaultChecked={book.isRead} />
                            <label>{book.isRead ? "Already Read It" : "Haven't Read it yet"}</label>
                        </div>
                        <div onClick={() => handleEraseBook(book.id)} className="erase-book">
                            Erase book
                        </div>
                    </div>
                </div>

                <Notes />

            </div>
        </>
    );
}
