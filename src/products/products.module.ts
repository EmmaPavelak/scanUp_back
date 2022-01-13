import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { productsService } from './products.service';

@Module({
  imports: [HttpModule],
  providers: [productsService],
  exports: [productsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
