import React from "react";
import FraudPrevention from "../../component/fraud/FraudPrevention";

const FraudPreventionPage = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-[#0A4747] mb-6">Fraud Prevention</h1>
      <p className="text-[#64748B] mb-8">
        Protect your transactions with intelligent detection, flexible rules, and 24/7 support. Review flagged, blocked, and manually reviewed transactions below.
      </p>
      <FraudPrevention />
    </div>
  );
};

export default FraudPreventionPage;