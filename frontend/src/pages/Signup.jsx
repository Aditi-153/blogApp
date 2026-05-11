import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    setLoading(true);
    try {
      await axios.post(
        import.meta.env.VITE_REGISTER_URL,
        {
          ...FormData,
        },
        { withCredentials: true },
      );

      toast.success("Signup successful");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-amber-50">
        <div className="w-[850px] h-[520px] bg-white rounded-2xl shadow-2xl flex overflow-hidden shadow-[0_20px_80px_rgba(127,29,29,0.6)]">
          <div className="w-1/2 bg-red-950 text-white flex flex-col items-center justify-center p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Welcome to <span className="text-red-500">BlogStack</span>
            </h2>
            <p className="text-sm mb-6 opacity-90">
              To keep connected with us please login with your personal info
            </p>

            <Link
              to="/login"
              className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-red-950 transition"
            >
              Login
            </Link>
          </div>

          <div className="w-1/2 flex flex-col justify-center px-10">
            <p className="text-red-950 mb-5 text-shadow-lg">
              -- Start sharing your thoughts with the world --
            </p>
            <h2 className="text-2xl font-bold text-red-900 mb-6 text-center">
              Create Account
            </h2>

            <form className="space-y-4">
              <input
                name="name"
                value={FormData.name}
                onChange={handleChange}
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                name="email"
                value={FormData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                name="phone"
                value={FormData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                name="password"
                value={FormData.password}
                onChange={handleChange}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <button
              type="submit"
                onClick={() => {
                  toast.promise(handleSignup(), {
                    error: (error) => `${error?.response?.data?.message}`,
                  });
                }}
                disabled={loading}
                className="w-full bg-red-950 text-white py-2 rounded-full hover:bg-red-900 transition"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
