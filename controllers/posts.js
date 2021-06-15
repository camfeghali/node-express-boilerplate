const { Post, User } = require("../models");

async function getPosts(req, res) {
  try {
    const posts = await Post.findAll({
      include: [{ model: User, as: "user" }],
    });
    return res.json(posts);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function createPost(req, res) {
  const { userUuid, body } = req.body;
  try {
    const user = await User.findOne({
      where: { uuid: userUuid },
    });
    const post = await Post.create({
      body,
      userId: user.id,
    });
    return res.json(post);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

module.exports = {
  get: {
    "/posts": getPosts,
  },
  post: {
    "/posts": createPost,
  },
};
