const { Show } = require('../models');

const showData = [
  {
    title: "Blacklist",
    network_id: 2,
  },
  {
    title: "New Girl",
    network_id: 2,
  },
  {
    title: "The Resident",
    network_id: 1,
  },
  {
    title: "This Is Us",
    network_id: 1,
  },
  {
    title: "The Simpsons",
    network_id: 3,
  },
  {
    title: "Black-ish",
    network_id: 3,
  },
  {
    title: "grown-ish",
    network_id: 3,
  },
  {
    title: "True Detective",
    network_id: 4,
  },
  {
    title: "Raised by Wolves",
    network_id: 4,
  },
  {
    title: "Ballers",
    network_id: 4,
  },
];
 
const seedShow = () => Show.bulkCreate(showData);

module.exports = seedShow;
