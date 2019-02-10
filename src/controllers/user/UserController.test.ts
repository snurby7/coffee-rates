import * as supertest from 'supertest';

import {} from 'jasmine';
import { SuperTest, Test } from 'supertest';

import TestServer from '../shared/TestServer.test';
import UserController from './UserController';
import { IUser } from '../../contracts';

describe('UserController', () => {
  const userController = new UserController();
  let agent: SuperTest<Test>;

  beforeAll(done => {
    // Activate the routes
    const server = new TestServer();
    server.setController(userController);

    // Start supertest
    agent = supertest.agent(server.getExpressInstance());
    done();
  });

  describe('API: "/api/user/:id"', () => {
    it(`should return a JSON object with user Data`, (done: DoneFn) => {
      agent.get('/api/user/123').end((err, res) => {
        expect(res.status).toBe(250);
        const user: IUser = res.body.response;
        expect(user.id).toBe('sampleId');
        expect(user.name).toBe('sample');
        done();
      });
    });
  });

  describe('API: "/api/user/"', () => {
    it(`should post a new user the endpoint`, (done: DoneFn) => {
      const testUser: IUser = {
        id: 'test',
        name: 'waffles',
      };
      agent.post('/api/user')
      .type('form')
      .expect(250)
      .send(testUser)
      .end((err, res) => {
        if (err) {
          console.error(err);
        }
        expect(res.body.success).toBeTruthy();
        done();
      });
    });
  });
});
