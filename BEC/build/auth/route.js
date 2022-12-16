"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userLogin_1 = __importDefault(require("./userLogin/userLogin"));
var express = require("express");
var router = express.Router();
router.post('/google', userLogin_1.default);
module.exports = router;
