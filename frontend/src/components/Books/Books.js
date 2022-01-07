import React, { useEffect, useState } from "react";
import CreateBook from "./CreateBook";
import EditBook from "./EditBook";
import ListBooks from "./ListBooks";
import Navbar from "../Navbar";

const Books = () => {
	const [books, setBooks] = useState([]);
	const [message, setMessage] = useState("");
	const [editBook, setEditBook] = useState([]);
	const [showAddBook, setShowAddBook] = useState(false);
	const [showEditBook, setShowEditBook] = useState(false);

	const getBooks = async () => {
		try {
			const res = await fetch("http://localhost:8000/books");
			const data = await res.json();
			setBooks(data.data);
		} catch (err) {
			setMessage(err);
		}
	};

	const getBookById = (id) => {
		const book = books.filter((book) => book.book_id === id);
		if (book.length > 0) {
			setEditBook(book[0]);
			setShowEditBook(true);
		}
	};
	const handleAddBook = (id) => {
		setShowAddBook(!showAddBook);
	};

	useEffect(() => {
		getBooks();
		getBookById();
	}, []);

	return (
		<>
			<Navbar />
			{message && <p>{message}</p>}
			<div className="px-8  pt-32">
				<h1 className="text-4xl font-bold mb-4">Books Page</h1>
				<button
					className="border border-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mt-8"
					onClick={handleAddBook}
				>
					Add Book
				</button>
			</div>
			{showAddBook && <CreateBook setShowAddBook={setShowAddBook} />}
			{showEditBook && (
				<EditBook book={editBook} setShowEditBook={setShowEditBook} />
			)}
			<ListBooks list={true} getBookById={getBookById} books={books} />
		</>
	);
};

export default Books;
