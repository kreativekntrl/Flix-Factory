const router = require("express").Router();
const axios = require("axios");
const { Post, User, Network, Show } = require("../models");
const {showData} = require("../seed/movie-list");
const withAuth = require("../util/withAuth");

// Homepage route with query url: http://localhost:3001/?network_id=1
router.get('/', async (req, res) => {
    try {
      const where = {};
      const { network_id } = req.query;
      if (network_id) {
      where.network_id = network_id;
      }
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
            where,
            include: Network,
          },
        ],
      });
      const networkData = await Network.findAll();

      // Serialize data so the template can read it
      const posts = postData.map((post) => post.get({ plain: true }));
      const networks = networkData.map((network) => network.get({ plain: true }));

      // Pass serialized data and session flag into template
      res.render('home', { 
        posts,
        networks,
        loggedIn: req.session.loggedIn 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Login route:
router.get("/login", async (req, res) => {
  console.log(showData);
  const movieCount = showData.length;
  
  const randomNumber = Math.floor(Math.random() * movieCount)
  const title = showData[randomNumber].title;

  const options = {
    method: "GET",
    url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${title}`,
    headers: {
      "x-rapidapi-host":
        "imdb-internet-movie-database-unofficial.p.rapidapi.com",
      "x-rapidapi-key": "cc0e5a2416mshaaa2be13950d9e6p1b615fjsnd37717c2051a",
    },
  };

  
  const response =  await axios.request(options)
  const imgUrl = response.data.titles[0].image;
  
  try {
    res.render("login", { title: "Log-In Page", url: imgUrl });
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
    const showData = await Show.findAll({});
    const shows = showData.map((show) => show.get({ plain: true }));
    // findAll
    res.render("post", {
      loggedIn: req.session.loggedIn, 
      shows
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
