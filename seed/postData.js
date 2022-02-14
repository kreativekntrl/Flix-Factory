const { Post } = require("../models");

const postData = [
  {
    id: 1,
    text_content: "OMG best show ever",
    user_id: 2,
    show_id: 1,
  },
  {
    id: 2,
    text_content: "I can't believe my girlfriend got me to watch this with her.",
    user_id: 4,
    show_id: 2,
  },
  {
    id: 3,
    text_content: "The main guy is so creepy!",
    user_id: 3,
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
    text_content: "YIKES",
    user_id: 7,
    show_id: 7,
  },
  {
    id: 8,
    text_content: "WELL DONE",
    user_id: 8,
    show_id: 8,
  },
  {
    id: 9,
    text_content: "No thanks",
    user_id: 9,
    show_id: 9,
  },
  {
    id: 10,
    text_content: "Yes.",
    user_id: 10,
    show_id: 10,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
