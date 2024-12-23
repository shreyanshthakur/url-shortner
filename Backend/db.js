const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const myConnection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected: $(myConnection.connection.host");
  } catch (e) {
    console.error("MongoDB connection error", e);
  }
};
module.exports = connectDB;
