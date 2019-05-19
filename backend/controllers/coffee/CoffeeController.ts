import { Controller, Delete, Get, Post } from '@overnightjs/core';
import { ObjectID } from 'bson';
import { Response } from 'express';
import { Connection } from 'mongoose';

import { ICoffeeProfile, IRequest } from '../../contracts';

@Controller('api/coffee')
class CoffeeController {
  private _db: Connection;

  constructor(db: Connection) {
    this._db = db;
  }

  @Get(':id')
  public async getCoffee(req: IRequest, res: Response): Promise<void> {
    const coffeeId = req.params.id;
    return await this._db
      .collection('coffees')
      .findOne<ICoffeeProfile>({ _id: new ObjectID(`${coffeeId}`) })
      .then(
        coffee => {
          res.status(204).send(coffee);
        },
        error => {
          res.status(400).send({ success: false });
        }
      );
  }

  @Delete(':id')
  public async deleteCoffee(req: IRequest, res: Response): Promise<void> {
    const coffeeId = req.params.id;
    return await this._db
      .collection('coffees')
      .deleteOne({ _id: new ObjectID(`${coffeeId}`) })
      .then(response => {
        res.status(204).send(response.result);
      });
  }

  @Post(':id')
  public async updateCoffee(req: IRequest, res: Response): Promise<void> {
    const coffeeId = req.params.id;
    return await this._db
      .collection('coffees')
      .updateOne({ _id: new ObjectID(`${coffeeId}`) }, { $set: req.body }, { upsert: false })
      .then(result => {
        res.status(204).send(result.result);
      });
  }

  @Post('')
  public async addCoffee(req: IRequest<ICoffeeProfile>, res: Response): Promise<void> {
    return await this._db
      .collection('coffees')
      .insertOne(req.body)
      .then(
        (/* success */) => {
          res.send({ success: true });
        },
        (/* error */) => {
          res.status(400).send({ success: false });
        }
      );
  }
}

export default CoffeeController;
