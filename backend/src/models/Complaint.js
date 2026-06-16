const mongoose = require("mongoose");

const complaintSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },

      description: {
        type: String,
        required: true,
        trim: true,
      },

      category: {
        type: String,
        required: true,
        trim: true,
      },

      status: {
        type: String,
        enum: [
          "pending",
          "assigned",
          "in-progress",
          "resolved",
          "closed",
        ],
        default: "pending",
      },

      citizenId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      assignedOfficer: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
      },

      assignedAt: {
        type: Date,
        default: null,
      },

      resolutionNote: {
        type: String,
        default: null,
        trim: true,
      },

      resolvedAt: {
        type: Date,
        default: null,
      },

      timeline: [
        {
          status: {
            type: String,
            required: true,
          },

          updatedBy: {
            type: String,
            required: true,
          },

          note: {
            type: String,
            default: null,
          },

          updatedAt: {
            type: Date,
            default: Date.now,
          },
        },
      ],
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Complaint",
    complaintSchema
  );