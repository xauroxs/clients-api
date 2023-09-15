import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/clients-db'),
    ClientsModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
