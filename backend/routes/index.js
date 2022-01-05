const router = require("express").Router();
const { userAuthentication } = require("../controllers/librarians");
const {
	getAllBooks,
	getBookById,
	createBook,
	updateBook,
	deleteBook,
} = require("../controllers/books");

// GET /librarians/:id
router.post("/login", userAuthentication);

// GET /books
router.get("/books", getAllBooks);

// GET /books/:id
router.get("/books/:book_id", getBookById);

// POST /books
router.post("/books", createBook);

// PUT /books/:id
router.put("/books/:book_id", updateBook);

// DELETE /books/:id
router.delete("/books/:book_id", deleteBook);

// export router
module.exports = router;
