import { IUser } from 'src/users/interfaces/user.interface';
import { Document } from 'mongoose';
import { IProduct } from 'src/products/interfaces/product.interface';

export interface IOrder extends Document {
  user: IUser;
  products: [{ product: IProduct; quantity: number }];
  total: number;
  createdAt: Date;
}
