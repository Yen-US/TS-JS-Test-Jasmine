import Calculator from '../src/Calculator';

//Define una suite de tests, es decir, una colección de tests. Ésta función recibe dos parámetros, 
//un string con el nombre de la suite en este caso ‘calculate’ y una función donde definiremos los tests.
describe('calculate', function() {
  //Define un test en particular. Recibe cómo parámetro el nombre (‘add’) del test y una función a ejecutar por el test.
  it('add', function() {
    let result = Calculator.Sum(5, 2);
    //Lo que espera recibir el test. Es decir, con expect hacemos la comprobación del test. Si la comprobación no es cierta el test falla
    expect(result).toBe(7);
  });
  //Define un test en particular. Recibe cómo parámetro el nombre (‘add’) del test y una función a ejecutar por el test.
  it('substract', function() {
    let result = Calculator.Difference(5, 2);
    //Lo que espera recibir el test. Es decir, con expect hacemos la comprobación del test. Si la comprobación no es cierta el test falla
    expect(result).toBe(3);
  });
});
