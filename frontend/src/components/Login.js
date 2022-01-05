import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const { AuthContext } = require("../AuthContext");

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const { user, login } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const Auth = async (e) => {
		e.preventDefault();
		//authenticate user
		try {
			if (email === "" || password === "") {
				setMessage("Please fill all fields");
			} else {
				await axios.post("http://localhost:8000/login", {
					email: email,
					password: password,
				});
				login(email);
				navigate("/dashboard", { replace: true });
			}
		} catch (error) {
			if (error.response) {
				setMessage(error.response.data.message);
			}
		}
	};

	return (
		<>
			<div className="min-h-screen flex flex-col space-y-5 items-center justify-center bg-indigo-300">
				{message !== "" && (
					<div className="py-4 px-10 bg-red-300 transition-all">
						<p>{message}</p>
					</div>
				)}
				<form onSubmit={Auth} className="flex flex-col items-center space-y-5">
					<div className="flex space-x-10">
						<label className="w-20">Email:</label>
						<input
							onChange={handleEmail}
							value={email}
							type="email"
							name="email"
						/>
					</div>
					<div className="flex space-x-10">
						<label className="w-20">Password:</label>
						<input
							onChange={handlePassword}
							value={password}
							type="password"
							name="password"
						/>
					</div>
					<input
						className="bg-indigo-500 hover:bg-indigo-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
						value="Submit"
					/>
				</form>
			</div>
		</>
	);
};

export default Login;
