const router = require("express").Router();
const { Post, User, Network, Show } = require("../models");
const withAuth = require("../util/withAuth");

// Needed for query string:
// const url = require('url');
// const querystring = require('querystring');

// use withAuth middleware to redirect from protected routes.

// example of a protected route
// router.get("/users-only", withAuth, (req, res) => {
//   // ...
// });

// Homepage route:
router.get('/', async (req, res) => {
    try {
      res.render("home");
    } catch (err) {
      res.status(500).json(err);
    }
});

// Homepage route with query: or should it only be on /post so only logged in users can refine search?
// router.get('/', async (req, res) => {
//   try {
//     Access the "network" and "date" query parameters:
//     let network = req.query.network;
//     let date = req.query.date;

//     const postData = await Post.findAll({
//       include: [
//         {
//           model: Post,
//           attributes: ['name', 'text_content'],
//         },
//         {
//           model: User,
//           attributes: ['username'],
//         },
//         {
//           model: Network,
//           attributes: ['name'],
//         },
//         {
//           model: Show,
//           attributes: ['name'],
//         },
//       ],
//     }).paginate({network: network, date: date}).exec();

//     // Serialize data so the template can read it
//     const posts = postData.map((post) => post.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('homepage', { 
//       posts, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Login route: (can we change to /main? since login is on just /)
router.get('/login', async (req, res) => {
  try {
    res.render("login", { title: "Log-In Page" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Posts route: take withAuth out before testing
router.get('/post', async (req, res) => {
  try {
    // findAll
    res.render("post");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Posts by id route:
router.get('/post/:id', async (req, res) => {
  try {
    // findByPK(req.params.id, { include: })
    res.render("post");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
