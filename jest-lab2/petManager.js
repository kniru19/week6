const petArray = [];
let nextId = 1;  

function resetState() {
  nextId = 1;
  petArray.length = 0;
}

function addOne(name, species, age, color, weight) {
  if (!name || !species || !age || !color || !weight) {
    return false;
  }

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

function getAll() {
  return petArray;
}

module.exports = { addOne, getAll, petArray, resetState };