import React, { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";

const ListBooks = ({ books, getBookById }) => {
	const [id, setId] = useState("");
	const [showModal, setShowModal] = useState(false);
	const handleDelete = (id) => {
		setShowModal(!showModal);
		setId(id);
	};

	return (
		<div className="mt-8 px-8">
			{books.length === 0 && (
				<div className="text-center py-4 text-red-600 font-bold">No Books</div>
			)}
			<table className="min-w-full">
				<thead>
					<tr>
						<th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Book ID
						</th>
						<th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Author
						</th>
						<th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Book Name
						</th>
						<th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Publisher
						</th>
						<th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							ISBN Number
						</th>
						<th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Actions
						</th>
					</tr>
				</thead>
				{books.map((book) => (
					<tbody key={book.book_id}>
						<tr className="h-20">
							<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
								{book.book_id}
							</td>
							<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
								{book.author}
							</td>
							<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
								{book.book_name}
							</td>
							<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
								{book.publisher}
							</td>
							<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
								{book.isbn_number}
							</td>
							<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
								<button
									className="border border-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mr-4"
									onClick={() => getBookById(book.book_id)}
								>
									Edit
								</button>
								<button
									className="border border-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded "
									onClick={() => handleDelete(book.book_id)}
								>
									Delete
								</button>
							</td>
						</tr>
					</tbody>
				))}
			</table>
			{showModal && <ConfirmDelete id={id} setShowModal={setShowModal} />}
		</div>
	);
};

export default ListBooks;
