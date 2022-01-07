import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import CreateStudent from "./CreateStudent";
import EditStudent from "./EditStudent";
import ListStudents from "./ListStudents";

const Students = () => {
	const [students, setStudents] = useState([]);
	const [editStudent, setEditStudent] = useState([]);
	const [showAddStudent, setShowAddStudent] = useState(false);
	const [showEditStudent, setShowEditStudent] = useState(false);

	const getStudents = async () => {
		try {
			const res = await fetch("http://localhost:8000/students");
			const data = await res.json();
			setStudents(data.data);
		} catch (err) {
			throw err;
		}
	};

	const getStudentById = (id) => {
		const student = students.filter((student) => student.student_id === id);
		if (student.length > 0) {
			setEditStudent(student[0]);
			setShowEditStudent(true);
		}
	};
	const handleAddStudent = () => {
		setShowAddStudent(!showAddStudent);
	};
	useEffect(() => {
		getStudents();
	}, []);

	return (
		<div className="mb-8">
			<Navbar />
			<div className="px-8 pt-32">
				<h1 className="text-4xl font-bold mb-4">Students Page</h1>
				<button
					className="border border-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mt-8"
					onClick={handleAddStudent}
				>
					Add Student
				</button>
			</div>
			{showAddStudent && (
				<CreateStudent setShowAddStudent={setShowAddStudent} />
			)}
			{showEditStudent && (
				<EditStudent
					student={editStudent}
					setShowEditStudent={setShowEditStudent}
				/>
			)}
			<ListStudents getStudentById={getStudentById} students={students} />
		</div>
	);
};

export default Students;
