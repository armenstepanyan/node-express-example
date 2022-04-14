const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv/config')

const app = express();


// Middlewares
app.use(cors());
app.use(bodyParser.json())


// import routes
const postRoute = require('./routes/posts')
app.use('/posts', postRoute)


mongoose.connect(process.env.DB_CONNECT, () => {
    console.log('connected to db')
})

app.listen(5000)