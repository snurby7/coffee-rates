import { Controller, Post } from '@overnightjs/core';
import { ICoffeePageRequest } from 'cr-common';
import { Response } from 'express';
import { Connection } from 'mongoose';

import { MongoCollections } from '../../constants';
import { IRequest } from '../../contracts';

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
      .collection(MongoCollections.Coffees)
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
        res.send({ results: results, totalResults: totalResults[0].count });
      });
  }
}

export default CoffeesController;
