let carArray = [];

function resetState() {
  carArray.length = 0;
}

function addCar(make, model, year, color) {
  if (typeof make !== "string" || typeof model !== "string" || typeof color !== "string") return false;
  if (typeof year !== "number" || year <= 0) return false;
  if (!make || !model || !year || !color) return false;

  const newCar = { make, model, year, color };
  carArray.push(newCar);
  return newCar;
}

module.exports = { addCar, carArray, resetState };