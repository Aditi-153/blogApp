import { useEffect, useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  // 🔥 Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.log("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-amber-50 min-h-screen">
      
      {/* 🔝 Navbar */}
      <nav className="bg-red-950 text-white px-10 py-4 flex justify-between items-center shadow-lg">
        <h1 className="text-xl font-bold text-red-500">BlogStack</h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#">Home</a>
          <a href="#">Explore</a>
          <a href="#">Categories</a>
        </div>

        <button className="bg-red-800 px-4 py-2 rounded-full">
          Write
        </button>
      </nav>

      {/* 🌟 Hero */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-red-950 mb-4">
          Share Your Thoughts With The World ✍️
        </h1>

        <p className="text-gray-600 mb-6">
          Discover, write, and connect through stories
        </p>

        <button className="bg-red-950 text-white px-6 py-3 rounded-full">
          Start Writing
        </button>
      </section>

      {/* 📰 Blog Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 px-6 md:px-10 py-10">
        {blogs.length === 0 ? (
          <p className="text-center col-span-3 text-gray-500">
            No blogs found...
          </p>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={blog.img}
                alt="blog"
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold text-red-950 text-lg mb-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-600 mb-3">
                  {blog.desc}
                </p>

                <span className="text-xs text-gray-500">
                  By {blog.author}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 🔻 Footer */}
      <footer className="bg-red-950 text-white text-center py-6 mt-10">
        <p className="text-sm opacity-70">
          © 2026 BlogStack • All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Home;