import express from "express"

import { createBlog, deleteBlog, updateBlog } from "../controllers/blog.controller";
import { userProtect } from "../middleware/user.middleware";


const router = express.Router();


router.post("/create-blog", userProtect , createBlog);
router.patch("/edit-blog/:id" ,userProtect, updateBlog  );
router.delete("/delete-blog/:id" ,userProtect, deleteBlog  );

export default router;