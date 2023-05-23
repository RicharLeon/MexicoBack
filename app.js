require('dotenv').config();
const db = require('./config/db');
const Server = require('./models/server');

/**
 * Here, call the class, All project information is hosted
 */
const server = new Server();

/**
 * Here, call BD
 */
db();

/**
 * Here inizialiced proyect
 */
server.listen(); 