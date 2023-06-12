const User = require('../models/user.model');


exports.registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    await User.create({ username, password});
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'An error occurred!! ' });
  }
};


exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'An error occurred!!' });
  }
};





