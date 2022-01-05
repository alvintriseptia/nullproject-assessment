const db = require("../config/db");
const Sequelize = require("sequelize");
// create model for librarian
const Librarian = db.define("librarian", {
	id: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV4,
		primaryKey: true,
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
	},
	password: {
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

module.exports = Librarian;
