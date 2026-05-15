import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-red-950 text-white px-10 py-4 flex justify-between items-center shadow-lg">
      <h1
        onClick={() => navigate("/home")}
        className="text-xl font-bold text-red-500 cursor-pointer"
      >
        BlogStack
      </h1>

      <div className="space-x-6 hidden md:flex">
        <button onClick={() => navigate("/home")} className="hover:text-red-400 transition">Home</button>
        <button onClick={() => navigate("/explore")} className="hover:text-red-400 transition">Explore</button>
        <button className="hover:text-red-400 transition">Categories</button>
        <button onClick={() => navigate("/create")} className="hover:text-red-400 transition">Create Blog</button>
      </div>

      <button
        onClick={() => navigate("/create")}
        className="bg-red-800 px-4 py-2 rounded-full hover:bg-red-700 transition"
      >
        Write
      </button>
    </nav>
  );
};

export default Navbar;