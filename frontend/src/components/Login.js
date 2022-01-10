import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Login = () => {
	const { login } = useContext(AuthContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const navigate = useNavigate();

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};
	const getRoleFromEmail = (email) => {
		if (email.includes("principal.ac.id")) {
			return "principal";
		} else if (email.includes("librarian.ac.id")) {
			return "librarian";
		} else if (email.includes("librarian.asst.ac.id")) {
			return "librarian assistant";
		}
	};

	const Auth = async (e) => {
		e.preventDefault();
		//authenticate user
		const user = {
			email: email,
			password: password,
		};
		try {
			const response = await fetch("http://localhost:8000/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			});
			const data = await response.json();
			if (data.message) {
				setMessage(data.message);
			}
			localStorage.setItem("user", data.data.email);
			localStorage.setItem("token", data.token);
			localStorage.setItem("role", getRoleFromEmail(data.data.email));
			navigate("/dashboard", { replace: true });
			login(
				localStorage.getItem("user"),
				localStorage.getItem("role"),
				localStorage.getItem("token")
			);
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		fetch("http://localhost:8000/verify", {
			headers: {
				"x-access-token": localStorage.getItem("token"),
			},
		})
			.then((res) => res.json())
			.then((data) => (data.isLoggedIn ? navigate("/dashboard") : null));
	}, []);

	return (
		<>
			<div className="min-h-screen flex flex-col space-y-5 items-center justify-center">
				{message && (
					<div className="p-4 w-96 bg-red-300 rounded">
						<p>{message}</p>
					</div>
				)}
				<form
					onSubmit={Auth}
					className="flex flex-col space-y-5 bg-gradient-to-r from-cyan-500 to-blue-500 p-10 rounded-xl shadow-lg"
				>
					<div className="flex space-x-10 items-center">
						<label className="w-20 text-gray-200">Email:</label>
						<input
							className="py-2 px-4 rounded-lg"
							onChange={handleEmail}
							value={email}
							type="email"
							name="email"
						/>
					</div>
					<div className="flex space-x-10 items-center">
						<label className="w-20 text-gray-200">Password:</label>
						<input
							className="py-2 px-4 rounded-lg"
							onChange={handlePassword}
							value={password}
							type="password"
							name="password"
						/>
					</div>
					<input
						className="bg-violet-500 hover:bg-violet-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline self-center transition-all"
						type="submit"
						value="Submit"
					/>
				</form>
			</div>
		</>
	);
};

export default Login;
