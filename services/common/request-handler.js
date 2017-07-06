const fs = require('fs');
const path = require('path');
const qstring = require('querystring');
const url = require('url');
const mime = require('mime');

// 处理请求访问，如果是静态资源，那么返回静态资源，如果不匹配,则请求的不是静态资源那么执行next函数
module.exports = (req, res, next) => {
    let pathname = url.parse(req.url).pathname; // 解析访问路径
    // 解析静态资源
    if (pathname.startsWith('/assets')) {
        let fullPath = path.join(__dirname, '../../www' + req.url);
        fs.readFile(fullPath, (err, data) => {
            if (err) {
                return console.log(err);
            }
            let mimeType = mime.lookup(fullPath); // 通过路径访问解析mime类型
            mimeType.startsWith('text/') && (mimeType += '; charset=utf-8'); // 单独处理text类型的
            res.writeHead(200, {
                'Content-Type': mimeType
            });
            res.end(data);
        })
    } else {
        // 解析正常的请求体，POST 或 GET
        if (req.method === 'POST') {
            let data = '';
            req.on('data', (chunk) => {
                data += chunk;
            });
            req.on('end', () => {
                req.body = qstring.parse(data);
                next();
            });
        } else {
            req.body = {}; // 如果不是post请求，那么也给req挂载一个body空对象，防止后面使用的时候出错
            next();
        }
    }
}