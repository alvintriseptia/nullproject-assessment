import React, { useState } from "react";

const CreateStudent = (props) => {
	const [message, setMessage] = useState("");
	const [studentId, setStudentId] = useState("");
	const [studentName, setStudentName] = useState("");
	const [status, setStatus] = useState("Active");

	console.log(status);

	const handleSubmit = async (e) => {
		const book = {
			student_id: studentId,
			student_name: studentName,
			status: status,
		};
		try {
			await fetch("http://localhost:8000/students", {
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
				{message !== "" && <p className="text-center font-bold">{message}</p>}
				<h2 className="text-center text-2xl font-bold">Add Student</h2>
				<div className="flex space-x-10">
					<label className="w-28">Student ID: </label>
					<input
						minLength={10}
						maxLength={10}
						type="text"
						onChange={(e) => setStudentId(e.target.value)}
						value={studentId}
					/>
				</div>
				<div className="flex space-x-10">
					<label className="w-28">Student Name: </label>
					<input
						type="text"
						onChange={(e) => setStudentName(e.target.value)}
						value={studentName}
					/>
				</div>
				<div className="flex space-x-10">
					<label className="w-28">Status: </label>
					<select onChange={(e) => setStatus(e.target.value)}>
						<option value="Active">Active</option>
						<option value="Inactive">Inactive</option>
					</select>
				</div>
				<div className="flex justify-center space-x-10 ">
					<button
						className="px-4 py-2 border border-white hover:border-red-600 text-gray-900 rounded cursor-pointer"
						onClick={() => props.setShowAddStudent(false)}
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
