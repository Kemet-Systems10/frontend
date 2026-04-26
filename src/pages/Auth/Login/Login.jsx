import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CiUser } from "react-icons/ci";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { z } from "zod";
import style from "./Login.module.css";
const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      className={`d-flex justify-content-center align-items-center ${style["login-page"]}`}
    >
      <div className={`${style.authContent} text-center`}>
        <div className="info">
          <div className={`${style.logo} mb-3`}>
            <CiUser size={50} />
          </div>

          <h4 className="fw-bold">Welcome Back</h4>
          <p className="text-muted small">
            Sign in to your Restaurant POS account
          </p>
        </div>

        <div className={` ${style["login-card"]} text-center p-4 shadow`}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 text-start">
              <label className="form-label fs-14">Email Address</label>
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  className="form-control"
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>

            <div className="mb-3 text-start">
              <label className="form-label fs-14">Password</label>
              <div className="input-group">
                <span className="input-group-text  bg-white">
                  <FaLock />
                </span>
                <input
                  type="password"
                  className="form-control"
                  {...register("password")}
                />
              </div>
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
            </div>

            <button type="submit" className="btn text-white btn-orange w-100 mb-3">
              Login
            </button>
          </form>

          <p className="small mb-0">
            Don&apos;t have an account?{" "}
            <Link to="/auth/register" className="text-orange">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
