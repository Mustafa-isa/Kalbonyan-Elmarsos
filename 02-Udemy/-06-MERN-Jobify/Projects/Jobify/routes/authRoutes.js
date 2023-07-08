import express from "express";
const router = express.Router();

import rateLimiter from 'express-rate-limit';

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: 'Too many requests form this IP address, please try again after 15 minutes'
})

import {register, login, updateUser, getCurrentUser, logout} from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";
import testUser from "../middleware/testUser.js";

router.post(
    '/register',
    apiLimiter,
    register
);

router.post(
    '/login',
    apiLimiter,
    login
);

router.patch(
    '/update-user',
    authenticateUser,
    testUser, updateUser
);

router.get(
    '/getCurrentUser',
    authenticateUser,
    getCurrentUser
);

router.get(
    '/logout',
    logout
);

export {router};