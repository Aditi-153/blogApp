import express, { Router } from "express"
import { loginUser, registerUser, userLogout, userProfile } from "../controllers/auth.controller"
import { userProtect } from "../middleware/user.middleware";



const router = express.Router();

router.post("/register" , registerUser );
router.post("/login" , loginUser );
router.get("/profile/:id" ,userProtect, userProfile );
router.get("/logout/:id" ,userProtect, userLogout );
router.get("/profile" ,userProtect, userProfile );

export default router;