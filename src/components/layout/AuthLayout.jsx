import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="auhLayout">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
