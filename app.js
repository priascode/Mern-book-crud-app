const express = require('express');
const connectDB= require('./config/db');
const cors = require('cors');


const books = require('./routes/api/books');

const app = express();

connectDB();

//cors
app.use(cors({origin: true, credentials: true}));

//init middlewaare
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('Mongo db connected hurray:)'));

//use routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));


