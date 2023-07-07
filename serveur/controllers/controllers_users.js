const User = require("../models/models_users");
const bcrypt = require("bcrypt"); //  Bcrypt is a password hashing algorithm
const jwt = require("jsonwebtoken"); // JSON Web Token (JWT) is a compact and digitally signed token that securely represents claims between two parties.
require("dotenv").config(); // for import the environnement variable

exports.signupUser = (req, res, next) => {
  const email = req.body.email;
  User.findOne({ email })
  .then((existingUser) => {
    if (existingUser) {
      return res.status(409).json({ message: "email already exist" });
    }

    bcrypt
      .hash(req.body.password, 10)
      .then((hash) => {
        const user = new User({
          name: req.body.name,
          surname: req.body.surname,
          email: email,
          password: hash, // hash the password when the user is signed
        });
        user
          .save()
          .then(() => res.status(201).json({ message: "User created" }))
          .catch((error) => res.status(400).json({ error }));
      })
      .catch((error) => res.status(500).json({ error }));
  });
};

exports.loginUser = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "User not found!" });
      }
      bcrypt
        .compare(req.body.password, user.password) // compare the password the user is using and the one in the database
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Incorrect password!" });
          }
          res.status(200).json({
            message: "Successfully connected", // A success message indicating a successful connection
            isAdmin: user.isAdmin,
            userId: user._id, // The unique identifier of the user who connected successfully
            token: jwt.sign(
              // Generating a JSON Web Token (JWT) for the user
              { userId: user._id }, // Payload of the JWT containing the user's ID
              process.env.JWT_SECRET, // Secret key used to sign the JWT
              { expiresIn: "24h" } // Expiration time for the JWT (set to 24 hours)
            ),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.getUser = (req, res, next) => {
  User.findById(req.params._id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
