import Notes from "../../components/Notes/Notes.jsx";

export default function SingleBookPage() {
    const book =
    {
        id: 1,
        title: "History of Europe",
        cover: "https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-6-540x861.jpg",
        isRead: true,
        author: "Daniel Trejo",
        synopsis: "In this dazzling new history, bestselling author Simon Jenkins grippingly tells the story of its evolution from warring peoples to peace, wealth and freedom - a story that twists and turns from Greece and Rome, through the Dark Ages, the Reformation and the French Revolution, to the Second World War and up to the present day."
    };

    return (
        <>
            <div className="container">
                <button className="btn">
                    ← Back to Books
                </button>

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
                        <div className="erase-book">
                            Erase book
                        </div>
                    </div>
                </div>

                <Notes />

            </div>
        </>
    );
}
