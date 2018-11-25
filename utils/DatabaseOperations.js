const Url = require('../models/url');
var async = require("async");
module.exports = {
  DataBaseSave: function (data, url) {
    let i = 0;
    console.log(url);
    async.whilst(
      function () { return i > -1; },
      function (callback) {
        const Urldata = {
          status: data.statusCode,
          requestTime: data.elapsedTime
        }
        Url.update({ website: url }, { $push: { data: Urldata } });
      },
      function (err) {
        console.log(err)
      }
    )


  },
  DataBaseInitialSava: function (data, url) {
    const Data = new Url({
      website: url,
      header: data.headers,
      data:
      {
        status: data.status,
        requestTime: data.elapsedTime
      }

    })
    Data.save()
  }
}