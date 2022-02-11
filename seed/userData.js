const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "luka",
    email: "luka@email.com",
    password: "password",
  },
  {
    id: 2,
    username: "ava",
    email: "ava@email.com",
    password: "password",
  },
  {
    id: 3,
    username: "lily.619",
    email: "lily@email.com",
    password: "password",
  },
  {
    id: 4,
    username: "jason_213",
    email: "jason@email.com",
    password: "password",
  },
  {
    id: 5,
    username: "john_732",
    email: "john@email.com",
    password: "password",
  },
  {
    id: 6,
    username: "eric",
    email: "eric@email.com",
    password: "password",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
