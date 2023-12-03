import express from 'express';
import dotenv from 'dotenv';
import Connection from './Database/db.js';
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
app.use(cors()); // Place cors middleware here
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

Connection();
const port = 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
