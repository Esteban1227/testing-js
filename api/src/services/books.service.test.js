const { generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

/* const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
]; */

const mockGetall = jest.fn();

/* const MongoLibStub = {
  getAll: spyGetall,
  getAll: () => [...fakeBooks],
  create: () => {},
}; */

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetall,
  create: () => {},
})));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('Test of getBooks', () => {
    test('Should return a list books', async () => {
      const fakeBooks = generateManyBooks(20);
      mockGetall.mockResolvedValue(fakeBooks);
      const booksArray = await service.getBooks({});
      console.log(booksArray);
      expect(booksArray.length).toEqual(fakeBooks.length);
      expect(mockGetall).toHaveBeenCalled();
      expect(mockGetall).toHaveBeenCalledTimes(1);
      expect(mockGetall).toHaveBeenCalledWith('books', {});
    });
  });
});
