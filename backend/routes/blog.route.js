import express from "express";
import upload from "../middleware/upload.middleware";

import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  getBlogOfUser,
  updateBlog,
} from "../controllers/blog.controller";
import { userProtect } from "../middleware/user.middleware";

const router = express.Router();

//create new blog
router.post("/create-blog", userProtect,upload.single("image"), createBlog);

//get all blog of specific user(author id)
router.get("/get-user-blog/:id", userProtect, getBlogOfUser);

//get all blogs of loggedin user
router.get("/blogs", userProtect, getAllBlogs);

//getsingle blog by id
router.get("/get-blog/:id", userProtect, getBlogById);

//update blog by id (id)
router.patch("/edit-blog/:id", userProtect,upload.single("image"), updateBlog);

//delete blog by id 
router.delete("/delete-blog/:id", userProtect, deleteBlog);

export default router;
