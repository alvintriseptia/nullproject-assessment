import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function Navbar() {
	const [user, setUser] = useState([]);
	const navigate = useNavigate();
	const { data, logout } = useContext(AuthContext);

	const Logout = async () => {
		logout();
		await navigate("/", { replace: true });
	};

	const isAuth = () => {
		fetch("http://localhost:8000/verify", {
			headers: {
				"x-access-token": localStorage.getItem("token"),
			},
		})
			.then((res) => res.json())
			.then((data) => (data.isLoggedIn ? setUser(data) : navigate("/")));
	};

	useEffect(() => {
		isAuth();
	}, []);

	return (
		<nav className="fixed w-full flex justify-between px-10 py-4 items-center bg-gradient-to-r from-gray-200 to-gray-300 shadow-xl">
			{user.data && <Link to="/dashboard"> {user.data.email}</Link>}
			<div className="flex space-x-8">
				{data.role === "principal" ? (
					<Link to="/dashboard/librarians">Librarians</Link>
				) : data.role === "librarian" ? (
					<>
						<Link to="/dashboard/books">Books</Link>
						<Link to="/dashboard/students">Students</Link>
						<Link to="/dashboard/loans">Loans</Link>
					</>
				) : (
					data.role === "librarian assistant" && (
						<>
							<Link to="/dashboard/students">Students</Link>
							<Link to="/dashboard/loans">Loans</Link>
						</>
					)
				)}
			</div>
			<button
				className="bg-indigo-500 hover:bg-indigo-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				onClick={Logout}
			>
				Logout
			</button>
		</nav>
	);
}

export default Navbar;
