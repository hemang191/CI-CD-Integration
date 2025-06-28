const monoose = require("mongoose");

const link = process.env.MONGO_URI || "mongodb://localhost:27017/";

const connectDB = async () => {
  try {
    await monoose.connect(link);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = { connectDB };
