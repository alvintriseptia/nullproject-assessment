import React from "react";

const ListLibrarians = ({ librarians }) => {
	return (
		<div className="px-8 mt-8 overflow-x-auto">
			<table className="w-full">
				<thead>
					<tr>
						<th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Employee ID
						</th>
						<th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Employee Name
						</th>
						<th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Email
						</th>
						<th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Status
						</th>
					</tr>
				</thead>

				{librarians &&
					librarians.map((librarian) => (
						<tbody key={librarian.employee_id}>
							<tr>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
									{librarian.employee_id}
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
									{librarian.employee_name}
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
									{librarian.email}
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
									{librarian.status}
								</td>
							</tr>
						</tbody>
					))}
			</table>
		</div>
	);
};

export default ListLibrarians;
