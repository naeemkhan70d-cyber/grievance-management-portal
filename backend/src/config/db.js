const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting MongoDB...");

    await mongoose.connect(
      process.env.MONGODB_URI
    );

    console.log(
      "MongoDB Connected Successfully"
    );
  } catch (error) {
    console.error(
      "Mongo Error:",
      error
    );
    process.exit(1);
  }
};

module.exports = connectDB;