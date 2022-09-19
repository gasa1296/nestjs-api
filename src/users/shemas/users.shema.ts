import { Schema } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

export const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: Number, default: 1 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
