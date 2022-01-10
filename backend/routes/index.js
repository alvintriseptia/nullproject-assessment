const router = require("express").Router();
const {
	userAuthentication,
	createLibrarian,
	getAllLibrarian,
} = require("../controllers/librarians");
const {
	getAllBooks,
	createBook,
	updateBook,
	deleteBook,
} = require("../controllers/books");
const {
	getAllStudents,
	createStudent,
	updateStudent,
	deleteStudent,
} = require("../controllers/students");
const { getAllLoans, createLoan } = require("../controllers/loans");
const verifyJWT = require("../lib/verifyJWT");

// LIBRARIAN ROUTES
// login librarian
router.post("/login", userAuthentication);
// verify jwt
router.get("/verify", verifyJWT, (req, res) => {
	res.status(200).json({
		isLoggedIn: true,
		message: "verify jwt success",
		data: req.user,
	});
});
// create /librarian
router.post("/librarians", createLibrarian);
// get all /librarians
router.get("/librarians", getAllLibrarian);

// BOOKS ROUTES
// GET /books
router.get("/books", getAllBooks);
// POST /books
router.post("/books", createBook);
// PATCH /books/:id
router.patch("/books/:book_id", updateBook);
// DELETE /books/:id
router.delete("/books/:book_id", deleteBook);

// STUDENTS ROUTES
// GET /students
router.get("/students", getAllStudents);
// POST /students
router.post("/students", createStudent);
// PUT /students/:id
router.patch("/students/:student_id", updateStudent);
// DELETE /students/:id
router.delete("/students/:student_id", deleteStudent);

// LOANS ROUTES
// GET /loans
router.get("/loans", getAllLoans);
// POST /loans
router.post("/loans", createLoan);

// export router
module.exports = router;
