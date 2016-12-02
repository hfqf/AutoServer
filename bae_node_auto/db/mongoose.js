/**
 * Created by points on 16/11/15.
 */
var mongoose = require('mongoose');
var config = require('../utils/config.js');

module.exports=function () {
    var db = mongoose.connect(config.mongodb);
    require('../models/user.server.model.js');
    require('../models/model.contact');
    require('../models/model.repair');
    return db;
};