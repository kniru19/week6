const petArray = [];
let nextId = 1; 

function resetState() {
  nextId = 1;
  petArray.length = 0;
}

function addOne(name, species, age, color, weight) {
  if (typeof name !== "string" || typeof species !== "string" || typeof color !== "string") return false;
  if (typeof age !== "number" || typeof weight !== "number") return false;
  if (!name || !species || age <= 0 || !color || weight <= 0) return false;

  const newPet = {
    id: nextId++,
    name,
    species,
    age,
    color,
    weight,
  };

  petArray.push(newPet);
  return newPet;
}

module.exports = { addOne, petArray, resetState };