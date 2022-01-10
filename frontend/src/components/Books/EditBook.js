import React, { useEffect, useState } from "react";
const EditBook = ({ book, setShowEditBook }) => {
	const [message, setMessage] = useState("");
	const [bookName, setBookName] = useState("");
	const [bookAuthor, setBookAuthor] = useState("");
	const [publisher, setPublisher] = useState("");
	const [isbn, setIsbn] = useState("");

	const id = book.book_id;
	const updateBook = async (e) => {
		const book = {
			book_name: bookName,
			author: bookAuthor,
			publisher: publisher,
			isbn_number: isbn,
		};
		try {
			const response = await fetch(`http://localhost:8000/books/${id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(book),
			});
			const data = await response.json();
			if (data.message) {
				if (data.message.includes("success")) {
					window.location.reload();
				}
				setMessage(data.message);
			}
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		setBookName(book.book_name);
		setBookAuthor(book.author);
		setPublisher(book.publisher);
		setIsbn(book.isbn_number);
	}, [book]);

	return (
		<>
			{book.book_id && (
				<div className="flex justify-center">
					<form
						onSubmit={updateBook}
						className="flex flex-col space-y-5 bg-gradient-to-br from-violet-300 to-pink-300 p-10 rounded-xl shadow-lg"
					>
						{message !== "" && (
							<p className="text-center font-bold">{message}</p>
						)}
						<h2 className="text-center text-2xl font-bold">Edit Book</h2>
						<div className="flex space-x-10 items-center">
							<label className="w-24">Book Name: </label>
							<input
								className="py-2 px-4 rounded-lg"
								type="text"
								onChange={(e) => setBookName(e.target.value)}
								defaultValue={bookName}
							/>
						</div>
						<div className="flex space-x-10 items-center">
							<label className="w-24">Book Author: </label>
							<input
								className="py-2 px-4 rounded-lg"
								type="text"
								onChange={(e) => setBookAuthor(e.target.value)}
								defaultValue={bookAuthor}
							/>
						</div>
						<div className="flex space-x-10 items-center">
							<label className="w-24">Publisher: </label>
							<input
								className="py-2 px-4 rounded-lg"
								type="text"
								onChange={(e) => setPublisher(e.target.value)}
								defaultValue={publisher}
							/>
						</div>
						<div className="flex space-x-10 items-center">
							<label className="w-24">ISBN: </label>
							<input
								className="py-2 px-4 rounded-lg"
								type="text"
								onChange={(e) => setIsbn(e.target.value)}
								defaultValue={isbn}
							/>
						</div>
						<div className="flex justify-center space-x-10 ">
							<button
								className="px-4 py-2 border border-white hover:border-red-600 text-gray-900 rounded cursor-pointer"
								onClick={() => setShowEditBook(false)}
							>
								Cancel
							</button>
							<button
								className="bg-yellow-500 hover:bg-yellow-600 hover:cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline self-center"
								type="submit"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			)}
		</>
	);
};

export default EditBook;
