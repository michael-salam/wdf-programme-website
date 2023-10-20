import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
      min: 2,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
      min: 2,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      min: 2,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    review: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
