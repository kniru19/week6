const { addOne, getAll, petArray, resetState } = require("./petManager");

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
  expect(addOne("Buddy", "Dog", 3, "Brown")).toBe(false);
  expect(addOne()).toBe(false);
});

test("getAll() should return an empty array if no pets have been added", () => {
  expect(getAll()).toHaveLength(0);
});

test("getAll() should return an array with one pet after calling addOne()", () => {
  addOne("Buddy", "Dog", 3, "Brown", 20);

  const allPets = getAll();
  expect(allPets).toHaveLength(1);
  expect(allPets[0].id).toBe(1);
  expect(allPets[0]).toEqual({
    id: 1,
    name: "Buddy",
    species: "Dog",
    age: 3,
    color: "Brown",
    weight: 20,
  });
});

test("getAll() should return an array with multiple pets after calling addOne() multiple times", () => {
  addOne("Buddy", "Dog", 3, "Brown", 20);
  addOne("Milo", "Cat", 2, "White", 5);

  const allPets = getAll();
  expect(allPets).toHaveLength(2);
});