const { addOne, petArray, resetState } = require("./petManager");

beforeEach(() => {
  resetState();
});

test("addOne() should add a pet and return the new pet object", () => {
  const pet = addOne("Buddy", "Dog", 3, "Brown", 20);

  expect(pet).toEqual({
    id: 1,
    name: "Buddy",
    species: "Dog",
    age: 3,
    color: "Brown",
    weight: 20,
  });

  expect(petArray).toHaveLength(1);
});

test("addOne() should return false if any parameter is missing", () => {
  expect(addOne("Buddy", "Dog", 3, "Brown")).toBe(false);// Missing weight
  expect(addOne()).toBe(false); // Missing all parameters
});

test("addOne() should return false for invalid data types", () => {
  expect(addOne(123, "Dog", 3, "Brown", 20)).toBe(false); // Name should be a string
  expect(addOne("Buddy", "Dog", -2, "Brown", 20)).toBe(false); // Age should be positive
  expect(addOne("Buddy", "Dog", 3, "Brown", "Heavy")).toBe(false); // Weight should be a number
});