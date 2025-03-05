import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { 
  collection, 
  query, 
  where, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc } 
from "firebase/firestore";
import { db, auth } from "../firebase/config.js";

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: "idle"
  },
  reducers: {
    addBook: (books, action) => {
      let newBook = action.payload;
      newBook.id = books.length ? Math.max(...books.map(book => book.id)) + 1 : 1;
      books.push(newBook);
    },
    eraseBook: (books, action) => {
        return books.filter(book => book.id != action.payload);
    },
    // toggleRead: (books, action) => {
    //     books.map(book => {
    //       if (book.id == action.payload) {
    //         book.isRead = !book.isRead;
    //       }
    //     });
    // }
  },
  extraReducers(builder) {
    builder.addCase(fecthBooks.pending, (state, action) => {
      state.status = "loading";
    })
    .addCase(fecthBooks.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.books = action.payload;
    })
    .addCase(fecthBooks.rejected, (state, action) => {
      state.status = "failed";
      console.log(action.error.message);
    })
    .addCase(toggleRead.fulfilled, (state, action) => {
      state.books.map(book => {
        if (book.id == action.payload) {
          book.isRead = !book.isRead;
        }
      });
    })
    .addCase(toggleRead.rejected, (state, action) => {
      state.status = "failed";
      console.log(action.error.message);
    })
    .addCase(eraseBook.fulfilled, (state, action) => {
      console.log("fulfilled", action.payload);
      state.books = state.books.filter(book => book.id != action.payload);
    })
    .addCase(eraseBook.rejected, (state, action) => {
      state.status = "failed";
      console.log(action.error.message);
    })
  }
});

export const { addBook } = booksSlice.actions;

export const selectBooks = state => state.books;

export default booksSlice.reducer;

export const fecthBooks = createAsyncThunk("books/fetchBooks", async () => {
  const search = query(collection(db, "books"), where("user_id", "==", auth.currentUser.uid));
  const querySnapshot = await getDocs(search);
  let bookList = [];
  querySnapshot.forEach((doc) => {
    bookList.push({ id: doc.id, ...doc.data() });
  });
  return bookList;
});

export const toggleRead = createAsyncThunk("books/toggleRead", async (payload) => {
  const bookRef = doc(db, "books", payload.id);
  await updateDoc(bookRef, {
    isRead: !payload.isRead
  });
  return payload.id;
});

export const eraseBook = createAsyncThunk("books/eraseBook", async (payload) => {
  await deleteDoc(doc(db, "books", payload));
  return payload;
});