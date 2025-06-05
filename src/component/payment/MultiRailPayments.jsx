import React from 'react';
import { usePayments } from "./PaymentTable";
import { FaPlus, FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";


const statusStyles = {
  completed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  failed: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
};

const statusIcon = {
  completed: <FaCheckCircle className="inline mr-1" />,
  failed: <FaTimesCircle className="inline mr-1" />,
  pending: <FaClock className="inline mr-1" />,
};

const MultiRailPayments = () => {
  const { state, dispatch } = usePayments();

  const handleNewPayment = () => {
    const newPayment = {
      id: Date.now().toString(),
      amount: Math.floor(Math.random() * 1000) + 100,
      status: ['completed', 'failed', 'pending'][Math.floor(Math.random() * 3)],
      method: ['Credit Card', 'Bank Transfer', 'Mobile Money'][Math.floor(Math.random() * 3)],
      date: new Date().toISOString(),
      merchant: ['Acme Corp', 'Globex', 'Soylent'][Math.floor(Math.random() * 3)],
      channel: ['Online', 'POS', 'Mobile'][Math.floor(Math.random() * 3)],
    };
    dispatch({ type: 'ADD_PAYMENT', payload: newPayment });
  };

  // Calculate stats
  const totalVolume = state.payments.reduce((sum, p) => sum + p.amount, 0);
  const successful = state.payments.filter(p => p.status === "completed").length;
  const failed = state.payments.filter(p => p.status === "failed").length;
  const pending = state.payments.filter(p => p.status === "pending").length;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-[#0A4747]">Multi-Rail Payments</h2>
        <button
          onClick={handleNewPayment}
          className="flex items-center gap-2 bg-gradient-to-r from-[#0A4747] to-[#14B8A6] text-white px-5 py-2 rounded-3xl font-semibold shadow hover:scale-105 transition"
        >
          <FaPlus /> Simulate Payment
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
          <h3 className="text-blue-800 dark:text-blue-200 font-medium">Total Volume</h3>
          <p className="text-2xl font-bold">${totalVolume.toLocaleString()}</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
          <h3 className="text-green-800 dark:text-green-200 font-medium">Successful</h3>
          <p className="text-2xl font-bold">{successful}</p>
        </div>
        <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
          <h3 className="text-red-800 dark:text-red-200 font-medium">Failed</h3>
          <p className="text-2xl font-bold">{failed}</p>
        </div>
      </div>

      {/* Payments Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Method</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Channel</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Merchant</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {state.payments.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-8 text-[#64748B]">
                  No payments yet. Click "Simulate Payment" to add one.
                </td>
              </tr>
            ) : (
              state.payments.map(payment => (
                <tr key={payment.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{payment.id.slice(-6)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">${payment.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{payment.method}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{payment.channel}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{payment.merchant}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full items-center gap-1 ${statusStyles[payment.status]}`}>
                      {statusIcon[payment.status]} {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {new Date(payment.date).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pending count */}
      <div className="mt-6 flex items-center gap-2">
        <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-3 py-1 rounded-full text-xs font-semibold">
          Pending: {pending}
        </span>
      </div>
    </div>
  );
};

export default MultiRailPayments;