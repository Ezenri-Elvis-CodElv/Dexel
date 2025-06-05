// src/pages/OverviewPage.tsx
import React from 'react';
import MultiRailPayments from '../components/payments/MultiRailPayments';
import FraudPrevention from '../components/fraud/FraudPrevention';
import RetailManagement from '../components/retail/RetailManagement';
import Reconciliation from '../components/reconciliation/Reconciliation';
import Reporting from '../components/reporting/Reporting';

const OverviewPage = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MultiRailPayments />
        <FraudPrevention />
      </div>
      <RetailManagement />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Reconciliation />
        <Reporting />
      </div>
    </div>
  );
};

export default OverviewPage;

