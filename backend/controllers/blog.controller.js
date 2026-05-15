import Blog from "../models/blog.model";
import uploadFile from "../services/storage.service";

export const createBlog = async (req, res) => {
  try {
    const { title, content, category, image } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "fields are empty",
      });
    }

    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    let imageUrl = "";

    if (req.file) {
      imageUrl = await uploadFile(req.file);
    } 
    else if (image) {
      imageUrl = image;
    }

    const blog = await Blog.create({
      title,
      content,
      image: imageUrl,
      category,
      author: req.user._id,
    });

    return res.status(201).json({
      message: "blog created successfully",
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      message: "failed to create blog",
      error: error.message,
    });
  }
};

export const getBlogOfUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const blogs = await Blog.find({ author: userId });

    if (blogs.length ===0) {
      return res.status(404).json({
        message: "no blogs found for this user",
      });
    }
    return res.status(200).json({
      message: "blog found sucessfully",
      blogs,
    });
  } catch (error) {
    return res.status(500).json({
      message: "failed to get blog",
      error: error.message,
    });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const getBlog = await Blog.find();

    return res.status(200).json({
      message: "fetched successfully ",
      getBlog,
    });
  } catch (error) {
    return res.status(500).json({
      message: "failed to get blog",
      error: error.message,
    });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;

    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({
        message: "blog not found",
      });
    }

    return res.status(200).json({
      blog,
      message: "fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "failed to get blog",
      error: error.message,
    });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { title, content, image, category } = req.body;

    const blogId = req.params.id;

    const updatedblog = await Blog.findByIdAndUpdate(
      blogId,
      { title, content, image, category },
      { new: true, runValidators: true },
    );

    return res.status(200).json({
      message: "blog updated!",
      updatedblog,
    });
  } catch (error) {
    return res.status(500).json({
      message: "failed to update blog",
      error: error.message,
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;

    const deleteBlog = await Blog.findByIdAndDelete(blogId);

    if (!deleteBlog) {
      return res.status(404).json({
        message: "blog not found",
      });
    }

    return res.status(200).json({
      message: "blog deleted !",
    });
  } catch (error) {
    return res.status(500).json({
      message: "failed to delete blog",
      error: error.message,
    });
  }
};
