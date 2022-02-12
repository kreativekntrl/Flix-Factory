const router = require("express").Router();

const { Post, User, Network, Show } = require("../models");

// const withAuth = require("../util/withAuth");

// Needed for query string:
// const url = require('url');
// const querystring = require('querystring');

// use withAuth middleware to redirect from protected routes.

// example of a protected route
// router.get("/users-only", withAuth, (req, res) => {
//   // ...
// });

Homepage route:
router.get('/', async (req, res) => {
    try {
      res.render("home");
    } catch (err) {
      res.status(500).json(err);
    }
});

// Homepage route with query url: http://localhost:3001/?network_id=1
// router.get('/', async (req, res) => {

//   // Access the "network" and "date" query parameters:
//   let network_id = req.query.network_id;
//   // let date = req.query.date;

//   if (network_id && network_id === '1') {
//   try {
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
//           attributes: ['id', 'name'],
//         },
//         {
//           model: Show,
//           attributes: ['name'],
//         },
//       ],
//       where: {
//         model: Network,
//         attributes: {
//           id: 1,
//         }
//       },
//     });

//     // Serialize data so the template can read it
//     const posts = postData.map((post) => post.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('home', { 
//       posts, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// }
// });

// Login route:
router.get('/login', async (req, res) => {
  try {
    res.render("login", { title: "Log-In Page" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Posts route: add withAuth,
router.get('/post', async (req, res) => {
  try {
    // findAll
    res.render("post");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
