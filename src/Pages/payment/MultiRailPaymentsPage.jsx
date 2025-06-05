import React from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import DashboardLayout from '../../component/layout/DashboardTransaction';
import MultiRailPayments from '../../component/payment/MultiRailPayments';

const MultiRailPaymentsPage = () => {
  return (
    <ThemeProvider>
      <PaymentProvider>
        <DashboardLayout>
          <MultiRailPayments />
        </DashboardLayout>
      </PaymentProvider>
    </ThemeProvider>
  );
};

export default MultiRailPaymentsPage;