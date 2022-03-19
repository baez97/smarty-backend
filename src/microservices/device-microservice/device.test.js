const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../index');

describe('The Device Microservice...', () => {
  it('GET: /all returns the list of devices', async () => {
    const res = await request(app).get('/device/all').send();
    expect(res.statusCode).toEqual(200);
    expect(res.body[0].deviceId).toEqual('001DL');
  });

  it('GET: /:id returns a Bad Request error if an invalid ID is provided', async () => {
    const res = await request(app).get('/device/123').send();
    expect(res.statusCode).toEqual(400);
  });

  it('GET: /:id returns a Not Found error if a non-existing ID is provided', async () => {
    const res = await request(app).get('/device/62328a9a94d83a1fdf9b61ba').send();
    expect(res.statusCode).toEqual(404);
  });

  it('GET: /:id returns the device info', async () => {
    const res = await request(app).get('/device/6232691e7658202b847ba9ca').send();
    expect(res.statusCode).toEqual(200);
    expect(res.body.deviceId).toEqual('001DL');
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await app.close();
});