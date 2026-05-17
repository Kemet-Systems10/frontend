import React from 'react';

const HeaderDashboard = () => {
  return (
    <header className="d-flex justify-content-between align-items-center bg-white p-3 rounded mb-4 shadow-sm">
      <div>
        <h5 className="fw-bold fs-2 text-dark mb-1">Dashboard Overview</h5>
        <p className="text-muted mb-0">Track your restaurant's performance and analytics</p>
      </div>
      <div>
        <button className="btn btn-primary" onClick={() => window.location.reload()}>
          Refresh Data
        </button>
      </div>
    </header>
  );
};

export default HeaderDashboard;
