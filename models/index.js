const Network = require('./Network');
const User = require('./User');
const Post = require("./Post");
const Show = require("./Show");

Show.belongsTo(Network, {
    foreignKey: "network_id",
    onDelete: "CASCADE",
  });
  
Network.hasMany(Show);
  
Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
  });
  
User.hasMany(Post);

Show.hasMany(Post, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
});

Post.belongsTo(Show);

module.exports = { Network, User, Post, Show };
