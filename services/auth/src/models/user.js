import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // This automatically adds createdAt and updatedAt fields
  },
);

const User = model('User', userSchema);

export default User;
