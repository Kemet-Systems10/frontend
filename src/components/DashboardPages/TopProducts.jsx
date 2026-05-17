import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../api/axiosInstance';

const TopProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const res = await axiosInstance.get('/reports/top-products');
        setProducts(res.data?.data || res.data || []);
      } catch (err) {
        try {
          const res2 = await axiosInstance.get('/api/reports/top-products');
          setProducts(res2.data?.data || res2.data || []);
        } catch (e) {
          setProducts([]);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchTopProducts();
  }, []);

  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-header bg-white py-3">
        <h6 className="m-0 font-weight-bold text-primary fw-bold">Top Selling Products</h6>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th className="px-4">Product Name</th>
                <th>Quantity Sold</th>
                <th>Total Revenue</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="3" className="text-center py-4">
                    <div className="spinner-border text-primary spinner-border-sm" role="status"></div>
                  </td>
                </tr>
              ) : products.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center py-4 text-muted">No data available</td>
                </tr>
              ) : (
                products.map((item, index) => (
                  <tr key={item._id || item.id || index}>
                    <td className="px-4 fw-medium">{item.name || item.productName || 'Unknown Product'}</td>
                    <td>{item.sold || item.quantity || item.count || 0} units</td>
                    <td className="text-success fw-bold">${(item.revenue || item.totalRevenue || 0).toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
