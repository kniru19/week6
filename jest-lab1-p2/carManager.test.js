const { addCar, carArray, resetState } = require("./carManager");

beforeEach(() => {
  resetState();
});

test("addCar() adds a car and returns the new car object", () => {
  const car = addCar("Toyota", "Corolla", 2020, "Blue");
  
  expect(car).toEqual({
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Blue",
  });

  expect(carArray).toHaveLength(1);
  expect(carArray[0]).toEqual(car);
});

test("addCar() returns false if any parameter is missing", () => {
  expect(addCar("Toyota", "Corolla", 2020)).toBe(false); // Missing color
  expect(addCar()).toBe(false); // Missing all parameters
});

test("addCar() returns false for invalid data types", () => {
  expect(addCar(123, "Corolla", 2020, "Blue")).toBe(false); // Make should be a string
  expect(addCar("Toyota", "Corolla", "2020", "Blue")).toBe(false); // Year should be a number
  expect(addCar("Toyota", "Corolla", -2020, "Blue")).toBe(false); // Year should be positive
});