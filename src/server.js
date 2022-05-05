const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mysql = require('mysql2/promise');
const app = express();
const { PORT } = require('./config');
const petsRoutes = require('./routes/petsRoutes');
const { dbConfig } = require('./routes/dbsetup');
const { connect } = require('./routes/petsRoutes');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api', petsRoutes);

app.get('/', async (req, res) => {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    console.log('connected');
    res.json('connected');
  } catch (error) {
    console.log('home route error===', error);
    res.status(500).json('something went wrong');
  } finally {
    if (connection) connection.close();
  }
});

app.all('*', (req, res) => {
  res.status(404).json({ error: 'Page not found' });
});

app.listen(PORT, () => console.log('server is running', PORT));

// RANDOM KODO PAKEITIMAI
