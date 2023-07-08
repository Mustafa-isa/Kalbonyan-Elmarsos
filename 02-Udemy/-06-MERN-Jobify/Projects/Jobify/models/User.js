import mongoose from "mongoose";

import validator from "validator";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email'
        },
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        select: false,
        minlength: 6
    },
    lastName: {
        type: String,
        trim: true,
        default: 'lastName'
    },
    location: {
        type: String,
        trim: true,
        maxlength: 20,
        default: 'My City'
    }
});

UserSchema.pre('save', async function(){
    // console.log(this.password);
    if (!this.isModified('password')) return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function() {
    return jwt.sign(
        {id: this._id},
      "myscete",
        {expiresIn: "1d"}
    );
}

UserSchema.methods.comparePassword = async  function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
}

export default mongoose.model('User', UserSchema);