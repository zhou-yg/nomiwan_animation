/**
 * Created by zyg on 16/1/19.
 */
// Generated by CoffeeScript 1.8.0

var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/DB';

var connectedDb = null;

var connectTo = function () {
  return new Promise(function (resolve) {
    return MongoClient.connect(url, function (err, db) {
      if (err) {
        throw err;
      }
      return resolve(db);
    });
  });
};

var dbReady = function(cb) {
  if (connectedDb) {
    return cb(connectedDb);
  } else {
    return connectTo().then(function(db) {
      connectedDb = db;
      return cb(connectedDb);
    });
  }
};

module.exports = {
  db:function(collectionName){
    return function (cb) {
      dbReady(function (db) {
        cb(db.collection(collectionName));
      });
    }
  }
};

//# sourceMappingURL=model.js.map
