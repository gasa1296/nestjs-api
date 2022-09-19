import { Document } from 'mongoose';
import { IOrder } from 'src/orders/interfaces/order.interface';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  stock: number;
  orders: IOrder[];
  readonly createdAt: Date;
}
