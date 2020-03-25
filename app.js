var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('./index.html', 'UTF-8').pipe(res);
    }
    else if (req.method === 'POST') {
        let body = '';
        req.on('data', (formData) => {
            body += formData;
        });

        req.on('end', () => {
            fs.writeFile('message.txt', body, (err) => {
                if (err) {
                    console.log(err)
                }
            });
            res.end(body);
        })
    }
}).listen(8080, () => console.log("Server running on 8080"));