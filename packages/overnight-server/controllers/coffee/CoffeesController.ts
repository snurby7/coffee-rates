import {
  ICoffeePageRequest,
  ICoffeePageResponse,
  ICoffeeProfile,
  IServerResponse,
  MongoCollections,
} from '@cr/common';
import { Controller, Post } from '@overnightjs/core';
import { Response } from 'express';
import { Connection } from 'mongoose';

import { IMongoCollectionItem, IRequest } from '../../contracts';

@Controller('api/coffees/')
class CoffeesController {
  private _db: Connection;

  constructor(db: Connection) {
    this._db = db;
  }

  @Post('page')
  public async getCoffeePage(req: IRequest<ICoffeePageRequest>, res: Response): Promise<void> {
    const { pageStart = 0, maxPageSize = 10 } = req.body;
    return await this._db
      .collection(MongoCollections.TestCoffees)
      .aggregate([
        {
          $facet: {
            results: [
              {
                $match: {
                  /* This could in theory take a userId if it were filtered too */
                },
              },
              { $skip: pageStart * maxPageSize },
              { $limit: maxPageSize },
            ],
            totalResults: [{ $count: 'count' }],
          },
        },
      ])
      .toArray()
      .then(response => {
        const { results, totalResults } = response[0];
        const serverResponse: IServerResponse<ICoffeePageResponse> = {
          response: {
            data: results.map((result: ICoffeeProfile & IMongoCollectionItem) => {
              delete result._id;
              return result;
            }),
            pageStart: pageStart,
            pageEnd: pageStart + maxPageSize,
            totalResults: totalResults[0].count,
          },
          errmsg: undefined,
        };
        res.send(serverResponse);
      })
      .catch(error => {
        console.log(error);
        res.send({
          response: {
            data: [],
            pageStart: pageStart,
            pageEnd: pageStart + maxPageSize,
            totalResults: 0,
          },
          errmsg: undefined,
        });
      });
  }
}

export default CoffeesController;
