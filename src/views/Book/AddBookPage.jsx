import Header from "../../components/Header/Header.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBook } from "../../store/booksSlice.js";
import { toast } from "react-toastify";

export default function AddBookPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pageTitle = "Add Book";

    function handleAddBook(e) {
        e.preventDefault()

        const newBook = {
            title: document.querySelector("input[name=title]").value,
            cover: document.querySelector("input[name=cover]").value,
            isRead: false,
            author: document.querySelector("input[name=author]").value,
            synopsis: document.querySelector("textarea[name=synopsis]").value
        }

        if (newBook.title && newBook.cover && newBook.author) {
            dispatch(addBook(newBook)).then((response) => {
                if (response.error) {
                    toast.error("An error occurred!");
                } else {
                    toast.success("Book created successfully!");
                    navigate("/");
                }
            });
        }else {
            toast.warn("Please fill the mandatory fields.");
        }
    }

    return (
        <>
            <div className="container">
                <Header pageTitle={pageTitle} />

                <form className="add-form">
                    <div className="form-control">
                        <label>Title *</label>
                        <input type="text" name="title" placeholder="Add Book Title" />
                    </div>
                    <div className="form-control">
                        <label>Book Cover *</label>
                        <input type="text" name="cover" placeholder="Add Cover" />
                    </div>

                    <div className="form-control">
                        <label>Author *</label>
                        <input
                            type="text" name="author" placeholder="Add Author" />
                    </div>

                    <div className="form-control">
                        <label>Synopsis</label>
                        <textarea
                            type="text" name="synopsis" placeholder="Add a synopsis..." />
                    </div>

                    <button onClick={(e) => handleAddBook(e)} className="btn btn-block">Save Book</button>
                </form>

            </div>
        </>
    );
}
