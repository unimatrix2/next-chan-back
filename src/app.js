import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors'
import mongoSanitize from 'express-mongo-sanitize'

// Config DOTENV
dotenv.config();

// Imports
import mongoConnection from './configs/db.config';

// App instance
const app = express();

// Middlewares Setup
app.use(helmet());
app.use(express.urlencoded());
app.use(express.json());
app.use(cors({ origin: process.env.FRONT_END_URL }));
app.use(mongoSanitize());

// Routes Setup

// Error handling setup

// DB Connection
mongoConnection(process.env.MONGODB_URI)

// Server Start
app.listen(process.env.PORT, () => console.log(`App running on PORT ${process.env.PORT}`));