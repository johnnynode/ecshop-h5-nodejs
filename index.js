"use strict";

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const reqHandler = require('./services/common/request-handler');
const router = require('./services/common/router.js');

// 创建一个服务器
const server = http.createServer((req, res) => {
    // 处理请求
    reqHandler(req, res, () => {
        router(req, res);
    });
});

// 监听一个3000端口
server.listen(3000, '127.0.0.1', function () {
  console.log('server is listening at port 3000');
});