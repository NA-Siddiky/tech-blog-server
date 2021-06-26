const express = require('express');
const morgan = require('morgan');

const app = express();
const cors = require('cors');
require('dotenv').config();

const { dbConnection } = require('./db');
const apiRoutes = require('./api/routes');

// Dev Connection
dbConnection();
app.use(express.json());
app.use(cors());

app.use('/api', apiRoutes);


// app Start
app.listen(process.env.PORT || 5000, () => console.log('Server has started 5000'));