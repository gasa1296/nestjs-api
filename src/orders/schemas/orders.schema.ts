import { Schema } from 'mongoose';
import { IOrder } from '../interfaces/order.interface';

export const OrderSchema = new Schema<IOrder>({
  user: { type: Schema.Types.ObjectId, ref: 'Users' },
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Products' },
      quantity: Number,
    },
  ],
  total: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
