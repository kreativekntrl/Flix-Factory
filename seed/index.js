const sequelize = require('../config/connection');
const seedNetwork = require('./networkData');
const seedPost = require('./postData');
const seedUser = require("./userData");
const seedShow = require("./showData");


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedNetwork();

  await seedUser();

  await seedShow();
  
  await seedPost();



  process.exit(0);
};

seedAll();