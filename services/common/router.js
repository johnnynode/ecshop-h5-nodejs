const path = require('path');
const fs = require('fs');
const url = require('url');

module.exports = (req, res) => {
    let urlJson = url.parse(req.url); // 将url解析成对象
    let pathname = urlJson.pathname; // 单独拿出访问路径
    let method = req.method; // 获取请求方式

    if (pathname === '/') {
        // 渲染首页数据
        fs.readFile(path.join(__dirname, '../../www/index.html'), 'utf8', (err, data) => {
            if (err) {
                return console.log(err);
            }
            
            res.writeHead(200, {
                "Content-Type": "text/html"
            })
            res.end(data);
        });
    }
}