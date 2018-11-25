const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrlSchema = new Schema(
  {
    website: {
      type: String,
      required: true
    },
    header: {
      type: Object,
      required: true
    },
    data: [
      {
        status: {
          type: Number,
          require: true
        },
        requestTime: {
          type: Number
        }
      }
    ]
  }
)


const url = mongoose.model('urls', UrlSchema);
module.exports = url;