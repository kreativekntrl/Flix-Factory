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
    text_content: "I can't believe my girlfriend got me to watch this with her.",
    user_id: 1,
    show_id: 2,
  },
  {
    id: 3,
    text_content: "The main guy is so creepy!",
    user_id: 2,
    show_id: 3,
  },
  {
    id: 4,
    text_content: "Wow I hope she finds her way back to her time.",
    user_id: 3,
    show_id: 4,
  },
  {
    id: 5,
    text_content: "Great mystery show!",
    user_id: 4,
    show_id: 5,
  },
  {
    id: 6,
    text_content: "I can't believe this show is still going after all these years!",
    user_id: 4,
    show_id: 21,
  },
  {
    id: 7,
    text_content: "This show was my favorite thing to watch as a kid.",
    user_id: 3,
    show_id: 27,
  },
  {
    id: 8,
    text_content: "I wish I was raised by a wolf.",
    user_id: 2,
    show_id: 32,
  },
  {
    id: 9,
    text_content: "If you haven't seen this show yet you are obviously living under a rock!",
    user_id: 2,
    show_id: 39,
  },
  {
    id: 10,
    text_content: "I like Blacklist more than True Detective if I am being honest.",
    user_id: 1,
    show_id: 31,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
