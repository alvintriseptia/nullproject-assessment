const db = require("../config/db");
const Sequelize = require("sequelize");

// create model for a loan
const Loan = db.define("loan", {
	loan_id: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV4,
		primaryKey: true,
	},
	book_id: {
		type: Sequelize.STRING,
		foreignKey: true,
		allowNull: false,
	},
	student_id: {
		type: Sequelize.STRING,
		foreignKey: true,
		allowNull: false,
	},
	rent_date: {
		type: Sequelize.DATE,
		allowNull: false,
	},
	return_date: {
		type: Sequelize.DATE,
		allowNull: false,
	},
	charges: {
		type: Sequelize.INTEGER,
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

module.exports = Loan;
