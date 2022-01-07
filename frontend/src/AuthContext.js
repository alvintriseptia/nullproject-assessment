import { createContext, useState } from "react";

export const AuthContext = createContext({
	user: "",
	role: "",
	token: "",
});

export const AuthProvider = ({ children }) => {
	const [data, setData] = useState({
		user: localStorage.getItem("user"),
		role: localStorage.getItem("role"),
		token: localStorage.getItem("token"),
	});

	const login = (user, role, token) => {
		setData({
			user: user,
			role: role,
			token: token,
		});
	};

	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		localStorage.removeItem("role");
		setData({
			user: {},
			role: "",
			token: "",
		});
	};

	return (
		<AuthContext.Provider
			value={{
				data,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
