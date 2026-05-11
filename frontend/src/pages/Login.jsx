import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [loading, setLoading] = useState(false);
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    const { email, password } = FormData;

    if (!email || !password) {
      toast.error("fields are empty");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        import.meta.env.VITE_LOGIN_URL,
        { email, password },
        { withCredentials: true },
      );

      console.log(res.data.user);

      toast.success("Login successful");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <div className="w-full max-w-sm p-[2px] rounded-2xl bg-red-950 shadow-[0_20px_60px_rgba(127,29,29,0.6)]">
        <div className="bg-red-950/95 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-3xl font-semibold text-white text-center mb-8 tracking-wide">
            Welcome Back
          </h2>

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div className="space-y-1">
              <label className="text-sm text-white/80">Email</label>
              <input
                type="email"
                name="email"
                value={FormData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 mt-2 rounded-lg bg-amber-50 text-red-950 placeholder-red-950/50 focus:outline-none focus:ring-2 focus:ring-amber-50"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-white/80">Password</label>
              <input
                type="password"
                name="password"
                value={FormData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 mt-2 rounded-lg bg-amber-50 text-red-950 placeholder-red-950/50 focus:outline-none focus:ring-2 focus:ring-amber-50"
              />
            </div>

            <button
              type="submit"
              onClick={() => {
                toast.promise(handleLogin(), {
                  error: (error) => `${error?.response?.data?.message}`,
                });
              }}
              disabled={loading}
              className="w-full bg-red-800 text-white mt-3 py-2.5 rounded-lg font-semibold tracking-wide hover:bg-red-700 hover:scale-[1.02] active:scale-[0.98] transition duration-200 shadow-lg shadow-red-900/40"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-sm text-white/70 text-center mt-6">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-red-200 hover:text-red-300 underline ml-1"
            >
              register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
