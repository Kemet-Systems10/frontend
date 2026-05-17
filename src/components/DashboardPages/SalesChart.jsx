import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../api/axiosInstance';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SalesChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const res = await axiosInstance.get('/reports/sales-chart');
        let chartData = res.data?.data || res.data || [];
        setData(Array.isArray(chartData) ? chartData : []);
      } catch (err) {
        try {
          const res2 = await axiosInstance.get('/api/reports/sales-chart');
          let chartData = res2.data?.data || res2.data || [];
          setData(Array.isArray(chartData) ? chartData : []);
        } catch (e) {
          setData([]);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchSalesData();
  }, []);

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-header bg-white py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary fw-bold">Revenue Overview</h6>
      </div>
      <div className="card-body">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        ) : (
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <AreaChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
                <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                <Area type="monotone" dataKey="sales" stroke="#4e73df" fill="#4e73df" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalesChart;
