const { sumar, esPar, capitalizar } = require("../src/math");

describe("Pruebas de funciones", () => {
  test("sumar debe devolver la suma de dos números", () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test("sumar debe funcionar con números negativos", () => {
    expect(sumar(-2, 5)).toBe(3);
  });

  test("esPar debe devolver true si el número es par", () => {
    expect(esPar(4)).toBe(true);
  });

  test("esPar debe devolver false si el número es impar", () => {
    expect(esPar(7)).toBe(false);
  });

  test("capitalizar debe poner la primera letra en mayúscula", () => {
    expect(capitalizar("hola")).toBe("Hola");
  });

  test("capitalizar debe convertir el resto a minúsculas", () => {
    expect(capitalizar("mUNDO")).toBe("Mundo");
  });

  test("capitalizar debe devolver cadena vacía si recibe vacío", () => {
    expect(capitalizar("")).toBe("");
  });
});