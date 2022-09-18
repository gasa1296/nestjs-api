import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { IProduct } from './interfaces/product.interface';
import { CreateProductDTO, UpdateProductDTO } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products') private readonly productModel: Model<IProduct>,
  ) {}
  async getProducts(): Promise<IProduct[]> {
    const products = await this.productModel.find();
    return products;
  }
  async getProduct(productId: string): Promise<IProduct> {
    const product = await this.productModel.findById(productId);
    return product;
  }
  async createProduct(createProductDTO: CreateProductDTO): Promise<IProduct> {
    const product = await new this.productModel(createProductDTO);
    return await product.save();
  }
  async updateProduct(
    productId: string,
    updateProductDTO: UpdateProductDTO,
  ): Promise<IProduct> {
    return await this.productModel.findByIdAndUpdate(
      productId,
      updateProductDTO,
    );
  }
  async deleteProduct(productId: string): Promise<IProduct> {
    return await this.productModel.findByIdAndDelete(productId);
  }
  async reduceStock(productId: string, quantity: number): Promise<IProduct> {
    const product = await this.productModel.findById(productId);
    if (product.stock) {
      product.stock = product.stock - quantity;
      return await this.productModel.findByIdAndUpdate(productId, product);
    }
    return product;
  }
}
