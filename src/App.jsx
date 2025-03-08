import { BrowserRouter, Routes, Route } from "react-router-dom";
import { selectUsers } from "./store/usersSlice.js";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import BooksPage from "./views/Book/BooksPage.jsx";
import AddBookPage from "./views/Book/AddBookPage.jsx";
import SingleBookPage from "./views/Book/SingleBookPage.jsx";
import LoginPage from "./views/Login/LoginPage.jsx";

export default function App() {
  const user = useSelector(selectUsers);

  return (
    <>
      <ToastContainer autoClose={3000} />
      {
      user.currentUser ? 
      <BrowserRouter>
        <Routes>
          <Route index element={<BooksPage />} /> 
          <Route path="add-book" element={<AddBookPage />} />
          <Route path="book/:id" element={<SingleBookPage />} />
        </Routes>
      </BrowserRouter> 
      : 
      <LoginPage /> 
      }
    </>
  );
}
