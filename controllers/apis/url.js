const monitoring = require('../../utils/monitoring');
const Url = require('../../models/url');
const percentiles = [0.50, 0.75, 0.95, 0.99];
module.exports = {

  urlFetch: function (req, res, next) {
    const id = req.params.id;
    if (id !== undefined) {
      console.log(id);
      Url.findById(id)
        .then((resp) => {
          const timeStamp = resp.data.map((item) => {
            return item.requestTime
          }).slice(0, 100).sort((a, b) => a - b);
          const percentile = percentiles.map((item) => {
            return {
              timeStamp: timeStamp[Math.round(item * timeStamp.length)],
              percentile: item * 100 + ' percentile'
            }
          });
          const data = {
            id: resp.id,
            success: true,
            headers: resp.header,
            website: resp.website,
            timeStamps: timeStamp,
            percentile: percentile
          }
          res.status(200).send({ data });
        })
        .catch((err) => {
          const data = {
            success: false
          }
          console.log(err);
          res.status(404).send(data);
        })
    } else {
      Url.find()
        .then((resp) => {

          const data = {
            success: true,
            data: resp
          }
          res.status(200).send({
            data
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(404).send({
            success: false
          })
        })
    }

  },
  urlSave: function (req, res, next) {
    let url = req.body.url;
    var prefix = 'https://';
    if (url.substr(0, prefix.length) !== prefix) {
      url = prefix + url;
    }
    monitoring.initialMonitor(url);
    res.status(200).send({
      success: true
    })
  },
  urlEdit: function (req, res, next) {
    const id = req.params.id;
    const name = req.body.name;
    Url.findById(id)
      .then((resp) => {
        resp.website = name;
        resp.save()
          .then((resp) => {
            res.status(200).send({
              success: true
            })
          })
          .catch((err) => {
            res.status(400).send({
              success: false
            })
          })

      })
      .catch((err) => {
        res.status(404).send({
          success: false
        })
      })

  },
  urlDelete: function (req, res, next) {
    const id = req.params.id;
    Url.deleteOne({ _id: id })
      .then((resp) => {
        res.status(200).send({
          success: true
        })
      })
      .catch((err) => {
        res.status(400).send({
          success: false
        })
      })
  }
}
