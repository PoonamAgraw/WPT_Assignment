
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const queryData = parsedUrl.query;
    console.log(req.headers);
    if (queryData.name === 'XAY') {
        res.writeHead(200, { 'Content-Type': 'text/JSON' });
        res.end(`<h1>Hello, ${queryData.name}</h1>`);
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hello' }));
    }
});
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});