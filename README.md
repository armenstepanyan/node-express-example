Install packages
```
npm i express nodemon
npm i mongoose
npm i dotenv
npm i body-parser
npm i cors
```

Add run script in `package.json`
```
  "scripts": {
    "start": "nodemon app.js"
  },
```

Start project
```
npm start
```

app.js
```
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

app.listen(3000)
```

models/Post.js
```
const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({    
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Posts', PostSchema);
```
