import React from 'react';
import HeaderDashboard from '../../components/DashboardPages/HeaderDashboard';
import DashboardCards from '../../components/DashboardPages/DashboardCards';
import SalesChart from '../../components/DashboardPages/SalesChart';
import TopProducts from '../../components/DashboardPages/TopProducts';
import PaymentMethodsChart from '../../components/DashboardPages/PaymentMethodsChart';

const Dashboard = () => {
  return (
    <div className="container-fluid p-0">
      <HeaderDashboard />
      
      <div className="row mb-4">
        <div className="col-12">
          <DashboardCards />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-lg-8 mb-4 mb-lg-0">
          <SalesChart />
        </div>
        <div className="col-lg-4">
          <PaymentMethodsChart />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <TopProducts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
