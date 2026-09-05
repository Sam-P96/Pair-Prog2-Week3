
const express = require("express")
const app = express();

const {
    getAllTours,
    createTour,
    getTourById,
    updateTour,
    deleteTour
} = require("./tourHandlers");



app.get("/tours", getAllTours);

app.post("/tours", createTour);

app.get("/tours/:tourId", getTourById);

app.patch("/tours/:tourId", updateTour);

app.delete("/tours/:tourId", deleteTour);

const port = 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

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
