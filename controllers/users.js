const { User, Post } = require("../models");

async function createUser(req, res) {
  const { name, email, role } = req.body;
  try {
    const user = await User.create({ name, email, role });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function getUser(req, res) {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOne({
      where: { uuid },
      include: [{ model: Post, as: "posts" }],
    });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function getUsers(req, res) {
  try {
    const users = await User.findAll({ include: "posts" });
    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function editUser(req, res) {
  const uuid = req.params.uuid;
  const { name, email, role } = req.body;
  try {
    const user = await User.findOne({ where: { uuid } });
    user.name = name;
    user.email = email;
    user.role = role;
    await user.save();
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function deleteUser(req, res) {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOne({ where: { uuid } });
    await user.destroy();
    return res.json({ message: "User deleted!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

module.exports = {
  get: {
    "/users": getUsers,
    "/users/:uuid": getUser,
  },
  post: {
    "/users": createUser,
  },
  put: {
    "/users/:uuid": editUser,
  },
  delete: {
    "/users/:uuid": deleteUser,
  },
};
