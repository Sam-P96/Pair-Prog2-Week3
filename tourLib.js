let Tours = []
let nextId = 1;

function addOne(name, info, image, price, location) {
    const newTour = { id: nextId++, name, info, image, price, location };
    Tours.push(newTour);
    return newTour;
}

const getAll = () => {
  return Tours;
};

const findById = (id) => {
  const tourId = Number(id);
  const findTour = Tours.find((item) => item.id === tourId);
  if (findTour) {
    return findTour;
  } else {
    return null;
  }
}


module.exports = {
  addOne,
  getAll,
  findById,
};
