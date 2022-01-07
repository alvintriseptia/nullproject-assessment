import React, { useEffect, useState } from "react";

const EditStudent = ({ student, setShowEditStudent }) => {
	const [studentId, setStudentId] = useState("");
	const [studentName, setStudentName] = useState("");
	const [status, setStatus] = useState("");
	const id = student.student_id;

	const updatestudent = async (e) => {
		const student = {
			student_id: studentId,
			student_name: studentName,
			status: status,
		};
		try {
			await fetch(`http://localhost:8000/students/${id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(student),
			});
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		setStudentName(student.student_name);
		setStudentId(student.student_id);
		setStatus(student.status);
	}, [student]);

	return (
		<>
			{student.student_id && (
				<div className="flex justify-center">
					<form
						onSubmit={updatestudent}
						className="flex flex-col space-y-5 bg-gradient-to-br from-violet-300 to-pink-300 p-10 rounded-xl shadow-lg"
					>
						<h2 className="text-center text-2xl font-bold">Edit Student</h2>
						<div className="flex space-x-10 items-center">
							<label className="w-28">Student Id: </label>
							<input
								className="py-2 px-4 rounded-lg"
								type="text"
								onChange={(e) => setStudentId(e.target.value)}
								defaultValue={studentId}
							/>
						</div>
						<div className="flex space-x-10 items-center">
							<label className="w-28">Student Name: </label>
							<input
								className="py-2 px-4 rounded-lg"
								type="text"
								onChange={(e) => setStudentName(e.target.value)}
								defaultValue={studentName}
							/>
						</div>
						<div className="flex space-x-10 items-center">
							<label className="w-28">Status: </label>
							<select
								className="py-2 px-4 rounded-lg"
								onChange={(e) => setStatus(e.target.value)}
								defaultValue={status}
							>
								<option value="Active">Active</option>
								{status === "Inactive" ? (
									<option selected value="Inactive">
										Inactive
									</option>
								) : (
									<option value="Inactive">Inactive</option>
								)}
							</select>
						</div>
						<div className="flex justify-center space-x-10 items-center ">
							<button
								className="px-4 py-2 border border-white hover:border-red-600 text-gray-900 rounded cursor-pointer"
								onClick={() => setShowEditStudent(false)}
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

export default EditStudent;
