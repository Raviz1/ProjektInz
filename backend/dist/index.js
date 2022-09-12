"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send('Express + TypeScript Server');
});
app.listen(3005, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at http://localhost:".concat(3005));
});
