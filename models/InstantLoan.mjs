import mongoose from "mongoose";

const InstantLoanSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    lead_name: {
      type: String,
      required: true,
    },
    fathers_name: {
      type: String,
      required: true,
    },
    mothers_name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    pancard_no: {
      type: String,
      required: true,
    },
    aadhar_no: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
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
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const InstantLoan = mongoose.model("InstantLoan", InstantLoanSchema);

export default InstantLoan;
