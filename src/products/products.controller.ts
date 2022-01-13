import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductDto } from './produc';

import { productsService } from './products.service';

@Controller('api/products')
export class ProductsController {
  constructor(private productsService: productsService) {}

  @Get('')
  //@Roles(Role.User)
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.productsService.findAll();
  }
  @Get(':id')
  //@Roles(Role.User)
  @HttpCode(HttpStatus.OK)
  findById(@Param('id') id: string) {
    //findById(@Param('id', VerifyStringPipe) id: string) {
    return this.productsService.getById(id);
  }
  @Post('')
  //@Roles(Role.Manager)
  @HttpCode(HttpStatus.CREATED)
  createProducts(@Body() createdDto: ProductDto) {
    return this.productsService.create(createdDto);
  }

  @Put(':id')
  // @Roles(Role.User)
  @HttpCode(HttpStatus.OK)
  updateProducts(
    @Param('id') id: string, //@Param('id', VerifyIntPipe) id: string,
    @Body() putDto: ProductDto,
  ) {
    return this.productsService.updateProduct(id, putDto);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteProducts(@Param('id') id: string) {
    // deleteProducts(@Param('id', VerifyIntPipe) id: string) {
    return this.productsService.delete(id);
  }
}
