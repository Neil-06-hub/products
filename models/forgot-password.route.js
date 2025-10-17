const mongoose = require("mongoose");

const forgotPasswordSchema = new mongoose.Schema(
  {
    email: String,
    opt: String,
    expireAt: {
      type: Date,
      expires: 180   // expireAt có sẵn trong express để khi hết tgian tự động xoá
    }   
  },
  {
    timestamps: true,
  }
);

const ForgotPassword = mongoose.model("ForgotPassword", forgotPasswordSchema, "forgot-password");

module.exports = ForgotPassword;
