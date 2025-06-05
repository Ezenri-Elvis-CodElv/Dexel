import React from 'react';
import { FaChartBar, FaFileAlt, FaDownload } from 'react-icons/fa';

const reports = [
  {
    title: "Monthly Summary",
    description: "Overview of all transactions and settlements for the month.",
    icon: <FaChartBar className="text-2xl text-[#14B8A6]" />,
    date: "May 2025",
    download: true,
  },
  {
    title: "Merchant Performance",
    description: "Detailed report on merchant sales and activity.",
    icon: <FaFileAlt className="text-2xl text-[#0A4747]" />,
    date: "May 2025",
    download: true,
  },
  {
    title: "Dispute Analysis",
    description: "Summary of disputes, resolutions, and trends.",
    icon: <FaChartBar className="text-2xl text-[#F59E42]" />,
    date: "May 2025",
    download: false,
  },
];

const ReportingPage = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-[#0A4747] mb-6">Reporting & Data</h2>
      <p className="text-[#64748B] mb-8">
        Access real-time and historical data to optimize your payments, decisions, and strategies. Download detailed reports or view summaries below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {reports.map((report) => (
          <div key={report.title} className="flex items-start gap-4 p-4 bg-[#F5F7FA] rounded-xl shadow-sm">
            <div>{report.icon}</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg text-[#0A4747]">{report.title}</h3>
                <span className="text-xs text-[#14B8A6]">{report.date}</span>
              </div>
              <p className="text-sm text-[#64748B] mb-2">{report.description}</p>
              {report.download && (
                <button className="flex items-center gap-2 text-[#14B8A6] hover:underline text-sm font-semibold">
                  <FaDownload /> Download
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="font-medium mb-3">Custom Data Export</h3>
        <form className="flex flex-col md:flex-row gap-4 items-center">
          <input
            type="date"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
            placeholder="Start Date"
          />
          <input
            type="date"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
            placeholder="End Date"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#0A4747] to-[#14B8A6] text-white px-6 py-2 rounded-3xl font-semibold shadow hover:scale-105 transition"
          >
            Export CSV
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportingPage;
