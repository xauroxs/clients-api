import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Client } from './client.schema';

import { ClientsService } from './clients.service';

import { CreateClientDTO } from './dto/create-client.dto';
import { UpdateClientDTO } from './dto/update-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {}

  @Get()
  getAllClients(): Promise<Client[]> {
    return this.clientsService.getAllClients();
  }

  @Get(':id')
  getClientById(@Param('id') id: string): Promise<Client> {
    return this.clientsService.getClientById(id);
  }

  @Post()
  createClient(@Body() createClientDto: CreateClientDTO): Promise<Client> {
    return this.clientsService.createClient(createClientDto);
  }

  @Delete(':id')
  deleteClient(@Param('id') id: string): Promise<Client> {
    return this.clientsService.deleteClient(id);
  }

  @Put(':id')
  updateClient(
    @Param('id') id: string,
    @Body() updateClientDto: UpdateClientDTO,
  ): Promise<Client> {
    return this.clientsService.updateClient(id, updateClientDto);
  }
}
