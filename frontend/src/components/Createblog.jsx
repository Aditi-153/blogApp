import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="min-h-screen bg-amber-50">

      {/* 🔥 Navbar — same as Home */}
      <nav className="bg-red-950 text-white px-10 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
        <h1
          onClick={() => navigate("/home")}
          className="text-xl font-bold text-red-500 cursor-pointer hover:scale-105 transition"
        >
          BlogStack
        </h1>

        <div className="space-x-8 hidden md:flex text-sm font-medium">
          <button onClick={() => navigate("/home")} className="hover:text-red-400 transition">
            Home
          </button>
          <button className="hover:text-red-400 transition">Explore</button>
          <button className="hover:text-red-400 transition">Categories</button>
          <button onClick={() => navigate("/create")} className="hover:text-red-400 transition">Create Blog</button>
        </div>

        <button
          onClick={() => navigate("/create")}
          className="bg-gradient-to-r from-red-700 to-red-500 px-5 py-2 rounded-full hover:scale-105 active:scale-95 transition shadow-md"
        >
          Write ✍️
        </button>
      </nav>

      {/* Hero Header */}
      <section className="text-center pt-14 pb-8 px-4">
        <span className="inline-block bg-red-950 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
          ✦ New Post
        </span>
        <h1 className="text-4xl font-bold text-red-950 mb-3">
          Create Your Blog ✍️
        </h1>
        <p className="text-gray-600">
          Share your thoughts, ideas, and stories with the world
        </p>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 md:px-10 pb-16">

        {/* ── LEFT: Form Card ── */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8 border border-red-100">

          <form className="space-y-6">

            {/* Title */}
            <div>
              <label className="text-xs font-bold text-red-950 uppercase tracking-wider mb-2 block">
                Post Title
              </label>
              <input
                type="text"
                placeholder="Enter your blog title..."
                className="w-full px-4 py-3 rounded-xl bg-gray-100 text-red-950 placeholder-red-950/40 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-xs font-bold text-red-950 uppercase tracking-wider mb-2 block">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {["Technology", "Travel", "Lifestyle", "Education", "Food", "Health", "Finance", "Art", "Other"].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-sm border active:scale-95 transition duration-200 ${
                      selectedCategory === cat
                        ? "bg-red-950 text-white border-red-950 shadow-md shadow-red-900/20"
                        : "border-red-200 text-red-950 bg-amber-50 hover:bg-red-950 hover:text-white hover:border-red-950"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-red-100" />

            {/* Image URL */}
            <div>
              <label className="text-xs font-bold text-red-950 uppercase tracking-wider mb-2 block">
                Cover Image
              </label>
              <input
                type="text"
                placeholder="Paste image URL here..."
                className="w-full px-4 py-3 rounded-xl bg-gray-100 text-red-950 placeholder-red-950/40 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              />

              {/* OR divider */}
              <div className="flex items-center gap-3 my-3">
                <div className="flex-1 border-t border-red-100" />
                <span className="text-xs font-semibold text-gray-400 uppercase">or</span>
                <div className="flex-1 border-t border-red-100" />
              </div>

              {/* File upload */}
              <label className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-gray-100 border-2 border-dashed border-red-200 hover:border-red-400 hover:bg-red-50 cursor-pointer transition duration-200">
                <span className="text-xl">📁</span>
                <span className="text-sm text-red-950/60 font-medium">Upload from your PC</span>
                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>

            {/* Blog Content */}
            <div>
              <label className="text-xs font-bold text-red-950 uppercase tracking-wider mb-2 block">
                Blog Content
              </label>
              <textarea
                rows={8}
                placeholder="Start writing your story..."
                className="w-full px-4 py-3 rounded-xl bg-gray-100 text-red-950 placeholder-red-950/40 focus:outline-none focus:ring-2 focus:ring-red-400 transition resize-none"
              />
            </div>

            {/* Divider */}
            <div className="border-t border-red-100" />

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-2">
              <button
                type="button"
                onClick={() => navigate("/home")}
                className="px-6 py-2.5 rounded-full border border-red-950 text-red-950 font-medium hover:bg-red-950 hover:text-white active:scale-95 transition duration-200"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="bg-gradient-to-r from-red-950 to-red-700 text-white px-8 py-2.5 rounded-full font-semibold hover:scale-105 active:scale-95 transition duration-200 shadow-lg shadow-red-900/30"
              >
                Publish 🚀
              </button>
            </div>

          </form>
        </div>

        {/* ── RIGHT: Sidebar ── */}
        <div className="space-y-6">

          {/* Upload Cover Image */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border border-red-100">
            <label className="text-xs font-bold text-red-950 uppercase tracking-wider mb-3 block">
              Cover Image 🖼️
            </label>

            <div className="w-full h-48 flex flex-col items-center justify-center border-2 border-dashed border-red-300 rounded-xl text-red-400 hover:border-red-500 hover:bg-red-50 transition duration-200 cursor-pointer">
              <span className="text-3xl mb-2">📷</span>
              <p className="text-sm font-medium">Drag & drop or click to upload</p>
              <span className="text-xs text-gray-400 mt-1">JPG, PNG, WebP</span>
            </div>

            <p className="text-xs text-gray-500 mt-3 text-center">
              Recommended: 1200 × 630 px
            </p>
          </div>

          {/* Trending Blogs */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border border-red-100">
            <h3 className="text-xs font-bold text-red-950 uppercase tracking-wider mb-4">
              🔥 Trending on BlogStack
            </h3>

            <div className="space-y-4">
              {/* Fake Blog 1 */}
              <div className="group cursor-pointer">
                <div className="w-full h-28 rounded-xl bg-gradient-to-br from-red-200 to-amber-100 flex items-center justify-center overflow-hidden mb-2">
                  <span className="text-4xl group-hover:scale-110 transition duration-300">🚀</span>
                </div>
                <h4 className="text-sm font-bold text-red-950 group-hover:text-red-700 transition">
                  10 Tips to Write Better Blogs
                </h4>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-gray-400">By Aditi • 2 days ago</span>
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">Technology</span>
                </div>
              </div>

              <div className="border-t border-red-100" />

              {/* Fake Blog 2 */}
              <div className="group cursor-pointer">
                <div className="w-full h-28 rounded-xl bg-gradient-to-br from-amber-200 to-red-100 flex items-center justify-center overflow-hidden mb-2">
                  <span className="text-4xl group-hover:scale-110 transition duration-300">✈️</span>
                </div>
                <h4 className="text-sm font-bold text-red-950 group-hover:text-red-700 transition">
                  My Journey Through the Mountains
                </h4>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-gray-400">By Rahul • 5 days ago</span>
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">Travel</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-red-950 text-white text-center py-6">
        <p className="text-sm opacity-70">
          © 2026 BlogStack • All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default CreateBlog;