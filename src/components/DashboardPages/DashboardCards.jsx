import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../api/axiosInstance';
import { FaDollarSign, FaShoppingCart, FaUsers, FaBoxOpen } from 'react-icons/fa';

const DashboardCards = () => {
  const [summary, setSummary] = useState({
    totalSales: 0,
    totalOrders: 0,
    totalCustomers: 0,
    lowStockItems: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await axiosInstance.get('/reports/summary');
        setSummary(res.data?.data || res.data || summary);
      } catch (err) {
        // Fallback to /api/reports/summary if it has /api prefix missing in base url
        try {
          const res2 = await axiosInstance.get('/api/reports/summary');
          setSummary(res2.data?.data || res2.data || summary);
        } catch (e) {
          console.error("Failed to fetch summary reports");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchSummary();
  }, []);

  const cards = [
    {
      title: "Total Revenue",
      value: `$${(summary.totalSales || summary.revenue || 0).toLocaleString(undefined, {minimumFractionDigits: 2})}`,
      icon: <FaDollarSign size={24} className="text-success" />,
      bg: "bg-success-subtle",
      border: "border-success"
    },
    {
      title: "Total Orders",
      value: (summary.totalOrders || summary.orders || 0).toLocaleString(),
      icon: <FaShoppingCart size={24} className="text-primary" />,
      bg: "bg-primary-subtle",
      border: "border-primary"
    },
    {
      title: "Total Customers",
      value: (summary.totalCustomers || summary.customers || 0).toLocaleString(),
      icon: <FaUsers size={24} className="text-info" />,
      bg: "bg-info-subtle",
      border: "border-info"
    },
    {
      title: "Low Stock Items",
      value: (summary.lowStockItems || summary.lowStock || 0).toLocaleString(),
      icon: <FaBoxOpen size={24} className="text-warning" />,
      bg: "bg-warning-subtle",
      border: "border-warning"
    }
  ];

  return (
    <div className="row g-3">
      {cards.map((card, index) => (
        <div className="col-12 col-sm-6 col-xl-3" key={index}>
          <div className={`card shadow-sm border-0 border-start border-4 ${card.border} h-100 py-2`}>
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1 text-muted">
                    {card.title}
                  </div>
                  {loading ? (
                    <div className="spinner-border spinner-border-sm text-secondary" role="status"></div>
                  ) : (
                    <div className="h4 mb-0 fw-bold text-gray-800">{card.value}</div>
                  )}
                </div>
                <div className="col-auto">
                  <div className={`p-3 rounded-circle ${card.bg}`}>
                    {card.icon}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
