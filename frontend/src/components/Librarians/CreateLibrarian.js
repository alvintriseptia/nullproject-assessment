import React, { useState } from "react";

const CreateStudent = (props) => {
	const [message, setMessage] = useState("");
	const [employeeId, setEmployeeId] = useState("");
	const [employeeName, setEmployeeName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [status, setStatus] = useState("Active");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const book = {
			employee_id: employeeId,
			employee_name: employeeName,
			email: email,
			password: password,
			status: status,
		};
		try {
			await fetch("http://localhost:8000/librarians", {
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
			<form
				onSubmit={handleSubmit}
				className="flex flex-col space-y-5 bg-gradient-to-r from-cyan-500 to-blue-500 p-10 rounded-xl shadow-lg"
			>
				<h2 className="text-center text-2xl font-bold">Add Librarian</h2>
				<div className="flex space-x-10 items-center">
					<label className="w-32">Employee ID: </label>
					<input
						className="py-2 px-4 rounded-lg"
						minLength={10}
						maxLength={10}
						type="text"
						onChange={(e) => setEmployeeId(e.target.value)}
						value={employeeId}
					/>
				</div>
				<div className="flex space-x-10 items-center">
					<label className="w-32">Employee Name: </label>
					<input
						className="py-2 px-4 rounded-lg"
						type="text"
						onChange={(e) => setEmployeeName(e.target.value)}
						value={employeeName}
					/>
				</div>
				<div className="flex space-x-10 items-center">
					<label className="w-32">Email: </label>
					<input
						className="py-2 px-4 rounded-lg"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type="email"
					/>
				</div>
				<div className="flex space-x-10 items-center">
					<label className="w-32">Password: </label>
					<input
						className="py-2 px-4 rounded-lg"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						type="password"
					/>
				</div>
				<div className="flex space-x-10 items-center">
					<label className="w-32">Status: </label>
					<select
						className="py-2 px-4 rounded-lg"
						onChange={(e) => setStatus(e.target.value)}
					>
						<option value="Active">Active</option>
						<option value="Inactive">Inactive</option>
					</select>
				</div>
				<div className="flex justify-center space-x-10 ">
					<button
						className="px-4 py-2 border border-white hover:border-red-600 text-gray-900 rounded cursor-pointer"
						onClick={() => props.setShowAddLibrarian(false)}
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

export default CreateStudent;
