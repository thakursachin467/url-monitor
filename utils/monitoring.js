const request = require('request');
const dataBaseOperations = require('./DatabaseOperations');
var async = require("async");
module.exports = {
  monitor: function (url) {
    setInterval(() => {
      let i = 0;
      async.whilst(
        function () { return i > -1 },
        function (callback) {
          request
            .get({
              uri: url,
              method: 'GET',
              time: true
            }, (err, resp) => {
              if (err) {
                callback(err)
              } else {
                console.log(resp.statusCode, resp.elapsedTime)
                dataBaseOperations.DataBaseSave(resp, url);
              }
            })
        },
        function (err) {
          console.log(err);
        }
      )
    }, 1000)

  },
  initialMonitor: function (url) {
    request
      .get({
        uri: url,
        method: 'GET',
        time: true
      }, (err, resp) => {
        if (err) {
          callback(err)
        } else {
          console.log(resp.statusCode, resp.elapsedTime)
          dataBaseOperations.DataBaseInitialSava(resp, url);
        }
      })
    module.exports.monitor(url);
  }
}