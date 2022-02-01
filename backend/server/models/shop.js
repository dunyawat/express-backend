const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type:String, required:true, trim:true },
    photo:{ type: String, default:'nopic.png' },
    location:{
        lat:Number,
        lgn:Number
    },
},{
    timestamps:true
});

const shop = mongoose.model('Shop', schema);

module.exports = shop;