import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    minLength: [3, "Name must be at least 3 characters"],
    maxLength: [20, "Name must be less than 20 characters"]
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    validate: [validator.isEmail, "Please enter a valid email"]
  },
  subject: {
    type: String,
    required: [true, "Please enter your subject"],
    minLength: [5, "Subject must be at least 3 characters"],

  },
  message: {
    type: String,
    required: [true, "Please enter your message"],
    minLength: [5, "Message must be at least 5 characters"],
  }

})

const Message = mongoose.model("Message", messageSchema);
export default Message;