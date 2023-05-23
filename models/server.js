const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

/**
 * class to house all the information that 
 * should go in the main file, this to make it look cleaner the same
 */
class Server {
    /**
     * Here we create the constructor
     * to call the methods to use
     */
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.productsPath = '/api/products';
        this.router = express.Router();
        //CORS
        this.middlewares();
        //Middlewares
        this.routes();
    }
   
    /**
     * here we host the middlewares and
     *  the parsing of the information, 
     * which is received in JSON format
     */
    middlewares(){
        //CORS
        this.app.use(cors({ origin: '*' }));
        //PARSING AND READING BODY
        this.app.use(express.json());
    }

    /**
     * We host the bodyparser, for the help 
     * of receiving data and the routes of the requests
     */
    routes(){
        // call a bodyparser
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());  
        //call routes
        this.app.use(this.productsPath, require('../routes/products.routes'));
    }
    /**
     * Port in which you are listening,
     *  there are ENV variables which can be modified to use the project
     */
    listen(){

        this.app.listen(this.port, () => {
            console.log('server runing in port ', this.port)
        });
    }
}

/**
 * Export of the class
 */
module.exports = Server;