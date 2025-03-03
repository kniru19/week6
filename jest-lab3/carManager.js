let carArray = [];

function addCar(make, model, year, color) {
  if (!make || !model || !year || !color) {
    return false;
  }

  const newCar = { id: carArray.length + 1, make, model, year, color };
  carArray.push(newCar);
  return newCar;
}

function readCars() {
  return carArray;
}

// TODO: Implement updateCar(id, updatedDetails) function

module.exports = { addCar, readCars, carArray };