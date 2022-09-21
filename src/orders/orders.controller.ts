import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateOrderDTO } from './dto/order.dto';
import { IOrder } from './interfaces/order.interface';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Get('/')
  async getOrders(): Promise<IOrder[]> {
    return await this.orderService.getOrders();
  }
  @Get('/:orderId')
  async getOrder(@Param('orderId') orderId: string): Promise<IOrder> {
    return await this.orderService.getOrder(orderId);
  }
  @Post('/')
  async createOrder(@Body() createOrderDTO: CreateOrderDTO): Promise<IOrder> {
    const order = await this.orderService.createOrder(createOrderDTO);
    return order;
  }
  @Put('/:orderId')
  async updateOrder(
    @Param('orderId') orderId: string,
    @Body() createOrderDTO: CreateOrderDTO,
  ): Promise<IOrder> {
    return await this.orderService.updateOrder(orderId, createOrderDTO);
  }
  @Delete('/:orderId')
  async deleteOrder(@Param('orderId') orderId: string): Promise<IOrder> {
    return await this.orderService.deleteOrder(orderId);
  }
}
