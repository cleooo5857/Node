const express = require('express');
const UserService = require('../service/userService');
const router = express.Router();

// app.js에서 기본 경로를 설정 가능
router.post("/login",UserService.login);

module.exports = router;