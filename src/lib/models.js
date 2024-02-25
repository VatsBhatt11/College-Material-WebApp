import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const fileSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
  },
  //   fileType: {
  //     type: String,
  //     required: true
  //   },
  //   fileContent: {
  //     type: Buffer, // Assuming you store file content as Buffer
  //     required: true
  //   },
  //   fileSize: {
  //     type: Number,
  //     required: true
  //   },
  userId: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
},{ timestamps: true });

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const File = mongoose.models?.File || mongoose.model("File", fileSchema);
// export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
