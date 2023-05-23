const  mongoose  = require("mongoose");
const dbURL2 = require('./properties').DB2;

/**
 * We create the module for the 
 * connection of the database with Mongo DB
 * 
 */
module.exports = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(dbURL2)
    .then(() => console.log(`¨Mongoo Connected on ${dbURL2} `))
    .catch(err => console.log(` Connecion has error ${err} `));
/**
 * Validation if connect or not
 */
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log(` Mongoo is disconnected `);
        process.exit(0);
    })
})
}