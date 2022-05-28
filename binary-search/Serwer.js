const http = require('http');
const url = require('url');

const port = 1312;  
const {search} = require('./BinarySearch');

const server = http.createServer((req, res) => {
    let query = url.parse(req.url, true).query.q;
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Content-Type', 'application/json');
    if(query)res.end(search("./Dane.json", query));
    else res.end('{"error":"nie podano zapytania (paramet q wysłany metodą get)"}')
});
  
server.listen(process.env.PORT || port, () => {console.log(`listen port ${process.env.PORT || port}`);});