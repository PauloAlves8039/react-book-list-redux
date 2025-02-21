import Header from "../../components/Header/Header.jsx";
import { useNavigate } from "react-router-dom";

export default function AddBookPage() {
    const navigate = useNavigate();

    function handleAddBook(e) {
        e.preventDefault;
        alert("Book created successfully!");
        navigate("/");
    }

    const pageTitle = "Add Book";

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
                        <label>Synopsis *</label>
                        <textarea
                            type="text" name="synopsis" placeholder="Add a synopsis..." />
                    </div>

                    <button onClick={(e) => handleAddBook(e)} className="btn btn-block">Save Book</button>
                </form>

            </div>
        </>
    );
}
