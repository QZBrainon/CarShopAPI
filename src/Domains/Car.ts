import ICar from '../Interfaces/ICar';
import IVehicle from '../Interfaces/IVehicle';

export default class Car implements IVehicle {
  id: string | undefined;
  model: string;
  year: number;
  color: string;
  status: boolean;
  buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor({ status = false, ...car }:ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = status;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
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
}
