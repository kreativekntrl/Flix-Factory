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
// router.get('/', async (req, res) => {
//     try {
//       res.render("home");
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });

// Homepage route with query url: http://localhost:3001/?network_id=1
router.get('/', async (req, res) => {

  //   // Access the "network" and "date" query parameters:
  //   // let network_id = req.query.network_id;
  //   // let date = req.query.date;
  
  //   // if (network_id && network_id === '1') {
    try {

      // Get all posts and JOIN with user data
      const postData = await Post.findAll({
        include: [
          {
            model: User,
            required: true,
            attributes: ["username"],
          },
          {
            model: Show,
            required: true,
            attributes: ["id", "title", "network_id"],
            include: { model: Network, where: { id: 2 } },
          },
        ],
      });

      // const showData = await Show.findAll({
      //   where: { network_id: 1 },
      //   include: [
      //     {
      //       model: Network,
      //       attributes: ['name']
      //     }
      //   ]
      // });
  //     // Serialize data so the template can read it
      const posts = postData.map((post) => post.get({ plain: true }));
      // const shows = showData.map((show) => show.get({ plain: true }));
  //     // Pass serialized data and session flag into template
      res.render('home', { 
        posts
  //       // logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  // }
  });

// Login route:
router.get('/login', async (req, res) => {
  try {
    res.render("login", { title: "Log-In Page" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Signup route:
router.get('/signup', async (req, res) => {
  try {
    res.render("signup", { title: "Sign-Up Page" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Posts route: add withAuth,
router.get('/post', withAuth, async (req, res) => {
  try {
    // findAll
    res.render("post");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
