const { Post } = require("../../models");
const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const createPost= await Post.create({
     text_content : req.body.text_content,
     show_id : req.body.show_id,
     user_id: req.session.user_id
    })
    res.status(200).json(createPost)
    } 
    catch (err) {
      res.status(500).json(err)
      console.log(err);
    }
});


router.delete("/:id", async (req, res) => {
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
