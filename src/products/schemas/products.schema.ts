import { Schema } from 'mongoose';
import { IProduct } from '../interfaces/product.interface';

export const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
