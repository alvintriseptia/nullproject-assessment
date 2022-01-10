const Librarian = require("../models/librarianModel");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
require("dotenv").config();

// authenticate librarian by id
const userAuthentication = async (req, res, next) => {
	const email = req.body.email;
	const password = req.body.password;

	// if email or password null
	if (email === "" || password === "") {
		return res.status(400).json({
			message: "Please fill all fields",
		});
	}
	// if email does not contain smpn1 and .ac.id, return not valid
	const validationEmail = /([0-9A-Za-z]+)@smpn1[a-z]+\.ac\.id/g;
	if (!validationEmail.test(email)) {
		return res.status(400).json({
			message: "email domain must contain smpn1xx.ac.id",
		});
	}
	const validationPass = /^(?=.*[A-Z])(?=.*[0-9])[0-9A-Za-z]{8}$/;
	if (!validationPass.test(password)) {
		return res.status(400).json({
			message:
				"password must consist of 8 characters, and contains capital letters and numbers",
		});
	}
	try {
		// email validation
		// check data by email
		const dataUser = await Librarian.findOne({
			where: {
				email: email,
			},
		});
		// if email exist, check password
		if (dataUser !== null) {
			// if password exist, return data
			const checkPassword = await Librarian.findOne({
				where: {
					email: email,
					password: {
						[Op.eq]: password,
					},
				},
			});
			if (checkPassword !== null) {
				const payload = {
					id: dataUser.employee_id,
					email: dataUser.email,
				};
				jwt.sign(
					payload,
					process.env.SECRET_KEY,
					{
						expiresIn: 3600,
					},
					(err, token) => {
						if (err) {
							return res.status(400).json("error while generating token");
						} else {
							return res.json({
								token: "Bearer " + token,
								message: "login success",
								data: dataUser,
							});
						}
					}
				);
			} else {
				return res.status(400).json({
					message: "password is incorrect",
				});
			}
		}
		// if email not exist, return message
		else {
			return res.status(400).json({
				message: "email not registered",
			});
		}
	} catch (error) {
		next(error);
	}
};

// create librarian
const createLibrarian = async (req, res) => {
	const { employee_id, employee_name, email, password, status } = req.body;
	try {
		await Librarian.create({
			employee_id: employee_id,
			employee_name: employee_name,
			email: email,
			password: password,
			status: status,
		});
		res.status(200).json({
			message: "create librarian success",
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

// get all librarian
const getAllLibrarian = async (req, res) => {
	try {
		const librarian = await Librarian.findAll();
		res.status(200).json({
			message: "get all librarian success",
			data: librarian,
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

module.exports = { userAuthentication, createLibrarian, getAllLibrarian };
