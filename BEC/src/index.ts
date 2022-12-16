import express from 'express';
import db from './core/database/index'

require('dotenv').config()

var bodyParser = require('body-parser')

const auth = require('./auth/route')

const app = express();
const port = 3000;
// var cors = require('cors');
// app.use(cors({origin: 'http://localhost:3001'}));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));


app.use(require('body-parser').urlencoded({ limit: '50mb', extended: true }))
app.use(express.json({ limit: '50mb' }))

app.use(require('cors')())
app.use(express.static('htmls'))



app.get('/', (req, res) => {
  res.send('Hello World, from Crypto Project on OAuth');
});

app.use('/auth/', auth)

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port", process.env.PORT || 3000)
});


// `REGISTERING KNEX`
// app.set("db", db);
