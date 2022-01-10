import React, { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";

const ListStudents = ({ students, getStudentById, hidden, showLoans }) => {
	const [showModal, setShowModal] = useState(false);
	const [id, setId] = useState("");
	const handleDelete = (id) => {
		setShowModal(!showModal);
		setId(id);
	};

	return (
		<div className="px-8 mt-8 overflow-x-auto">
			<table className="w-full">
				<thead>
					<tr>
						<th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Student ID
						</th>
						<th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Student Name
						</th>
						<th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Status
						</th>
						<th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Actions
						</th>
					</tr>
				</thead>
				{students.map((student) => (
					<tbody key={student.student_id}>
						<tr>
							<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
								{student.student_id}
							</td>
							<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
								{student.student_name}
							</td>
							<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
								{student.status}
							</td>

							<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
								{showLoans && (
									<button
										className="border border-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mr-4"
										onClick={() => getStudentById(student.student_id)}
									>
										Make Loan
									</button>
								)}
								{!hidden && (
									<>
										<button
											className="border border-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mr-4"
											onClick={() => getStudentById(student.student_id)}
										>
											Edit
										</button>
										<button
											className="border border-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mr-4"
											onClick={() => handleDelete(student.student_id)}
										>
											Delete
										</button>
									</>
								)}
							</td>
						</tr>
					</tbody>
				))}
			</table>
			{showModal && <ConfirmDelete id={id} setShowModal={setShowModal} />}
		</div>
	);
};

export default ListStudents;
