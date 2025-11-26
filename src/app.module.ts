import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  MongooseModule.forRoot('mongodb+srv://keirmauz:Godzila23@cluster0.yvdjajg.mongodb.net/Productos'),
  ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
