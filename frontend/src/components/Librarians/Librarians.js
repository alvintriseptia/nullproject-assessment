import React, { useState } from "react";
import Navbar from "../Navbar";
import CreateLibrarian from "./CreateLibrarian.js";
import ListLibrarians from "./ListLibrarians";

const Librarians = ({ librarians }) => {
	const [showAddLibrarian, setShowAddLibrarian] = useState(false);

	const handleAddLibrarian = () => {
		setShowAddLibrarian(!showAddLibrarian);
	};

	return (
		<div className="mb-8">
			<Navbar />
			<div className="px-8 pt-32">
				<h1 className="text-4xl font-bold mb-4">Librarian Page</h1>
				<button
					className="border border-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded mt-8"
					onClick={handleAddLibrarian}
				>
					Add Librarian
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
