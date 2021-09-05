//Clase calculator con dos metodos Sum y Difference
export default class calculator {
  //Metodo Sum retorna la suma de los dos parametros recibidos
  static Sum(a: number, b: number): number {
    let c = a + b;
    return c;
  }
  // Metodo Difference retorna la resta de los dos parametros recibidos
  static Difference(a: number, b: number): number {
    let c = a - b;
    return c;
  }
}
