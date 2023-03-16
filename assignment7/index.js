const fs = require("fs");
const express = require("express");

const app = express();

const getMovies = function () {
  const dataBuffer = fs.readFileSync("./movies.json");
  const dataString = dataBuffer.toString();
  let movies;
  if (dataString === "") {
    movies = [];
  } else {
    movies = JSON.parse(dataString);
  }
  return movies;
};
const getMovie = function (id) {
  let movies = getMovies();
  return movies[id];
};
const createMovie = function (data) {
  let movies = getMovies();
  movies.push(data);
  fs.writeFileSync("./movies.json", JSON.stringify(movies));
  return;
};
const updateMovie = function (id, data) {
  let movies = getMovies();
  movies[id] = data;
  fs.writeFileSync("./movies.json", JSON.stringify(movies));
};
const deleteMovie = function (id) {
  let movies = getMovies();
  movies.splice(id, 1);
  fs.writeFileSync("./movies.json", JSON.stringify(movies));
};

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
