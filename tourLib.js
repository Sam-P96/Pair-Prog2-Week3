let Tours = []
let nextId = 1;

function addOne(name, info, image, price, location) {
    const newTour = { i: nextId++, name, info, image, price, location };
    Tours.push(newTour);
    return newTour;
}

const getAll = () => {
  return Tours;
};

module.exports = {
  addOne,
  getAll,
};