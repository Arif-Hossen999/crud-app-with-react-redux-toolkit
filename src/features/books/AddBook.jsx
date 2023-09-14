import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./BooksSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const AddBook = () => {
  // create state
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()

const handleSubmit = (e) => {
  e.preventDefault()
  const book = {id: uuidv4() ,title, author}
  dispatch(addBook(book))
  navigate("/show-books", {replace: true})
}

  return (
    <div>
      <h2>Add Book</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title :</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author :</label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            required
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
