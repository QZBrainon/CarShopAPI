import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  createCarDomain(car: ICar): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar): Promise<Car | null> {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    const result = this.createCarDomain(newCar);
    return result;
  }

  public async find() {
    const carODM = new CarODM();
    const allCars = await carODM.find();
    const result = allCars.map((car) => this.createCarDomain(car));
    return result;
  }

  public async findById(id:string): Promise<Car | null> {
    const carODM = new CarODM();
    const result = await carODM.findById(id);
    if (result) {
      const newResult = this.createCarDomain(result);
      return newResult;
    }
    return null;
  }

  public async updateById(id:string, newCar: ICar): Promise<Car | null> {
    const carODM = new CarODM();
    const result = await carODM.updateById(id, newCar);
    if (result) {
      const newResult = this.createCarDomain(result);
      return newResult;
    }
    return null; 
  }
}