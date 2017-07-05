"use strict";

const http = require('http');
const url = require('url');

// 创建一个服务器
const server = http.createServer((req, res) => {
    console.log(req.url);
});

// 监听一个3000端口
server.listen(3000, '127.0.0.1', function () {
  console.log('server is listening at port 3000');
});