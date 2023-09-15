import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [ClientsModule],
  providers: [],
  controllers: [],
})
export class AppModule {}
