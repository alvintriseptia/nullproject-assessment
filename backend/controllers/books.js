const Book = require("../models/bookModel");

// get all books
const getAllBooks = async (req, res) => {
	try {
		const books = await Book.findAll();
		res.status(200).json({
			message: "get all books success",
			data: books,
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

// get book by id
const getBookById = async (req, res) => {
	const book_id = req.params.book_id;
	try {
		const book = await Book.findOne({
			where: {
				book_id: book_id,
			},
		});
		res.status(200).json({
			message: "get book by id success",
			data: book,
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

// create book
const createBook = async (req, res) => {
	const { book_name, author, publisher, isbn_number } = req.body;
	try {
		const book = await Book.create({
			book_name: book_name,
			author: author,
			publisher: publisher,
			isbn_number: isbn_number,
		});
		res.status(200).json({
			message: "create book success",
			data: book,
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

// update book
const updateBook = async (req, res) => {
	const book_id = req.params.book_id;
	const { book_name, author, publisher, isbn_number } = req.body;
	try {
		const book = await Book.update(
			{
				book_name: book_name,
				author: author,
				publisher: publisher,
				isbn_number: isbn_number,
			},
			{
				where: {
					book_id: book_id,
				},
			}
		);
		res.status(200).json({
			message: "update book success",
			data: book,
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

// delete book
const deleteBook = async (req, res) => {
	const book_id = req.params.book_id;
	try {
		const book = await Book.destroy({
			where: {
				book_id: book_id,
			},
		});
		res.status(200).json({
			message: "delete book success",
			data: book,
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

// export all functions
module.exports = {
	getAllBooks,
	getBookById,
	createBook,
	updateBook,
	deleteBook,
};
