import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const fraudData = [
  { name: "Jan", flagged: 12, blocked: 8, manualReview: 4 },
  { name: "Feb", flagged: 18, blocked: 12, manualReview: 6 },
  { name: "Mar", flagged: 15, blocked: 10, manualReview: 5 },
  { name: "Apr", flagged: 22, blocked: 16, manualReview: 6 },
  { name: "May", flagged: 19, blocked: 14, manualReview: 5 },
  { name: "Jun", flagged: 25, blocked: 20, manualReview: 5 },
];

const FraudPrevention = () => {
  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
          <h3 className="text-purple-800 dark:text-purple-200 font-medium">Flagged Transactions</h3>
          <p className="text-2xl font-bold">112</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">This month</p>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
          <h3 className="text-orange-800 dark:text-orange-200 font-medium">Blocked Transactions</h3>
          <p className="text-2xl font-bold">80</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">This month</p>
        </div>
        <div className="bg-cyan-50 dark:bg-cyan-900/30 p-4 rounded-lg">
          <h3 className="text-cyan-800 dark:text-cyan-200 font-medium">Manual Reviews</h3>
          <p className="text-2xl font-bold">32</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">This month</p>
        </div>
      </div>

      {/* Chart */}
      <div className="h-80 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={fraudData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="flagged" fill="#a78bfa" name="Flagged" />
            <Bar dataKey="blocked" fill="#fbbf24" name="Blocked" />
            <Bar dataKey="manualReview" fill="#06b6d4" name="Manual Review" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Rules */}
      <div>
        <h3 className="font-medium mb-3">Fraud Rules</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
            <span>High-value transaction screening</span>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
            <span>Velocity checks</span>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
            <span>Geo-blocking</span>
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Review Needed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FraudPrevention;