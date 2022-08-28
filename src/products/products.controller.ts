import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';

@Controller('products')
export class ProductsController {
  @Post('/create')
  createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    //console.log(createProductDTO);
    return res.status(HttpStatus.OK).json({
      message: 'received',
    });
  }
}
