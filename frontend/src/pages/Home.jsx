const Home = () => {
  
  return (
    <div className="bg-amber-50 min-h-screen">
      <nav className="bg-red-950 text-white px-10 py-4 flex justify-between items-center shadow-lg">
        <h1 className="text-xl font-bold text-red-500">BlogStack</h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#">Home</a>
          <a href="#">Explore</a>
          <a href="#">Categories</a>
        </div>

        <button className="bg-red-800 px-4 py-2 rounded-full">Write</button>
      </nav>

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

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 px-6 md:px-10 py-10">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
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
            <span className="text-xs text-gray-500">By Author Name</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="blog"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-red-950 text-lg mb-2">
              Another Blog Title
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              UI preview card without backend logic.
            </p>
            <span className="text-xs text-gray-500">By John Doe</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="blog"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-red-950 text-lg mb-2">
              UI Only Blog Card
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Replace with dynamic data later.
            </p>
            <span className="text-xs text-gray-500">By Admin</span>
          </div>
        </div>
      </div>

      <footer className="bg-red-950 text-white text-center py-6 mt-10">
        <p className="text-sm opacity-70">
          © 2026 BlogStack • All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Home;
