const Librarian = require("../models/librarianModel");

// authenticate librarian by id
const userAuthentication = async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	try {
		// email validation
		// check data by email
		const checkEmail = await Librarian.findOne({
			where: {
				email: email,
			},
		});
		// if email exist, check password
		if (checkEmail !== null) {
			const data = await Librarian.findOne({
				where: {
					password: password,
				},
			});
			// if password exist, return data
			if (data !== null) {
				res.status(200).json({
					message: "login success",
					data: data,
				});
			}
			// if password not exist, return error
			else {
				// if password does not consist of 8 characters, capital letters, and numbers, return not valid
				const validationPass = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8}$/;
				if (!validationPass.test(password)) {
					res.status(400).json({
						message:
							"password must consist of 8 characters, and contains capital letters and numbers",
					});
				} else {
					res.status(400).json({
						message: "password is incorrect",
					});
				}
			}
		}
		// if email not exist, return message
		else {
			// if email does not contain smpn1 and .ac.id, return not valid
			if (!email.includes(+"smpn1") && !email.includes(".ac.id")) {
				res.status(400).json({
					message: "email must contain smpn1xx.ac.id",
				});
			} else {
				res.status(400).json({
					message: "email not registered",
				});
			}
		}
	} catch (error) {
		res.json({ message: error.message });
	}
};

module.exports = { userAuthentication };
