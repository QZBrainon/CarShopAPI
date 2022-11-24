import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  protected doorsQty: number;
  protected seatsQty: number;

  constructor(car:ICar) {
    super(car);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }

  public setDoorsQty(qty: number) {
    this.doorsQty = qty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
  
  public SetSeatsQty(qty:number) {
    this.seatsQty = qty;
  }
}
