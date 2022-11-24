import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  protected category: 'Street' | 'Custom' | 'Trail';
  protected engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    super(motorcycle);
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }

  public getCategory() {
    return this.category;
  }

  public setCategory(category: 'Street' | 'Custom' | 'Trail') {
    this.category = category;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }

  public setEngineCapacity(capacity: number) {
    this.engineCapacity = capacity;
  }
}