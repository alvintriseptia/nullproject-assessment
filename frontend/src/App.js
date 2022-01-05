import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
function App() {
	const { user } = useContext(AuthContext);
	console.log(user.isAuthenticated);

	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Login />} />
				{user.isAuthenticated ? (
					<Route path="/dashboard" element={<Dashboard />} />
				) : (
					<Route path="*" element={<Navigate to="/" />} />
				)}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
