require('http').Server((req, res) => {
  res.writeHead(301,  { Location: process.env.REDIRECT_HOST + req.url })
  res.end();
}).listen()
