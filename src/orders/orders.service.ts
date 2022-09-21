import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { CreateOrderDTO } from './dto/order.dto';
import { IOrder } from './interfaces/order.interface';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel('Orders') private readonly orderModel: Model<IOrder>,
    private usersService: UsersService,
  ) {}

  async getOrders(): Promise<IOrder[]> {
    return await this.orderModel.find();
  }
  async getOrder(orderId: string): Promise<IOrder> {
    return await this.orderModel.findById(orderId).populate('user').exec();
  }
  async createOrder(createOrderDTO: CreateOrderDTO): Promise<IOrder> {
    const order = new this.orderModel(createOrderDTO);
    return await order.save();
  }
  async updateOrder(
    orderId: string,
    createOrderDTO: CreateOrderDTO,
  ): Promise<IOrder> {
    return await this.orderModel.findByIdAndUpdate(orderId, createOrderDTO);
  }
  async deleteOrder(orderId: string): Promise<IOrder> {
    return await this.orderModel.findByIdAndDelete(orderId);
  }
}
