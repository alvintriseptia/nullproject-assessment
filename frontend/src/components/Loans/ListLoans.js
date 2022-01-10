import React from "react";

const ListLoans = ({ loans }) => {
	return (
		<div className="px-8 mt-8 overflow-x-auto">
			<table className="w-full">
				<thead>
					<tr>
						<th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Book ID
						</th>
						<th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Book Name
						</th>
						<th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Student ID
						</th>
						<th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Student Name
						</th>
						<th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Rent Date
						</th>
						<th className="px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Return Date
						</th>
					</tr>
				</thead>
				{loans.map((loan) => (
					<tbody key={loan.loan_id} className="p-10">
						<tr>
							<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
								{loan.book_id}
							</td>
							<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
								{loan.book_name}
							</td>
							<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
								{loan.student_id}
							</td>
							<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
								{loan.student_name}
							</td>
							<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
								{loan.rent_date}
							</td>
							<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm leading-5 font-medium text-gray-900">
								{loan.return_date}
							</td>
						</tr>
					</tbody>
				))}
			</table>
		</div>
	);
};

export default ListLoans;
