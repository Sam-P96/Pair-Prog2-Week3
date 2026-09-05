let Tours = []
let nextId = 1;

function addOne(name, info, image, price, location) {
    const newTour = { i: nextId++, name, info, image, price, location };
    Tours.push(newTour);
    return newTour;
}

if (require.main === module) {
  const result = addOne(
    "7 Days Tour",
    "Join us for the Best of Helsinki!",
    "https://www.course-api.com/images/tours/tour-x.jpeg",
    "1,495",
    "Helsinki, Finland"
  );

  console.log(result);
}