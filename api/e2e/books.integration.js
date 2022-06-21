const mockGetall = jest.fn();

const request = require('supertest');

const { generateManyBooks } = require('../src/fakes/book.fake');

const createApp = require('../src/app');

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetall,
  create: () => {},
})));

describe('Test for books', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });
  afterAll(async () => {
    await server.close();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('should return a list books', () => {
      const fakeBooks = generateManyBooks(3);
      mockGetall.mockResolvedValue(fakeBooks);
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body, 'body');
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});
