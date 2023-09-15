import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import { Client } from './client.schema';

import { CreateClientDTO } from './dto/create-client.dto';
import { UpdateClientDTO } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name)
    private clientModel: mongoose.Model<Client>,
  ) {}

  async getAllClients(): Promise<Client[]> {
    const clients = await this.clientModel.find();

    return clients;
  }

  async getClientById(id: string): Promise<Client> {
    const client = await this.clientModel.findById(id);

    if (!client) {
      throw new NotFoundException(`There is no client with id '${id}'.`);
    }

    return client;
  }

  async createClient(createClientDto: CreateClientDTO): Promise<Client> {
    const newClient = await this.clientModel.create(createClientDto);

    return newClient;
  }

  async deleteClient(id: string): Promise<Client> {
    return await this.clientModel.findByIdAndDelete(id);
  }

  async updateClient(
    id: string,
    updateClientDto: UpdateClientDTO,
  ): Promise<Client> {
    return await this.clientModel.findByIdAndUpdate(id, updateClientDto, {
      new: true,
      runValidators: true,
    });
  }
}
