import React from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
	const { user, logout } = React.useContext(AuthContext);
	const navigate = useNavigate();

	const Logout = () => {
		logout();
		navigate("/");
	};

	console.log(user);

	return (
		<div className="min-h-screen flex flex-col space-y-6 items-center justify-center bg-indigo-300">
			Dashboard Page
			{user && <div> {user.email}</div>}
			<button
				className="bg-indigo-500 hover:bg-indigo-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				onClick={Logout}
			>
				Logout
			</button>
		</div>
	);
};

export default Dashboard;
