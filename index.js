const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const rfs = require('rotating-file-stream');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');

import connectDatabase from './src/configs/db.config';
dotenv.config();

connectDatabase();

const port = process.env.PORT || 3333;
const isProduction = process.env.NODE_ENV === 'production';
const app = express();

app.use(helmet());

const accessLogStream = rfs.createStream('access.log', {
    interval: '1d',
    path: path.join(__dirname, 'log'),
});
app.use(isProduction ? morgan('combined', {stream: accessLogStream}) : morgan('dev'));
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.get('/api', require('./src/routers/router').default);
app.get('/', (req, res) => {
    res.json({
        message: 'Hello! Its me, QuanKhs',
    })
});
app.get('*', (req, res) => {
    res.json({
        message: 'Hello! Its me, QuanKhs',
    })
});
app.listen(port, () => {
    console.log(`Server is listening on port : ${port}`);
});