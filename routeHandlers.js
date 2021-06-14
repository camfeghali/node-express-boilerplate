const { User } = require('./models');


function getRoot(req, res) {
    res.send("Hello World");
};

async function createUser(req, res) {
    const {name, email, role} = req.body;
    try {
        const user = await User.create({name, email, role});
        return res.json(user);
    } 
    catch(err) {
      console.log(err);
      return res.status(500).json(err);
    }
}

async function getUser(req, res) {
    const uuid = req.params.uuid;
    try {
        const user = await User.findOne({
            where: { uuid }
        });
        return res.json(user);
    } 
    catch(err) {
      console.log(err);
      return res.status(500).json(err);
    }
}

async function getUsers(req, res) {
    try {
        const users = await User.findAll();
        return res.json(users);
    } 
    catch(err) {
      console.log(err);
      return res.status(500).json(err);
    }
}

module.exports.getRoot = getRoot
module.exports.createUser = createUser
module.exports.getUsers = getUsers
module.exports.getUser = getUser


