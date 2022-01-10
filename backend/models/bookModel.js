const db = require("../config/db");
const Sequelize = require("sequelize");
// create model for Book
const Book = db.define("book", {
	book_id: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV4,
		primaryKey: true,
	},
	book_name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	author: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	publisher: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	isbn_number: {
		type: Sequelize.INTEGER,
		allowNull: false,
		unique: true,
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

module.exports = Book;
