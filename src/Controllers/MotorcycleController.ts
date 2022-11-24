import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    try {
      const moto: IMotorcycle = this.req.body;
      const result = await this.service.create(moto);
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
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    }
    return this.res.status(200).json(result);
  }

  public async updateById() {
    const { id } = this.req.params;
    const newCar = this.req.body;
    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
    const result = await this.service.updateById(id, newCar);
    if (!result) {
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    }
    return this.res.status(200).json(result);
  }
}