/**
 * Created by points on 16/11/19.
 */
var mongoose = require('mongoose');
var Setting = require('../utils/config.js');

var ContactSchema = new mongoose.Schema({
    carcode:String,
    name:String,
    tel:String,
    cartype:String,
    owner:String,
});

mongoose.model(Setting.ModelNameContact,ContactSchema);



