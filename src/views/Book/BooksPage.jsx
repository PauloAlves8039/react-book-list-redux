import Book from "../../components/Book/Book.jsx";
import Header from "../../components/Header/Header.jsx";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "../../store/usersSlice.js";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config.js";

export default function BooksPage() {
    const uid = useSelector(selectUsers).currentUser.id;
    const [books, setBooks] = useState([]);
    const pageTitle = "📖 Book List";

    useEffect(() => {
        const fetchBooks = async () => {
            const search = query(collection(db, "books"), where("user_id", "==", uid));
            const querySnapshot = await getDocs(search);
            let bookList = [];
            querySnapshot.forEach((doc) => {
                bookList.push({id: doc.id, ...doc.data()});
            });
            setBooks(bookList);
            console.log(bookList);
        }

        fetchBooks();

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
