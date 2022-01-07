import React, { useState } from "react";

const CreateBook = (props) => {
	const [bookName, setBookName] = useState("");
	const [bookAuthor, setBookAuthor] = useState("");
	const [publisher, setPublisher] = useState("");
	const [isbn, setIsbn] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		const book = {
			book_name: bookName,
			author: bookAuthor,
			publisher: publisher,
			isbn_number: isbn,
		};
		try {
			await fetch("http://localhost:8000/books", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(book),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.message) {
						setMessage(data.message);
					}
				});
		} catch (error) {
			setMessage(error);
		}
	};

	return (
		<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/30">
			{message !== "" && <p>{message}</p>}
			<form
				onSubmit={handleSubmit}
				className="flex flex-col space-y-5 bg-gradient-to-r from-cyan-500 to-blue-500 p-10 rounded-xl shadow-lg"
			>
				<h2 className="text-center text-2xl font-bold">Create Book</h2>
				<div className="flex space-x-10 items-center">
					<label className="w-24">Book Name: </label>
					<input
						className="py-2 px-4 rounded-lg"
						type="text"
						onChange={(e) => setBookName(e.target.value)}
						value={bookName}
					/>
				</div>
				<div className="flex space-x-10 items-center">
					<label className="w-24">Book Author: </label>
					<input
						className="py-2 px-4 rounded-lg"
						type="text"
						onChange={(e) => setBookAuthor(e.target.value)}
						value={bookAuthor}
					/>
				</div>
				<div className="flex space-x-10 items-center">
					<label className="w-24">Publisher: </label>
					<input
						className="py-2 px-4 rounded-lg"
						type="text"
						onChange={(e) => setPublisher(e.target.value)}
						value={publisher}
					/>
				</div>
				<div className="flex space-x-10 items-center">
					<label className="w-24">ISBN: </label>
					<input
						className="py-2 px-4 rounded-lg"
						type="text"
						onChange={(e) => setIsbn(e.target.value)}
						value={isbn}
					/>
				</div>
				<div className="flex justify-center space-x-10 ">
					<button
						className="px-4 py-2 border border-white hover:border-red-600 text-gray-900 rounded cursor-pointer"
						onClick={() => props.setShowAddBook(false)}
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
	);
};

export default CreateBook;
