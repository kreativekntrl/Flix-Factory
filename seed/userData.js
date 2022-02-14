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
  {
    id: 7,
    username: "james",
    email: "james@email.com",
    password: "password",
  },
  {
    id: 8,
    username: "jackson",
    email: "jackson@email.com",
    password: "password",
  },
  {
    id: 9,
    username: "jupiter",
    email: "jupiter@email.com",
    password: "password",
  },
  {
    id: 10,
    username: "mars",
    email: "mars@email.com",
    password: "password",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
