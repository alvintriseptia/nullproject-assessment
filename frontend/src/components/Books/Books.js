import React, { useState } from "react";
import CreateBook from "./CreateBook";
import EditBook from "./EditBook";
import ListBooks from "./ListBooks";
import Navbar from "../Navbar";

const Books = ({ books }) => {
	const [editBook, setEditBook] = useState([]);
	const [showAddBook, setShowAddBook] = useState(false);
	const [showEditBook, setShowEditBook] = useState(false);

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

	return (
		<>
			<Navbar />
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
			<ListBooks getBookById={getBookById} books={books} />
		</>
	);
};

export default Books;
