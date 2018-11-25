const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const port = process.env.PORT || 5000;
const dataBaseMonitor = require('./utils/DataBaseMonitor');

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//db config
const db = require('./config/keys').mongoURI;
//connect to mongodb
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => {
    //this will monitor all the urls that are previously in the database whenever we restart our server and will continue to monitor them every second
    dataBaseMonitor.fetchFromDataBase()
    console.log('database connected')
  })
  .catch((err) => console.log(err));





app.use('/api', routes);

app.listen(port, () => console.log(`Server Started at port ${port}`));
