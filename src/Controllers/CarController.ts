import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    try {
      const car: ICar = this.req.body;
      const result = await this.service.create(car);
      return this.res.status(201).json(result);
    } catch (e) {
      this.next(e);
    }
  }

  public async find() {
    try {
      const result = await this.service.find();
      return this.res.status(200).json(result); 
    } catch (e) {
      this.next(e);
    }
  }

  public async findById() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
    const result = await this.service.findById(id);
    if (!result) {
      return this.res.status(404).json({ message: 'Car not found' });
    }
    return this.res.status(200).json(result);
  }
}