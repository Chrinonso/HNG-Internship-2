const express = require ('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
require('express-async-errors');

const connectDB = require('./db/connect');
const notFoundMiddleware = require('./middleware/Not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


const personRouter = require('./routes/routes');

app.use(express.json());

const corsOptions = {
  origin: '*', // You can replace this with the allowed origin(s)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 200
  credentials: true,
};

app.use(cors(corsOptions));

app.use('/api', personRouter);


app.get('/', (req,res) => {
    res.send('This is my homepage')
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

port = process.env.PORT || 9000;

const start = async (req, res) => {
    try {
       await connectDB(process.env.MONGO_URI);
       app.listen(port, 
        console.log(`server is listening on port ${port}`)
       ) 
    } catch (error) {
        console.log(error);
    }
};

start();