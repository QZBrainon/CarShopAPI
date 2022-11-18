import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  constructor(public Odm = new CarODM()) {}

  public async postCar(car:ICar) {
    const result = await this.Odm.postCar(car);
    return result;
  } 
}