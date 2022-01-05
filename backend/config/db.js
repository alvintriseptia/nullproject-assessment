const Sequelize = require("sequelize");

//connect to database mysql
const db = new Sequelize("book_loan", "root", "", {
	host: "localhost",
	dialect: "mysql",
});

module.exports = db;
