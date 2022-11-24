import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    }, { versionKey: false });
    super('Motorcycle', schema);
  }

  public async findById(id: string) {
    const result = await this.model.findById(id);
    return result;
  }

  public async updateById(id: string, newMotorcycle:IMotorcycle) {
    const result = await this.model.findByIdAndUpdate(id, newMotorcycle, { new: true });
    return result;
  }
}