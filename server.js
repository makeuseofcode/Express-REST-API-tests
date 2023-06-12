
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
require('dotenv').config();
const connectDB = require('./utils/db');


connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const userRoutes = require('./routes/userRoutes');

app.use('/', userRoutes);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});


module.exports = app;