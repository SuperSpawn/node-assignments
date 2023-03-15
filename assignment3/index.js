const fs = require("fs");
const uniqid = require("uniqid");

const getJSONArray = function () {
  const dataBuffer = fs.readFileSync("./users.json");
  const usersJSON = dataBuffer.toString();
  return JSON.parse(usersJSON);
};
const saveJSONArray = function (users) {
  const usersJSON = JSON.stringify(users);
  fs.writeFileSync("./users.json", usersJSON);
};

const createUser = function (data) {
  const user = { ...data };
  user.id = uniqid();
  let users = getJSONArray();
  users[user.id] = user;
  saveJSONArray(users);
};
const readUser = function (id) {
  const users = getJSONArray();
  return users[id];
};
const updateUser = function (id, data) {
  const users = getJSONArray();
  users[id] = data;
  saveJSONArray(users);
};
const deleteUser = function (id) {
  let users = getJSONArray();
  delete users[id];
  saveJSONArray(users);
};
