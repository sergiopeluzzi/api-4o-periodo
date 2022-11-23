import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClienteDocument = HydratedDocument<Cliente>;

@Schema({ timestamps: true })
export class Cliente {
  @Prop({ required: true })
  nome: string;

  @Prop()
  idade: number;

  @Prop({ unique: true })
  cpf: string;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
