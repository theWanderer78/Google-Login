import userLogin from "./userLogin/userLogin";


const express = require("express");
const router = express.Router();


router.post('/google', userLogin);

module.exports = router;