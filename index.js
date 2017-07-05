"use strict";

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

// 创建一个服务器
const server = http.createServer((req, res) => {
    console.log(req.url);
    let reqUrl = req.url;
    if (reqUrl === '/') {
        // 渲染首页
        fs.readFile(path.join(__dirname, 'www/index.html'), 'utf8', (err, data) => {
            if (err) {
                return console.log(err);
            }
            res.writeHead(200, {
                "Content-Type": "text/html"
            })
            res.end(data);
        });
    };

    // 静态文件访问
    if (reqUrl.startsWith('/assets')) {
        let fullPath = path.join(__dirname, 'www', reqUrl);
        fs.readFile(fullPath, (err, data) => {
            if (err) {
                return console.log(err);
            }
            
            let mineType = mime.lookup(fullPath);
            res.writeHead(200, {
                'Content-Type': mineType
            });
            res.end(data);



        })
    }

});

// 监听一个3000端口
server.listen(3000, '127.0.0.1', function () {
  console.log('server is listening at port 3000');
});