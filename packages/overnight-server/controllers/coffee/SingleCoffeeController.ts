import { ICoffeeProfile, MongoCollections } from '@cr/common';
import { Controller, Delete, Get, Post } from '@overnightjs/core';
import { ObjectID } from 'bson';
import { Response } from 'express';
import { Connection } from 'mongoose';

import { IMongoCollectionItem, IRequest } from '../../contracts';

@Controller('api/coffee')
class SingleCoffeeController {
  private _db: Connection;

  constructor(db: Connection) {
    this._db = db;
  }

  @Get(':id')
  public async getCoffee(req: IRequest, res: Response): Promise<void> {
    const coffeeId = req.params.id;
    return await this._db
      .collection(MongoCollections.Coffees)
      .findOne<ICoffeeProfile & IMongoCollectionItem>({ _id: new ObjectID(`${coffeeId}`) })
      .then(
        coffee => {
          if (coffee) {
            delete coffee._id;
          }
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
      .collection(MongoCollections.Coffees)
      .deleteOne({ id: coffeeId })
      .then(response => {
        res.status(204).send(response.result);
      });
  }

  @Post(':id')
  public async updateCoffee(req: IRequest, res: Response): Promise<void> {
    const coffeeId = req.params.id;

    return await this._db
      .collection(MongoCollections.TestCoffees)
      .updateOne({ id: coffeeId }, { $set: req.body }, { upsert: true })
      .then(response => {
        res.send(response.result);
      });
  }

  @Post('')
  public async addCoffee(req: IRequest<ICoffeeProfile>, res: Response): Promise<void> {
    if (!req.body.id) {
      req.body.id =
        Math.random()
          .toString(36)
          .substring(2) + new Date().getTime().toString(36);
    }
    return await this._db
      .collection(MongoCollections.TestCoffees)
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

export default SingleCoffeeController;
