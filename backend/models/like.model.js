import mongoose from "mongoose";

const likeSchema = new mongoose.model(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
  },
  { timestamps: true },
);

likeSchema.index({ user: 1, blog: 1 }, { unique: true });

export default mongoose.model("Like", likeSchema);
