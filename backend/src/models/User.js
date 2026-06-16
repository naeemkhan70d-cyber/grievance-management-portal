const mongoose = require("mongoose");

const userSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },

      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
      },

      password: {
        type: String,
        required: true,
      },

      status: {
        type: String,
        enum: [
          "pending",
          "approved",
          "rejected",
        ],
        default: "pending",
      },

      role: {
        type: String,
        enum: [
          "citizen",
          "officer",
          "admin",
        ],
      },
    },
    {
      timestamps: true,
    }
  );

const User = mongoose.model(
  "User",
  userSchema
);

module.exports = User;