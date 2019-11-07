// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        console.log("In burger.js");
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions
module.exports = burger;