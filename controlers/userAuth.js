const User = require('../modales/userModale');

function registerUser(req, res) {
  const { email, password, username, phone, birthday } = req.body;

  const user = new User({
    email,
    password,
    username,
    phone,
    birthday
  });

  user.save()
    .then((savedUser) => {
      res.status(201).json(savedUser);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
}

function loginUser(req, res) {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      if (user.password !== password) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      res.status(200).json({name:"msuatafa"});
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
}
module.exports = {
  registerUser,
  loginUser
};