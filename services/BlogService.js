const { connectToDb } = require("../utils");
const Blog = require("../models/Blog");
const ObjectId = require("mongodb").ObjectId;

let client, db;
(async () => {
  client = await connectToDb();
  db = client.db("praveen");
})();

exports.getAllBlogs = async () => {
  const blogs = await db.collection("blogs").find().toArray();
  return blogs;
};

exports.createBlog = async (blog) => {
  blog = new Blog(blog);
  const result = await db.collection("blogs").insertOne(blog);
  return result;
};

exports.getBlogById = async (id) => {
  id = new ObjectId(id);
  console.log(id);
  return await db.collection("blogs").findOne({ _id: id });
};

exports.updateBlog = async (id, blog) => {
  id = new ObjectId(id);
  const updateResponse = await db.collection("blogs").findOneAndUpdate(
    { _id: id },
    { $set: blog },
    { returnOriginal: true }
  );
  return updateResponse;
};

exports.deleteBlog = async (id) => {
  id = new ObjectId(id);
  return await db.collection("blogs").deleteOne({ _id: id });
};
