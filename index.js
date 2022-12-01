import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import Routes from './routes/index.js';

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('success connect db');
}).catch(err => {
    console.log('error connect db');
}) 

app.use(Routes);

app.listen(3001, () => {
    console.log(`http://localhost:${3001}`);
})