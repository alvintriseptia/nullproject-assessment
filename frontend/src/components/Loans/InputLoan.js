import React, { useState } from "react";

const InputLoan = ({ dataBook, dataStudent }) => {
	const [rentDate, setRentDate] = useState(null);
	const [returnDate, setReturnDate] = useState(null);
	const [charges, setCharges] = useState(0);
	const { book_id, book_name } = dataBook;
	const { student_id, student_name } = dataStudent;
	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const loan = {
			book_id: book_id,
			student_id: student_id,
			rent_date: rentDate,
			return_date: returnDate,
			charges: charges,
		};
		try {
			const response = await fetch("http://localhost:8000/loans", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(loan),
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

	return (
		<div className="flex justify-center">
			<form
				onSubmit={handleSubmit}
				className="flex
				flex-col
				space-y-5
				bg-gradient-to-r
				from-cyan-500
				to-blue-500
				p-10
				rounded-xl
				shadow-lg"
			>
				{message !== "" && <p className="text-center font-bold">{message}</p>}
				<div className="flex space-x-10 items-center">
					<label className="w-28">Student ID: </label>
					<input
						className="py-2 px-4 rounded-lg"
						type="text"
						value={student_id}
						disabled
					/>
				</div>
				<div className="flex space-x-10 items-center">
					<label className="w-28">Student Name: </label>
					<input
						className="py-2 px-4 rounded-lg"
						type="text"
						value={student_name}
						disabled
					/>
				</div>
				<div className="flex space-x-10 items-center">
					<label className="w-28">Book ID: </label>
					<input
						className="py-2 px-4 rounded-lg"
						type="text"
						value={book_id}
						disabled
					/>
				</div>
				<div className="flex space-x-10 items-center">
					<label className="w-28">Book Name: </label>
					<input
						className="py-2 px-4 rounded-lg"
						type="text"
						value={book_name}
						disabled
					/>
				</div>
				<div className="flex space-x-10 items-center">
					<label className="w-28">Rent Date: </label>
					<input
						className="py-2 px-4 rounded-lg"
						type="date"
						onChange={(e) => setRentDate(e.target.value)}
						value={rentDate}
					/>
				</div>
				<div className="flex space-x-10 items-center">
					<label className="w-28">Return Date: </label>
					<input
						className="py-2 px-4 rounded-lg"
						type="date"
						onChange={(e) => setReturnDate(e.target.value)}
						value={returnDate}
					/>
				</div>
				<div className="flex space-x-10 items-center">
					<label className="w-28">Charges: </label>
					<input
						className="py-2 px-4 rounded-lg"
						type="number"
						min={0}
						onChange={(e) => setCharges(e.target.value)}
						value={charges}
					/>
				</div>
				<button
					className="bg-yellow-500 hover:bg-yellow-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default InputLoan;
