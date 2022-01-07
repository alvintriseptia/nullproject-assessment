const db = require("../config/db");
const Sequelize = require("sequelize");

// create model for a student
const Student = db.define("student", {
	student_id: {
		type: Sequelize.STRING,
		primaryKey: true,
	},
	student_name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	status: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	createdAt: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW,
	},
	updatedAt: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW,
	},
});

module.exports = Student;
