import mongoose from "mongoose";

const leadFormSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        type: String,
        default: "Agent",
      },
    ],
    status: {
      type: Boolean,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const LeadForm = mongoose.model("LeadForm", leadFormSchema);

export default LeadForm;
