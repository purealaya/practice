require('dotenv').config();
const express = require('express');
const app = express();

// connectDB
const connectDB = require('./db/connect');

// routes
const ownersRouter = require('./routes/owners');

// middleware
app.use(express.json());
app.use('/', express.static('../'));
app.use('/api/v1/owners', ownersRouter);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (error) {
        console.log(error);
    }
};

start();