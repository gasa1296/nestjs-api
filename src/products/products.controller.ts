import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateProductDTO, UpdateProductDTO } from './dto/product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get('/')
  async getProducts() {
    return await this.productService.getProducts();
  }

  @Get('/:productId')
  async getProduct(@Param('productId') productId: string) {
    return await this.productService.getProduct(productId);
  }

  @Post('/create')
  async createProduct(@Body() createProductDTO: CreateProductDTO) {
    return await this.productService.createProduct(createProductDTO);
  }

  @Put('/update/:productId')
  async updateProduct(
    @Param('productId') productId: string,
    @Body() updateProductDTO: UpdateProductDTO,
  ) {
    return await this.productService.updateProduct(productId, updateProductDTO);
  }

  @Delete('delete/:productId')
  async deleteProduct(@Param('productId') productId: string) {
    return await this.productService.deleteProduct(productId);
  }
}
