const Student = require("../models/studentModel");

// get all students
const getAllStudents = async (req, res) => {
	try {
		const students = await Student.findAll();
		res.status(200).json({
			message: "get all students success",
			data: students,
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

// create student
const createStudent = async (req, res) => {
	const { student_id, student_name, status } = req.body;
	try {
		await Student.create({
			student_id: student_id,
			student_name: student_name,
			status: status,
		});
		res.status(200).json({
			message: "create student success",
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

// update student
const updateStudent = async (req, res) => {
	const student_id = req.params.student_id;
	const { student_name, status } = req.body;
	try {
		await Student.update(
			{
				student_name: student_name,
				status: status,
				updateAt: new Date(),
			},
			{
				where: {
					student_id: student_id,
				},
			}
		);
		res.status(200).json({
			message: "update student success",
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

// delete student
const deleteStudent = async (req, res) => {
	const student_id = req.params.student_id;
	try {
		await Student.destroy({
			where: {
				student_id: student_id,
			},
		});
		res.status(200).json({
			message: "delete student success",
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

// export all functions
module.exports = {
	getAllStudents,
	createStudent,
	updateStudent,
	deleteStudent,
};
