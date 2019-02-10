import { Controller, Get, Post } from '@overnightjs/core';
import { Request, Response } from 'express';

import { IUser } from '../../contracts';


@Controller('api/user')
class UserController {

    public readonly SUC_MSG = 'hello';
    public readonly ERR_MSG = 'can\'t say hello';


    @Get(':id')
    private getUser(req: Request, res: Response): void {
        try {
            const userId = req.params.id;
            const response: IUser = {
              name: 'sample',
              id: 'sampleId',
            };
            res.status(250).json({response});
        } catch (err) {
            console.error(err);
            res.status(400).json({response: this.ERR_MSG});
        }
    }

    @Post('')
    private addUser(req: Request, res: Response): void {
      const newUser = req.body;
      // TODO save the user somewhere
      res.status(250).json({success: true});
    }
}

export default UserController;