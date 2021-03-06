import express from 'express';
import createNextApp from 'next';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors'
import mongoSanitize from 'express-mongo-sanitize'
import { join } from 'path';

// Config DOTENV
dotenv.config();

// Imports
import mongoConnection from './configs/db.config';

// App Setup
// Code from https://github.com/pd-smith/next-express-babel # Start
const next = createNextApp({ dev: process.env.NODE_ENV !== 'production', dir: join(__dirname, 'app') });
const nextGetHandler = next.getRequestHandler();

const bootstrap = async () => {
    try {
        await next.prepare();

        // Proprietary Code #Start
        // App Instance
        const app = express();

        // Middlewares Setup
        /* app.use(helmet()); */
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());
        app.use(cors({ origin: process.env.FRONT_END_URL }));
        app.use(mongoSanitize());

        // Routes Setup
        // Testing routes only
        app.get('/', (req, res) => {
            next.render(req, res, '/home')
        })

        app.get('*', nextGetHandler)
        // Error Handling Setup

        // DB Connection
        mongoConnection(process.env.MONGODB_URI)

        // Server Start
        app.listen(process.env.PORT, () => console.log(`App running on PORT ${process.env.PORT}`));
        // Proprietary Code #End

    } catch (err) {
        console.log('FATAL: Could not Start server', err);
    }
}

bootstrap();
// Code from https://github.com/pd-smith/next-express-babel # End



