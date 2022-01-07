import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import CreateLibrarian from "./CreateLibrarian.js";
import ListLibrarians from "./ListLibrarians";

const Librarians = () => {
	const [librarians, setLibrarians] = useState([]);
	const [showAddLibrarian, setShowAddLibrarian] = useState(false);

	const getLibrarians = async () => {
		try {
			const res = await fetch("http://localhost:8000/librarians");
			const data = await res.json();
			setLibrarians(data.data);
		} catch (err) {
			throw err;
		}
	};
	const handleAddLibrarian = () => {
		setShowAddLibrarian(!showAddLibrarian);
	};

	useEffect(() => {
		getLibrarians();
	}, []);

	return (
		<div className="mb-8">
			<Navbar />
			<div className="px-8 pt-32">
				<h1 className="text-4xl font-bold mb-4">Librarian Page</h1>
				<button
					className="border border-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mt-8"
					onClick={handleAddLibrarian}
				>
					Add Student
				</button>
			</div>
			{showAddLibrarian && (
				<CreateLibrarian setShowAddLibrarian={setShowAddLibrarian} />
			)}
			<ListLibrarians librarians={librarians} />
		</div>
	);
};

export default Librarians;
