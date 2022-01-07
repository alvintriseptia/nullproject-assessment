import React, { useState } from "react";

const ConfirmDelete = (props) => {
	const [error, setError] = useState("");

	const deleteStudent = async (e) => {
		try {
			fetch(`http://localhost:8000/students/${props.id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.message) {
						setError(data.message);
					}
				});
		} catch (error) {
			setError(error);
		}
	};

	return (
		<section className="bg-black/50 fixed top-0 left-0 h-full w-full z-50 flex justify-center items-center">
			{error !== "" && <p>{error}</p>}
			<div className="py-6 px-8 bg-white rounded-lg">
				<h1 className="text-xl font-medium text-gray-900 mb-4">
					Are you sure?
				</h1>
				<form onSubmit={deleteStudent}>
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
