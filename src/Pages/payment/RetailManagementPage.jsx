import React from 'react';
import { FaStore, FaUsers, FaChartLine } from 'react-icons/fa';

const stats = [
  {
    label: "Total Stores",
    value: 24,
    icon: <FaStore className="text-2xl text-[#14B8A6]" />,
    bg: "bg-[#E0F7FA]",
  },
  {
    label: "Active Merchants",
    value: 112,
    icon: <FaUsers className="text-2xl text-[#0A4747]" />,
    bg: "bg-[#FDF6E3]",
  },
  {
    label: "Sales Growth",
    value: "+18%",
    icon: <FaChartLine className="text-2xl text-[#F59E42]" />,
    bg: "bg-[#FFF7ED]",
  },
];

const merchants = [
  { name: "Acme Corp", status: "Active", sales: 12000 },
  { name: "Globex", status: "Active", sales: 9500 },
  { name: "Soylent", status: "Inactive", sales: 0 },
  { name: "Initech", status: "Active", sales: 7800 },
];

const RetailManagementPage = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-[#0A4747] mb-6">Retail Management</h2>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className={`flex items-center gap-4 p-4 rounded-xl shadow-sm ${stat.bg}`}>
            <div>{stat.icon}</div>
            <div>
              <div className="text-lg font-semibold">{stat.value}</div>
              <div className="text-sm text-[#64748B]">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Merchants Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Merchant</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Sales</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {merchants.map((merchant) => (
              <tr key={merchant.name}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{merchant.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold
                    ${merchant.status === "Active"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"}`}>
                    {merchant.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">${merchant.sales.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Call to Action */}
      <div className="mt-8 flex justify-end">
        <button className="bg-gradient-to-r from-[#0A4747] to-[#14B8A6] text-white px-6 py-2 rounded-3xl font-semibold shadow hover:scale-105 transition">
          Add New Merchant
        </button>
      </div>
    </div>
  );
};

export default RetailManagementPage;
