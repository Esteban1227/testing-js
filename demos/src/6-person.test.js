const Person = require('./6-person');

describe('Test fot Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('Esteban', 36, 1.67);
  });
  test('should return down', () => {
    person.weight = 36;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
