
const express = require("express");
const mongoose = require("mongoose");
const router = require('./route/index.js')
const app = express();
app.use(express.json());

app.use('/api/v1',router)
mongoose
  .connect(
    "mongodb+srv://MustafaEisa1921:MustafaEisa1921@cluster0.couqsmp.mongodb.net/",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("MongoDB connected");

    // Start the server only after successful connection to the database
    app.listen(4000, () => {
      console.log("Server started on port 4000");
    });
  })
  .catch(err => {
    console.error("Error connecting to MongoDB", err);
  });

// Define routes and middleware here
// ...
