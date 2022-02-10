const router = require("express").Router();
const { Post } = require("../models");

// use withAuth middleware to redirect from protected routes.
// const withAuth = require("../util/withAuth");

// example of a protected route
// router.get("/users-only", withAuth, (req, res) => {
//   // ...
// });

//figure out how to get ?query into homepage route!!!

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with rest of data
    const postData = await Post.findAll({
      include: [
        {
          model: Post,
          attributes: ['name', 'text_content'],
        },
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Network,
          attributes: ['name'],
        },
        {
          model: Show,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Log-In Page" });
});

module.exports = router;
