import { Controller, Delete, Get, Post } from '@overnightjs/core';
import { ObjectID } from 'bson';
import { Request, Response } from 'express';
import { Connection } from 'mongoose';

@Controller('api/user')
class UserController {
  private _db: Connection;

  constructor(db: Connection) {
    this._db = db;
  }

  @Get(':id')
  async getUser(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    return await this._db
      .collection('users')
      .findOne({ _id: new ObjectID(`${userId}`) })
      .then(user => {
        res.status(250).send(user);
      });
  }

  @Delete(':id')
  async deleteUser(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    return await this._db
      .collection('users')
      .deleteOne({ _id: new ObjectID(`${userId}`) })
      .then(response => {
        res.status(250).send(response.result);
      });
  }

  @Post(':id')
  async updateUser(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    return await this._db
      .collection('users')
      .updateOne({ _id: new ObjectID(`${userId}`) }, { $set: req.body }, { upsert: false })
      .then(result => {
        res.status(250).send(result);
      });
  }

  @Post('')
  async addUser(req: Request, res: Response): Promise<void> {
    return await this._db
      .collection('users')
      .insertOne(req.body)
      .then(result => {
        res.status(250).send(result);
      });
  }
}

export default UserController;
