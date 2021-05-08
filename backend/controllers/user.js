const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require("../models/user");

const User = require("../models/user");

exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      email: req.body.email,
      password: hash,
    });
    user
      .save()
      .then((result) => {
        res.status(201).json({
          _message: "User created!",
          isError: false,
        });
      })
      .catch((err) => {
        res.status(500).json({
          _message: "Something went wrong",
          isError: true,
        });
      });
  });
};

exports.userLogin = (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          _message: "Please signup first",
          isError: true,
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({
          _message: "Invalid authentication credentials!",
          isError: true,
          isCompare: false,
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userid: fetchedUser._id },
        process.env.JWT_KEY,
        { expiresIn: "1h" }
      );
      res.status(200).json({
        _message: "Login Successful",
        isError: false,
        token: token,
        userid: fetchedUser._id,
      });
    })
    .catch((err) => {
      return res.status(401).json({
        _message: "Invalid authentication credentials!",
        isError: true,
        catchError: true,
      });
    });
};

exports.getUserById = (req, res, next) => {
  console.log(req.body.userData);
  User.findById(req.body.id)
    .then((result) => {
      //console.log(result);
      res.status(200).json({ data: result });
    })
    .catch((err) => {
      res.status(404).json({
        _message: "Something went wrong",
        isError: true,
      });
    });
};
