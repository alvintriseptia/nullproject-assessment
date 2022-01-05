const { createContext, useState } = require("react");

export const AuthContext = createContext({
	email: "",
	isAuthenticated: false,
});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({ email: "", isAuthenticated: false });

	const login = (email) => {
		setUser({
			email: email,
			isAuthenticated: true,
		});
	};

	const logout = () => {
		setUser({
			email: "",
			isAuthenticated: false,
		});
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
