const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "is required"],
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validation: {
      vaildate: validator.isEmail,
      msg: "please provide valide email"
    }
  },
  password: {
    type: String,
    required: [true, "is required"],
    minlength: 8,
    maxlength: 50
  },
  lastName: {
    type: String,
    default: "last name",
    minlength: 2,
    maxlength: 50
  },
  location: {
    type: String,
    default: "my city",
    minlength: 2,
    maxlength: 100
  }
});
// userSchema.pre("save", async function(next) {
//   try {
//     // Generate a salt
//     const saltRounds = 10;
//     const salt = await bcrypt.genSalt(saltRounds);

//     // Hash the password with the salt
//     const hashedPassword = await bcrypt.hash(this.password, salt);

//     // Replace the plaintext password with the hashed password
//     this.password = hashedPassword;
//   } catch (error) {
//     console.log(error);
//   }
// });

// create Jwt
userSchema.methods.createJwt = function() {
  const payload = {
    UserID: this._id
  };
  const secret = "jwtMustafa"; // Replace with your own secret key
  const options = {
    expiresIn: "1d" // Set the expiration time for the token
  };
  const token = jwt.sign(payload, secret, options);
  return token;
};
// userSchema.methods.comparePassowrd= async function(condanatePassword){
// const comparedPassword =await bcrypt.compare(condanatePassword,this.password)
// return comparedPassword

// }
module.exports = mongoose.model("User", userSchema);
