const express = require('express');
const mysql = require('mysql2/promise');
const { dbConfig } = require('./dbsetup');

const petsRoutes = express.Router();

petsRoutes.get('/pets', async (req, res) => {
  res.json('cool ok veikia tipo');
});

module.exports = petsRoutes;
