import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [
    ClienteModule,
    MongooseModule.forRoot('mongodb://localhost:27017/api4per'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
