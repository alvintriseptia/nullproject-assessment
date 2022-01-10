import React, { useState } from "react";

const ConfirmDelete = (props) => {
	const [error, setError] = useState("");

	const deleteBook = async (e) => {
		try {
			const response = await fetch(`http://localhost:8000/books/${props.id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await response.json();
			if (data.message) {
				if (data.message.includes("success")) {
					window.location.reload();
				}
				setError(data.message);
			}
		} catch (error) {
			throw error;
		}
	};

	return (
		<section className="bg-black/50 fixed top-0 left-0 h-screen w-screen z-50 flex justify-center items-center">
			<div className="py-6 px-8 bg-white rounded-lg">
				{error !== "" && <p>{error}</p>}
				<h1 className="text-xl font-medium text-gray-900 mb-4">
					Are you sure?
				</h1>
				<form onSubmit={deleteBook}>
					<div className="flex justify-end space-x-2 mt-4">
						<button
							className="px-4 py-2 border border-white hover:border-red-600 text-gray-900 rounded-xl cursor-pointer"
							onClick={() => props.setShowModal(false)}
						>
							Cancel
						</button>
						<input
							className="px-4 py-2 bg-red-600 text-white rounded-xl cursor-pointer"
							type="submit"
							value="Delete"
						/>
					</div>
				</form>
			</div>
		</section>
	);
};

export default ConfirmDelete;
