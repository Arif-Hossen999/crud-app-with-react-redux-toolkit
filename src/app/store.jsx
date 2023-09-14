import { configureStore } from "@reduxjs/toolkit";
import BooksSlice from "../features/books/BooksSlice";

// create store
const store = configureStore({
    reducer:{
        booksReducer: BooksSlice
    }
})

export default store