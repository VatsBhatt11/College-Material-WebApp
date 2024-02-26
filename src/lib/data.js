import { User, File } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 2, title: "Post 2", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 2 },
//   { id: 4, title: "Post 4", body: "......", userId: 2 },
// ];

// import { GridFSBucket, ObjectId } from 'mongodb';
// import { getClient } from './mongodb';

// export const getFiles = async () => {
//   try {
//     const client = await getClient();
//     const db = client.db();
//     const bucket = new GridFSBucket(db);
//     const files = await bucket.find().toArray();
//     return files;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch files!");
//   }
// };

// export const getFile = async (fileId) => {
//   try {
//     const client = await getClient();
//     const db = client.db();
//     const bucket = new GridFSBucket(db);
//     const file = await bucket.find({ _id: new ObjectId(fileId) }).next();
//     return file;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch file!");
//   }
// };

// Implementing CRUD operations for users is not affected by GridFS, so you can keep them unchanged.


export const getFiles = async () => {
  try {
    connectToDb();
    const files = await File.find();
    return files;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch files!");
  }
};

export const getFile = async (slug) => {
  try {
    connectToDb();
    const file = await File.findOne({ slug });
    return file;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch file!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
