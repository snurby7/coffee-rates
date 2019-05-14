import { Controller, Delete, Get, Post } from '@overnightjs/core';
import { ObjectID } from 'bson';
import { Request, Response } from 'express';
import { InsertOneWriteOpResult, UpdateWriteOpResult } from 'mongodb';
import { Connection } from 'mongoose';

@Controller('api/coffee')
class CoffeeController {
  private _db: Connection;

  constructor(db: Connection) {
    this._db = db;
  }

  @Get(':id')
  private async getCoffee(req: Request, res: Response): Promise<void> {
    const coffeeId = req.params.id;
    return await this._db
      .collection('coffees')
      .findOne({ _id: new ObjectID(`${coffeeId}`) })
      .then(coffee => {
        res.status(250).send(coffee);
      });
  }

  @Delete(':id')
  private async deleteCoffee(req: Request, res: Response): Promise<void> {
    const coffeeId = req.params.id;
    return await this._db
      .collection('coffees')
      .deleteOne({ _id: new ObjectID(`${coffeeId}`) })
      .then(response => {
        res.status(250).send(response.result);
      });
  }

  @Post(':id')
  private async updateCoffee(req: Request, res: Response): Promise<void> {
    const coffeeId = req.params.id;
    return await this._db
      .collection('coffees')
      .updateOne({ _id: new ObjectID(`${coffeeId}`) }, { $set: req.body }, { upsert: false })
      .then((result) => {
        res.status(250).send(result);
      });
  }

  @Post('')
  private async addCoffee(req: Request, res: Response): Promise<void> {
    return await this._db.collection('coffees')
    .insertOne(req.body)
    .then(result => {
      res.status(250).send(result);
    });
  }
}

export default CoffeeController;
