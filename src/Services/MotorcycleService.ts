import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  createMotorcycleDomain(motorcycle: IMotorcycle): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle): Promise<Motorcycle | null> {
    const motorcycleOdm = new MotorcycleODM();
    const newMotorcyle = await motorcycleOdm.create(motorcycle);
    const result = this.createMotorcycleDomain(newMotorcyle);
    return result;
  }

  public async find() {
    const motorcycleOdm = new MotorcycleODM();
    const allMotos = await motorcycleOdm.find();
    const result = allMotos.map((moto) => this.createMotorcycleDomain(moto));
    return result;
  }

  public async findById(id:string): Promise<Motorcycle | null> {
    const motorcycleOdm = new MotorcycleODM();
    const result = await motorcycleOdm.findById(id);
    if (result) {
      const newResult = this.createMotorcycleDomain(result);
      return newResult;
    }
    return null;
  }

  public async updateById(id:string, newMoto: IMotorcycle): Promise<Motorcycle | null> {
    const motorcycleOdm = new MotorcycleODM();
    const result = await motorcycleOdm.updateById(id, newMoto);
    if (result) {
      const newResult = this.createMotorcycleDomain(result);
      return newResult;
    }
    return null; 
  }
}