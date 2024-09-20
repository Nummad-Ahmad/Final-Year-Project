//jshint esversion:6
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

//Database connection with MongeDB
mongoose.connect(
  "mongodb+srv://fawaddev:1234567890@cluster0.xgghi.mongodb.net/e-commerce"
);

//API Creation

app.get("/", (req, res) => {
  res.send("Welcome to E-commerce website");
});

//Image Storage Engine

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.filename}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

//Creating upload Endpoint for images

app.use("images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

//User Authentication API

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server running on port ${port}`);
  } else {
    console.log(`Error: ${error}`);
  }
});
