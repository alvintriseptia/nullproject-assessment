const Loan = require("../models/loanModel");

// get all loans
const getAllLoans = async (req, res) => {
	try {
		const loans = await Loan.findAll();
		res.status(200).json({
			message: "get all loans success",
			data: loans,
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

// create loan
const createLoan = async (req, res) => {
	const { book_id, student_id, rent_date, return_date, charges } = req.body;
	try {
		const loan = await Loan.create({
			book_id: book_id,
			student_id: student_id,
			rent_date: rent_date,
			return_date: return_date,
			charges: charges,
		});
		res.status(200).json({
			message: "create loan success",
			data: loan,
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

// export all functions
module.exports = {
	getAllLoans,
	createLoan,
};
