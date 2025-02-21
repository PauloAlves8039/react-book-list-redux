import { BrowserRouter, Routes, Route } from "react-router-dom";
import BooksPage from "./views/Book/BooksPage.jsx";
import AddBookPage from "./views/Book/AddBookPage.jsx";
import SingleBookPage from "./views/Book/SingleBookPage.jsx";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="add-book" element={<AddBookPage />} />
          <Route path="book/:id" element={<SingleBookPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
