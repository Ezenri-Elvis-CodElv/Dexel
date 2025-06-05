import React from 'react';
import { FaSyncAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const reconciliations = [
	{
		id: 'RCN-001',
		date: '2025-05-01',
		status: 'Completed',
		amount: 3200,
		details: 'Daily settlement for Acme Corp',
	},
	{
		id: 'RCN-002',
		date: '2025-05-02',
		status: 'Pending',
		amount: 2100,
		details: 'Daily settlement for Globex',
	},
	{
		id: 'RCN-003',
		date: '2025-05-03',
		status: 'Failed',
		amount: 1800,
		details: 'Daily settlement for Soylent',
	},
];

const statusColor = {
	Completed:
		'text-green-700 bg-green-100 dark:bg-green-900 dark:text-green-200',
	Pending:
		'text-yellow-700 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200',
	Failed: 'text-red-700 bg-red-100 dark:bg-red-900 dark:text-red-200',
};

const statusIcon = {
	Completed: <FaCheckCircle className="inline mr-1" />,
	Pending: <FaSyncAlt className="inline mr-1 animate-spin-slow" />,
	Failed: <FaTimesCircle className="inline mr-1" />,
};

const ReconciliationPage = () => {
	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
			<h2 className="text-2xl font-bold text-[#0A4747] mb-6">
				Operation & Reconciliations
			</h2>
			<p className="text-[#64748B] mb-8">
				Enables fast, secure, and transparent cashouts with automated
				reconciliation. Review your recent reconciliation operations below.
			</p>

			<div className="overflow-x-auto">
				<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
					<thead className="bg-gray-50 dark:bg-gray-700">
						<tr>
							<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
								ID
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
								Date
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
								Amount
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
								Status
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
								Details
							</th>
						</tr>
					</thead>
					<tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
						{reconciliations.map((rec) => (
							<tr key={rec.id}>
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
									{rec.id}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm">
									{rec.date}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm">
									${rec.amount.toLocaleString()}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm">
									<span
										className={`px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${statusColor[rec.status]}`}
									>
										{statusIcon[rec.status]} {rec.status}
									</span>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm">
									{rec.details}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="mt-8 flex justify-end">
				<button className="bg-gradient-to-r from-[#0A4747] to-[#14B8A6] text-white px-6 py-2 rounded-3xl font-semibold shadow hover:scale-105 transition">
					Start New Reconciliation
				</button>
			</div>
		</div>
	);
};

export default ReconciliationPage;
