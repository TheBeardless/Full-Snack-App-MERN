// This is where we will set up our db connection
const mongoose = require("mongoose");

// food is the name of our database
// that is automatically created
mongoose.connect("mongodb://localhost:27017/fullSnackApp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// mongoose.connect("mongodb://localhost:27017/fullSnackApp-MERN", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

mongoose.connection.on("error", (err) => {
  console.log(err, " mongoose failed to connect");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose is disconnected");
});
