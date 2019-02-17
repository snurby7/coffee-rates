/**
 * Express Server file.
 *
 * created by Sean Maxwell Jan 21, 2019
 */
import { Server } from '@overnightjs/core';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as path from 'path';

import { ConnectionData } from './controllers/key/connection-string';
import UserController from './controllers/user/UserController';

class CoffeeRatesServer extends Server {

    private readonly _SERVER_START_MSG = 'Coffee Rates server started on port: ';
    private readonly _DEV_MSG = 'Express Server currently running on port: ';

    private _port = 3001;

    constructor() {
        super();

        // Setup json middleware
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));

        // Setup the controllers
        this.setUpMongo();

        // Point to front-end code
        if (process.env.NODE_ENV === 'development') {
            this._serveFrontEndDev();
        } else if (process.env.NODE_ENV === 'production') {
            this._serveFrontEndProd();
        }
    }

    private setUpMongo() {
        // this is our MongoDB database
        const dbRoute = ConnectionData.UserString;
        mongoose.connect(
        dbRoute,
        { useNewUrlParser: true }
        );

        const db = mongoose.connection;
        db.once('open', () => {
            console.log('Connected to Mongo, initializing Controllers');
            this._setupControllers(db);
        });
        db.on('error', () => console.error('MongoDB connection error:'));
    }


    private _setupControllers(db: mongoose.Connection): void {
        const controllers = [
            new UserController(db),
        ];
        super.addControllers(controllers);
    }


    private _serveFrontEndDev(): void {
        console.info('Starting server in development mode');

        const msg = this._DEV_MSG + process.env.EXPRESS_PORT;
        this.app.get('*', (req, res) => res.send(msg));
    }


    private _serveFrontEndProd(): void {

        console.info('Starting server in production mode');

        this._port = 3002;

        const dir = path.join(__dirname, 'public/react/demo-react/');

        // Set the static and views directory
        this.app.set('views',  dir);
        this.app.use(express.static(dir));

        // Serve front-end content
        this.app.get('*', (req, res) => {
            res.sendFile('index.html', {root: dir});
        });
    }


    public start(): void {
        this.app.listen(this._port, () => {
            console.log(this._SERVER_START_MSG + this._port);
        });
    }
}


/**
 * Start the server
 */
(() => {
    const server = new CoffeeRatesServer();
    server.start();
})();