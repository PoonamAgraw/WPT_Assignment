const http = require('http');
const { URL } = require('url');

let Todos = [
    { id: 1, task: 'Read Carefully' },
    { id: 2, task: 'Implement' }
];

const server = http.createServer(function (request, response) {
    const { method } = request;
    const parsedURL = new URL(request.url, `http://${request.headers.host}`);
    const pathname = parsedURL.pathname;

    if (method === 'GET' && pathname === '/TODOS') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(Todos));
    } 
});

server.listen(3049, () => {
    console.log('Server is running on http://localhost:3049');
});