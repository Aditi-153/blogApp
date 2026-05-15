import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-amber-50 min-h-screen">

      {/* 🔥 Improved Navbar */}
      <nav className="bg-red-950 text-white px-10 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
        
        {/* Logo */}
        <h1 
          onClick={() => navigate("/home")}
          className="text-xl font-bold text-red-500 cursor-pointer hover:scale-105 transition"
        >
          BlogStack
        </h1>

        {/* Links */}
        <div className="space-x-8 hidden md:flex text-sm font-medium">
          <button onClick={() => navigate("/home")} className="hover:text-red-400 transition">
            Home
          </button>
          <button className="hover:text-red-400 transition">
            Explore
          </button>
          <button className="hover:text-red-400 transition">
            Categories
          </button>
          <button onClick={() => navigate("/create")} className="hover:text-red-400 transition">
            Create Blog
          </button>
        </div>

        {/* Write Button */}
        <button
          onClick={() => navigate("/create")}
          className="bg-gradient-to-r from-red-700 to-red-500 px-5 py-2 rounded-full hover:scale-105 active:scale-95 transition shadow-md"
        >
          Write ✍️
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-red-950 mb-4">
          Share Your Thoughts With The World ✍️
        </h1>

        <p className="text-gray-600 mb-6">
          Discover, write, and connect through stories
        </p>

        <button
          onClick={() => navigate("/create")}
          className="bg-red-950 text-white px-6 py-3 rounded-full hover:scale-105 transition shadow-lg"
        >
          Start Writing 🚀
        </button>
      </section>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 px-6 md:px-10 py-10">

        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300"
          >
            <img
              src="https://via.placeholder.com/400x200"
              alt="blog"
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold text-red-950 text-lg mb-2">
                Sample Blog Title
              </h3>

              <p className="text-sm text-gray-600 mb-3">
                This is a sample blog description to show UI layout.
              </p>

              <span className="text-xs text-gray-500">
                By Author Name
              </span>
            </div>
          </div>
        ))}

      </div>

      {/* Footer */}
      <footer className="bg-red-950 text-white text-center py-6 mt-10">
        <p className="text-sm opacity-70">
          © 2026 BlogStack • All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Home;