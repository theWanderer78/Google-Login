"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require('dotenv').config();
var bodyParser = require('body-parser');
var auth = require('./auth/route');
var app = (0, express_1.default)();
var port = 3000;
// var cors = require('cors');
// app.use(cors({origin: 'http://localhost:3001'}));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(require('body-parser').urlencoded({ limit: '50mb', extended: true }));
app.use(express_1.default.json({ limit: '50mb' }));
app.use(require('cors')());
app.use(express_1.default.static('htmls'));
app.get('/', function (req, res) {
    res.send('Hello World, from Crypto Project on OAuth');
});
app.use('/auth/', auth);
app.listen(process.env.PORT || 3000, function () {
    console.log("Listening on port", process.env.PORT || 3000);
});
// `REGISTERING KNEX`
// app.set("db", db);
