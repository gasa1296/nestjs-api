import { Schema } from 'mongoose';
import { IProduct } from '../interfaces/product.interface';

export const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number },
  orders: [{ type: Schema.Types.ObjectId, ref: 'Orders' }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
