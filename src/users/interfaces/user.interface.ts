import { Document } from 'mongoose';
import { IOrder } from 'src/orders/interfaces/order.interface';

export interface IUser extends Document {
  readonly email: string;
  readonly password: string;
  readonly role: number;
  readonly orders: IOrder[];
  readonly createdAt: Date;
}
