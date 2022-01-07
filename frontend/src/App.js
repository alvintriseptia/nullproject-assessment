import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Books from "./components/Books/Books";
import Dashboard from "./components/Dashboard";
import Librarians from "./components/Librarians/Librarians";
import Loans from "./components/Loans/Loans";
import Login from "./components/Login";
import Students from "./components/Students/Students";
import { AuthContext } from "./AuthContext";
import { useContext, useEffect, useState } from "react";

function App() {
	const { data } = useContext(AuthContext);
	const [books, setBooks] = useState([]);
	const [librarians, setLibrarians] = useState([]);
	const [loans, setLoans] = useState([]);
	const [students, setStudents] = useState([]);

	const getBooks = async () => {
		try {
			const res = await fetch("http://localhost:8000/books");
			const data = await res.json();
			setBooks(data.data);
		} catch (error) {
			throw error;
		}
	};

	const getLibrarians = async () => {
		try {
			const res = await fetch("http://localhost:8000/librarians");
			const data = await res.json();
			setLibrarians(data.data);
		} catch (error) {
			throw error;
		}
	};

	const getLoans = async () => {
		try {
			const res = await fetch("http://localhost:8000/loans");
			const data = await res.json();
			setLoans(data.data);
		} catch (error) {
			throw error;
		}
	};

	const getStudents = async () => {
		try {
			const res = await fetch("http://localhost:8000/students");
			const data = await res.json();
			setStudents(data.data);
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		getBooks();
		getLibrarians();
		getLoans();
		getStudents();
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
				{data.role === "principal" && (
					<Route
						path="/dashboard/librarians"
						element={<Librarians librarians={librarians} />}
					/>
				)}
				{data.role === "librarian" && (
					<>
						<Route path="/dashboard/books" element={<Books />} />
						<Route path="/dashboard/students" element={<Students />} />
						<Route
							path="/dashboard/loans"
							element={
								<Loans students={students} books={books} loans={loans} />
							}
						/>
					</>
				)}
				{data.role === "librarian assistant" && (
					<>
						<Route path="/dashboard/students" element={<Students />} />
						<Route
							path="/dashboard/loans"
							element={
								<Loans students={students} books={books} loans={loans} />
							}
						/>
					</>
				)}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
