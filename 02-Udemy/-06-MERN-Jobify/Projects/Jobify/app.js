import express from 'express';
const app = express();

import {configDotenv} from "dotenv";
configDotenv();

import 'express-async-errors';
import morgan from 'morgan';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

import helmet from "helmet";
import xss from "helmet";
import mongoSanitize from 'express-mongo-sanitize';
import cookieParser from 'cookie-parser';

// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import {router as authRoutes}  from "./routes/authRoutes.js";

import {router as jobsRoutes}  from "./routes/jobsRoutes.js";

// middlewares
import notFound from "./middleware/not-found.js";
import ErrorHandler from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";


if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './client/dist')));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.get('/api/v1', (req, res) => {
    res.json({msg: 'API!'});
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/jobs', authenticateUser, jobsRoutes);

app.get('*', (req, res) => {
    res
        .sendFile(path
            .resolve(__dirname, './client/dist', 'index.html')
        )
})

app.use(notFound);
app.use(ErrorHandler);

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB()
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        });
    } catch (error) {
        console.log(error);
    }
}

start();


