const Tours = require("./tourLib");


const getAllTours = (req,res) => {
  const tours = Tours.getAll();
  res.json(tours);
};

// REMEMBER TO FIX THESE
const createTour = (req, res) => {
  const { name, info, image, price, location } = req.body;
  if (!name || !info || !image || !price || !location) {
    return res.status(400).json({
    message: "Invalid tour data",
  })} else {
    const newTour = Tours.addOne(
    name,
    info,
    image,
    price,
    location
  );
  if (newTour) {
    res.status(201).json(newTour);
  } else {
    res.status(500).json({ message: "Failed to create Tour" });
  }
}};
  

// Remember to double check
const getTourById = (req, res) => {
  res.json({ message: "getTourById" });
};

const updateTour = (req, res) => {
  cres.json({ message: "updateTour" });
};

const deleteTour = (req, res) => {
  res.json({ message: "deleteTour" });
};

module.exports = {
    getAllTours,
    createTour,
    getTourById,
    updateTour,
    deleteTour
}




  

// // Remember to double check
// const getTourById = (req, res) => {
//   const tourId = req.params.tourId;
//   const tour = Tours.findById(tourId);
//   if (tour) {
//     res.json(tour);
//   } else {
//     res.status(404).json({ message: "Tour not found" });
//   }
//   res.json({ message: "Hello from getTourkById" });
// };

// const updateTour = (req, res) => {
//   const tourId = req.params.tourId;

//   const updatedTour = Tour.update(
//     tourId,
//     req.body
//   );

//   if (updatedTour) {
//      res.json({ message: "Hello from updateTour"})
//     // res.json(updatedTour);
//   } else {
//     res.status(404).json({ message: "Tour not found" });
//   }
// };

// const deleteTour = (req, res) => {
//   const tourId = req.params.tourId;

//   const isDeleted = Tour.deleteOne(tourkId);

//   if (isDeleted) {
//     res.status(204).send();
//   } else {
//     res.status(404).json({ message: "Tour not found" });
//   }
// };

// module.exports = {
//     getAllTours,
//     createTour,
//     getTourById,
//     updateTour,
//     deleteTour
// }