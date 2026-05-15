const CreateBlog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-red-100 px-4 py-12">
      
      <div className="w-full max-w-3xl mx-auto bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-red-200">
        
        {/* Header */}
        <h2 className="text-3xl font-bold text-red-950 text-center mb-2">
          Create New Blog ✍️
        </h2>
        <p className="text-center text-red-800 text-sm mb-8">
          Share your thoughts with the world
        </p>

        {/* Form */}
        <form className="space-y-5">

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-red-900 mb-1">
              Blog Title
            </label>
            <input
              type="text"
              placeholder="Enter blog title"
              className="w-full px-4 py-2 rounded-lg bg-amber-50 border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-white transition"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-red-900 mb-1">
              Image URL
            </label>
            <input
              type="text"
              placeholder="Paste image link"
              className="w-full px-4 py-2 rounded-lg bg-amber-50 border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-white transition"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-red-900 mb-1">
              Category
            </label>
            <select className="w-full px-4 py-2 rounded-lg bg-amber-50 border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 transition">
              <option>Technology</option>
              <option>Travel</option>
              <option>Lifestyle</option>
              <option>Education</option>
              <option>Food</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-red-900 mb-1">
              Short Description
            </label>
            <textarea
              rows="3"
              placeholder="Write a short summary..."
              className="w-full px-4 py-2 rounded-lg bg-amber-50 border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-white transition"
            ></textarea>
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-red-900 mb-1">
              Blog Content
            </label>
            <textarea
              rows="6"
              placeholder="Write your full blog here..."
              className="w-full px-4 py-2 rounded-lg bg-amber-50 border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-white transition"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center pt-6">
            <button
              type="button"
              className="px-5 py-2 rounded-full border border-red-900 text-red-900 hover:bg-red-900 hover:text-white transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-red-900 to-red-700 text-white hover:scale-[1.03] active:scale-[0.97] transition shadow-lg"
            >
              Publish Blog
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateBlog;