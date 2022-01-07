import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthContext";
import Navbar from "../Navbar";
import ListStudents from "../Students/ListStudents";
import InputLoan from "./InputLoan";
import Library from "./Library";
import ListLoans from "./ListLoans";

const Loans = ({ students, books, loans }) => {
	const { data } = useContext(AuthContext);
	const [dataBook, setDataBook] = useState([]);
	const [dataStudent, setDataStudent] = useState([]);
	const [library, setLibrary] = useState([]);
	const [step, setStep] = useState(1);
	const [show, setShow] = useState("");

	const getStudentById = (id) => {
		const student = students.filter((student) => student.student_id === id);
		if (student.length > 0) {
			setDataStudent(student[0]);
			setStep(2);
		}
	};
	const getBookById = (id) => {
		const book = books.filter((book) => book.book_id === id);
		if (book.length > 0) {
			setDataBook(book[0]);
			setStep(3);
		}
	};
	const inputLoan = () => {
		setStep(1);
		getLibrary();
		setShow("inputLoan");
	};

	const getLibrary = () => {
		const library = books.filter(
			(book) => !loans.find((loan) => loan.book_id === book.book_id)
		);
		setLibrary(library);
	};

	const handleLibrary = () => {
		getLibrary();
		setShow("library");
	};

	return (
		<div className="mb-8">
			<Navbar />
			<div className="px-8 pt-32">
				<h1 className="text-4xl font-bold mb-4">Loans Page</h1>
				<div className="flex space-x-7">
					{data.role === "librarian" && (
						<>
							<button
								className={`border border-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mt-8" ${
									show === "library" && "bg-blue-700 text-white"
								}`}
								onClick={handleLibrary}
							>
								Library
							</button>
							<button
								className={`border border-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mt-8" ${
									show === "listLoan" && "bg-blue-700 text-white"
								}`}
								onClick={() => setShow("listLoan")}
							>
								List Loan
							</button>
						</>
					)}
					<button
						className={`border border-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mt-8" ${
							show === "inputLoan" && "bg-blue-700 text-white"
						}`}
						onClick={inputLoan}
					>
						Input Loan
					</button>
				</div>
			</div>

			<div className="min-h-screen flex flex-col space-y-6 items-center px-8 my-6">
				{show === "library" && (
					<Library showLoans={false} libraries={library} />
				)}
				{show === "listLoan" && <ListLoans loans={loans} />}
				{show === "inputLoan" && (
					<>
						{step === 1 && (
							<ListStudents
								showLoans={true}
								hidden={true}
								students={students}
								getStudentById={getStudentById}
							/>
						)}
						{step === 2 && (
							<Library
								showLoans={true}
								libraries={library}
								getBookById={getBookById}
							/>
						)}
						{step === 3 && (
							<InputLoan dataBook={dataBook} dataStudent={dataStudent} />
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default Loans;
