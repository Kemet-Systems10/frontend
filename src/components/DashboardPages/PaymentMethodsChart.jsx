import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../api/axiosInstance';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const PaymentMethodsChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const COLORS = ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b'];

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        const res = await axiosInstance.get('/reports/payment-methods');
        let chartData = res.data?.data || res.data || [];
        setData(Array.isArray(chartData) ? chartData : []);
      } catch (err) {
        try {
          const res2 = await axiosInstance.get('/api/reports/payment-methods');
          let chartData = res2.data?.data || res2.data || [];
          setData(Array.isArray(chartData) ? chartData : []);
        } catch (e) {
          setData([]);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPaymentMethods();
  }, []);

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-header bg-white py-3">
        <h6 className="m-0 font-weight-bold text-primary fw-bold">Payment Methods</h6>
      </div>
      <div className="card-body">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        ) : (
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} transactions`, 'Count']} />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethodsChart;
