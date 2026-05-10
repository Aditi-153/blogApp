import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./routes/auth.routes.js";
import blogRoute from "./routes/blog.routes.js";

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL || "mongodb://127.0.0.1:27017/blog")
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/user", userRoute)
app.use("/blog", blogRoute)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
