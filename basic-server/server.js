const http = require('http');
const url = require('url'); // url resolution & parsing

// create the server
const server = http.createServer((req, res) => {
  // respond with 200 'OK' status & rew headers e.g. content-type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // endpoint requested by client
  let page = url.parse(req.url).pathname;

  switch (page) {
    case '/':
      res.write('This is the root page');
      break;
    case '/users':
      res.write('Welcome to the Users page');
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write(
        '<!DOCTYPE html>' +
          '<html>' +
          ' <head>' +
          ' <meta charset="utf-8" />' +
          ' <title>Page Not Found!</title>' +
          ' </head>' +
          ' <body>' +
          ' <p>Sorry the page <strong>' +
          page +
          '</strong> could not be found!</p>' +
          ' </body>' +
          '</html>'
      );
      break;
  }

  res.end();
});

// set listening port
server.listen(3000);
