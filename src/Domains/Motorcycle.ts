import IMotorcycle from '../Interfaces/IMotorcycle';
import IVehicle from '../Interfaces/IVehicle';

export default class Motorcycle implements IVehicle {
  id: string | undefined;
  model: string;
  year: number;
  color: string;
  status: boolean;
  buyValue: number;
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    this.id = motorcycle.id;
    this.model = motorcycle.model;
    this.year = motorcycle.year;
    this.color = motorcycle.color;
    this.status = motorcycle.status || false;
    this.buyValue = motorcycle.buyValue;
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }

  public getModel() {
    return this.model;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public getYear() {
    return this.year;
  }

  public setYear(year: number) {
    this.year = year;
  }

  public getColor() {
    return this.color;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getBuyValue() {
    return this.buyValue;
  }

  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
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