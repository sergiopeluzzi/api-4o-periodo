import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ClienteDocument } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectModel('Cliente') private clienteModel: Model<ClienteDocument>,
  ) {}

  create(createClienteDto: CreateClienteDto) {
    return this.clienteModel.create(createClienteDto);
  }

  findAll() {
    return this.clienteModel.find();
  }

  findOne(id: string) {
    return this.clienteModel.findById(id);
  }

  update(id: string, updateClienteDto: UpdateClienteDto) {
    return this.clienteModel.findByIdAndUpdate(id, updateClienteDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.clienteModel.findByIdAndRemove(id);
  }
}
