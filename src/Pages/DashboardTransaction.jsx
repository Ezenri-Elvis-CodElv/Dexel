// src/Pages/DashboardTransaction.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import MultiRailPaymentsPage from "./payment/MultiRailPaymentsPage";
import RetailManagementPage from "./payment/RetailManagementPage";
import FraudPreventionPage from "./payment/FraudPreventionPage";
import ReconciliationPage from "./payment/ReconciliationPage";
import ReportingPage from "./payment/ReportingPage";
import DashboardLayout from "../component/layout/DashboardTransaction";
import PaymentStats from "../component/payment/PaymentStats";
import { PaymentProvider } from "../component/payment/PaymentTable";

const DashboardTransaction = () => {
  return (
    <PaymentProvider>
      <DashboardLayout>
        <Routes>
          <Route
            index
            element={
              <div className="space-y-8">
                <h1 className="text-3xl font-bold text-[#0A4747] mb-2">
                  Dashboard Overview
                </h1>
                <PaymentStats />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col justify-between">
                    <h2 className="text-xl font-semibold text-[#0A4747] mb-2">
                      Multi-Rail Payments
                    </h2>
                    <p className="text-[#64748B] mb-4">
                      Process payments across multiple channels, networks and methods
                      from a single API.
                    </p>
                    <a
                      href="/dashboard/payments"
                      className="self-end text-[#14B8A6] font-semibold hover:underline"
                    >
                      View Details &rarr;
                    </a>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col justify-between">
                    <h2 className="text-xl font-semibold text-[#0A4747] mb-2">
                      Retail Management
                    </h2>
                    <p className="text-[#64748B] mb-4">
                      Manage payment and merchants with a flexible, omni-channel
                      platform.
                    </p>
                    <a
                      href="/dashboard/retail-management"
                      className="self-end text-[#14B8A6] font-semibold hover:underline"
                    >
                      View Details &rarr;
                    </a>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col justify-between">
                    <h2 className="text-xl font-semibold text-[#0A4747] mb-2">
                      Fraud Prevention
                    </h2>
                    <p className="text-[#64748B] mb-4">
                      Protect your transactions with intelligent detection, flexible
                      rules and 24/7 support.
                    </p>
                    <a
                      href="/dashboard/fraud-prevention"
                      className="self-end text-[#14B8A6] font-semibold hover:underline"
                    >
                      View Details &rarr;
                    </a>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col justify-between">
                    <h2 className="text-xl font-semibold text-[#0A4747] mb-2">
                      Operation & Reconciliations
                    </h2>
                    <p className="text-[#64748B] mb-4">
                      Enables fast, secure and transparent cashouts with automated
                      reconciliation.
                    </p>
                    <a
                      href="/dashboard/reconciliation"
                      className="self-end text-[#14B8A6] font-semibold hover:underline"
                    >
                      View Details &rarr;
                    </a>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col justify-between md:col-span-2">
                    <h2 className="text-xl font-semibold text-[#0A4747] mb-2">
                      Reporting & Data
                    </h2>
                    <p className="text-[#64748B] mb-4">
                      Access real-time data to optimize payments, decisions and
                      strategies.
                    </p>
                    <a
                      href="/dashboard/reporting"
                      className="self-end text-[#14B8A6] font-semibold hover:underline"
                    >
                      View Details &rarr;
                    </a>
                  </div>
                </div>
              </div>
            }
          />
          <Route path="payments" element={<MultiRailPaymentsPage />} />
          <Route path="retail-management" element={<RetailManagementPage />} />
          <Route path="fraud-prevention" element={<FraudPreventionPage />} />
          <Route path="reconciliation" element={<ReconciliationPage />} />
          <Route path="reporting" element={<ReportingPage />} />
        </Routes>
      </DashboardLayout>
    </PaymentProvider>
  );
};

export default DashboardTransaction;