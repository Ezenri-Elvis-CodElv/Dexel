import React from "react";
import { FaMoneyBillWave, FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";
import { usePayments } from "./PaymentTable";

const PaymentStats = () => {
  const { state } = usePayments();

  const totalVolume = state.payments.reduce((sum, p) => sum + p.amount, 0);
  const successful = state.payments.filter(p => p.status === "completed").length;
  const failed = state.payments.filter(p => p.status === "failed").length;
  const pending = state.payments.filter(p => p.status === "pending").length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="flex items-center gap-4 p-4 rounded-xl shadow-sm bg-blue-50 dark:bg-blue-900/30">
        <FaMoneyBillWave className="text-2xl text-blue-500" />
        <div>
          <div className="text-lg font-semibold">${totalVolume.toLocaleString()}</div>
          <div className="text-sm text-[#64748B]">Total Volume</div>
        </div>
      </div>
      <div className="flex items-center gap-4 p-4 rounded-xl shadow-sm bg-green-50 dark:bg-green-900/30">
        <FaCheckCircle className="text-2xl text-green-500" />
        <div>
          <div className="text-lg font-semibold">{successful}</div>
          <div className="text-sm text-[#64748B]">Successful</div>
        </div>
      </div>
      <div className="flex items-center gap-4 p-4 rounded-xl shadow-sm bg-red-50 dark:bg-red-900/30">
        <FaTimesCircle className="text-2xl text-red-500" />
        <div>
          <div className="text-lg font-semibold">{failed}</div>
          <div className="text-sm text-[#64748B]">Failed</div>
        </div>
      </div>
      <div className="flex items-center gap-4 p-4 rounded-xl shadow-sm bg-yellow-50 dark:bg-yellow-900/30">
        <FaClock className="text-2xl text-yellow-500" />
        <div>
          <div className="text-lg font-semibold">{pending}</div>
          <div className="text-sm text-[#64748B]">Pending</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStats;