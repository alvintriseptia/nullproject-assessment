import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import Navbar from "./Navbar";

function Dashboard() {
	const { data } = useContext(AuthContext);
	return (
		<>
			<Navbar />
			<section className="min-h-screen flex flex-col space-y-6 items-center pt-32">
				<h1 className="text-4xl font-bold mb-8">Dashboard</h1>
				<div className="flex space-x-6 text-white">
					{data.role === "principal" ? (
						<Link
							className="bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center w-24 h-24 rounded-full shadow-lg"
							to="/dashboard/librarians"
						>
							Librarians
						</Link>
					) : data.role === "librarian" ? (
						<>
							<Link
								className="bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center w-24 h-24 rounded-full shadow-lg"
								to="/dashboard/books"
							>
								Books
							</Link>
							<Link
								className="bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center w-24 h-24 rounded-full shadow-lg"
								to="/dashboard/students"
							>
								Students
							</Link>
							<Link
								className="bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center w-24 h-24 rounded-full shadow-lg"
								to="/dashboard/loans"
							>
								Loans
							</Link>
						</>
					) : (
						data.role === "librarian assistant" && (
							<>
								<Link
									className="bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center w-24 h-24 rounded-full shadow-lg"
									to="/dashboard/students"
								>
									Students
								</Link>
								<Link
									className="bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center w-24 h-24 rounded-full shadow-lg"
									to="/dashboard/loans"
								>
									Loans
								</Link>
							</>
						)
					)}
				</div>
			</section>
		</>
	);
}

export default Dashboard;
