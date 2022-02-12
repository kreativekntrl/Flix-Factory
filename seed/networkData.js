
const { Network } = require('../models');

const networkData = [
  {
    id: 1,
    name: "HBO"
  },
  {
    id: 2,
    name: "Netflix"
  },
  {
    id: 3,
    name: "Disney+"
  },
  {
    id: 4,
    name: "Hulu"
  },
];
 
const seedNetwork = () => Network.bulkCreate(networkData);

module.exports = seedNetwork;
