const { Post } = require("../models");

const postData = [
  {
    id: 1,
    text_content: "OMG best show ever",
    user_id: 1,
    show_id: 1,
  },
  {
    id: 2,
    text_content: "The movie was okay",
    user_id: 2,
    show_id: 2,
  },
  {
    id: 3,
    text_content: "I hope they make a sequel to this movie",
    user_id: 3,
    show_id: 3,
  },
  {
    id: 4,
    text_content: "Idk what user2 is talking about the movie was amazing",
    user_id: 1,
    show_id: 2,
  },
  {
    id: 5,
    text_content: "They need to stop making remakes of this movie",
    user_id: 4,
    show_id: 4,
  },
  {
    id: 6,
    text_content: "This deserves an award",
    user_id: 5,
    show_id: 5,
  },
  
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
