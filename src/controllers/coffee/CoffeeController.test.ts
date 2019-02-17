import * as supertest from 'supertest';

import {} from 'jasmine';
import { SuperTest, Test } from 'supertest';

import TestServer from '../shared/TestServer.test';
import CoffeeController from './CoffeeController';
import { Connection } from 'mongoose';

describe('CoffeeController', () => {
  let agent: SuperTest<Test>;

  beforeAll(done => {
    // Activate the routes
    const server = new TestServer();
    const mongo: Connection = <Connection>{    };
    const coffeeController = new CoffeeController(mongo);
    server.setController(coffeeController);

    // Start supertest
    agent = supertest.agent(server.getExpressInstance());
    done();
  });

  describe('API: "/api/coffee/:id"', () => {
    it(`should return a JSON object with coffee Data`, (done: DoneFn) => {
      // agent.get('/api/coffee/123').end((err, res) => {
      //   expect(res.status).toBe(250);
      //   const coffee: ICoffee = res.body.response;
      //   expect(coffee.id).toBe('sampleId');
      //   expect(coffee.name).toBe('sample');
      //   done();
      // });
    });
  });

  describe('API: "/api/coffee/"', () => {
    it(`should post a new coffee the endpoint`, (done: DoneFn) => {
      // const testCoffee: ICoffee = {
      //   id: 'test',
      //   name: 'waffles',
      // };
      // agent.post('/api/coffee')
      // .type('form')
      // .expect(250)
      // .send(testCoffee)
      // .end((err, res) => {
      //   if (err) {
      //     console.error(err);
      //   }
      //   expect(res.body.success).toBeTruthy();
      //   done();
      // });
    });
  });
});
