const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
	const token = req.headers["x-access-token"]?.split(" ")[1];
	if (token) {
		jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
			if (err) {
				return res.status(400).json({
					isLoggedIn: false,
					message: "Failed to authentication",
				});
			}
			req.user = decoded;
			next();
		});
	} else {
		return res.status(400).json({
			isLoggedIn: false,
			message: "No token provided",
		});
	}
};

module.exports = verifyJWT;
