const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/db");
const librarianRoutes = require("./routes/");

// middleware
const corsOptions = {
	origin: "http://localhost:3000",
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to database
try {
	db.authenticate();
	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}

// routes
app.use(librarianRoutes);

// listen
const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
