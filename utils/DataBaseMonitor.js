const Url = require('../models/url');
const monitoring = require('./monitoring');

module.exports = {
  fetchFromDataBase: function () {
    Url.find()
      .then((res) => {
        res.forEach((data) => {
          monitoring.monitor(data.website)
        })
      })
      .catch((err) => {
        console.log(err);
      })

  }
}
