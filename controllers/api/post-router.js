const { Post } = require("../../models");
const router = require("express").Router();

router.post("/post", async (req, res) => {
  try {
    const createPost= await Post.create({
     text_content : req.body.text_content,
    })
    res.status(200).json(createPost)
    } 
    catch (err) {
      res.status(500).json(err)
    }
});

router.delete("/post/:id", async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {id: req.params.id}
    });
    res.status(200).json(deletePost);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
