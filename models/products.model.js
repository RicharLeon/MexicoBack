const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Here we host the scheme which will be fundamental 
 * for sending and receiving the information
 */
const productsSchema = new Schema ({
    name:{
        type: String,
        required: true,
        trim:true
    },
    price:{
        type: Number,
        required: true,
        trim:true,
    },
    category:{
        type: String,
        required: true,
        trim:true
    },
    state:{
        type: String,
        required: true,
        trim:true
    },
    amount:{
        type: Number,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: false
    }
},{
    /**
     * The timestamps Works to store the time of the edition or creation of the data
     */
    timestamps: true
});

/**
 * We minimize the name of the scheme for ease of use
 */
const Products = mongoose.model('Products', productsSchema);

/**
 * Export the schema
 */
module.exports = Products