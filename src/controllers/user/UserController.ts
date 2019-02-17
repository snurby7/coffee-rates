import { Controller, Delete, Get, Post } from '@overnightjs/core';
import { ObjectID } from 'bson';
import { Request, Response } from 'express';
import { InsertOneWriteOpResult, UpdateWriteOpResult } from 'mongodb';
import { Connection } from 'mongoose';

@Controller('api/user')
class UserController {
  private _db: Connection;

  constructor(db: Connection) {
    this._db = db;
  }

  @Get(':id')
  private async getUser(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    return await this._db
      .collection('users')
      .findOne({ _id: new ObjectID(`${userId}`) })
      .then(user => {
        res.status(250).send(user);
      });
  }

  @Delete(':id')
  private async deleteUser(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    return await this._db
      .collection('users')
      .deleteOne({ _id: new ObjectID(`${userId}`) })
      .then(response => {
        res.status(250).send(response.result);
      });
  }

  @Post(':id')
  private async updateUser(req: Request, res: Response): Promise<UpdateWriteOpResult> {
    const userId = req.params.id;
    return await this._db
      .collection('users')
      .updateOne({ _id: new ObjectID(`${userId}`) }, { $set: req.body }, { upsert: false });
  }

  @Post('')
  private async addUser(req: Request, res: Response): Promise<InsertOneWriteOpResult> {
    return await this._db.collection('users').insertOne(req.body);
  }
}

export default UserController;
