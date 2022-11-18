import ICar from '../Interfaces/ICar';

export default class Car implements ICar {
  id?: string;
  model: string;
  year: number;
  color: string;
  status?: boolean;
  buyValue: number;
  private _doorsQty: number;
  private _seatsQty: number;

  constructor({ status = false, ...details }:ICar) {
    this.model = details.model;
    this.year = details.year;
    this.color = details.color;
    this.status = status;
    this.buyValue = details.buyValue;
    this._doorsQty = details.doorsQty;
    this._seatsQty = details.seatsQty;
  }

  get doorsQty(): number {
    return this._doorsQty;
  }

  get seatsQty(): number {
    return this._seatsQty;
  }
}
