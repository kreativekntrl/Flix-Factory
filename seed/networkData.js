const { Network } = require('../models');

const networkData = [
  {
    name: "HBO"
  },
  {
    name: "Netflix"
  },
  {
    name: "Disney+"
  },
  {
    name: "Huu"
  },
];

const seedNetwork = () => Network.bulkCreate(networkData);

module.exports = seedNetwork;
