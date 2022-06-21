const request = require('supertest');

const { MongoClient } = require('mongodb');
const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
  let app = null;
  let server = null;
  let dataBase = null;
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    dataBase = client.db(DB_NAME);
  });
  afterAll(async () => {
    await server.close();
    await dataBase.dropDatabase();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('should return a list books', async () => {
      const seedData = await dataBase.collection('books').insertMany([
        {
          name: 'book1',
          year: 1990,
          author: 'nicolas',
        },
        {
          name: 'book2',
          year: 1999,
          author: 'nicola',
        },
      ]);
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          console.log(seedData);
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
