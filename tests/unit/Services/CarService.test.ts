import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

describe('Testa a camada Service e suas functions', function () {
  afterEach(function () { return sinon.restore(); });

  it('Testa o method create da rota  POST /cars', async function () {
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    
    const carOutput: ICar = {
      id: '637beacdf867babfe64ec777',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.create(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Testa o method find da rota GET /cars', async function () {
    const carOutputArray: ICar[] = [
      {
        id: '637beacdf867babfe64ec777',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '637beacdf867babfe64ec999',
        model: 'Celta',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.00,
        doorsQty: 4,
        seatsQty: 5,
      },
    ];
    sinon.stub(Model, 'find').resolves(carOutputArray);

    const service = new CarService();
    const result = await service.find();

    expect(result).to.be.deep.equal(carOutputArray);
  });

  it('Testa o method findById da rota GET /cars/:id', async function () {
    const id = '637beacdf867babfe64ec777';
    const foundCar = {
      id: '637beacdf867babfe64ec777',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    sinon.stub(Model, 'findById').resolves(foundCar);

    const service = new CarService();
    const result = await service.findById(id);

    expect(result).to.be.deep.equal(foundCar);
  });
});