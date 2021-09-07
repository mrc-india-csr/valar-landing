const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const https = require('https');
//const http = require('http');
const fs = require('fs');

// Create Express Server
const app = express();

app.use('/', express.static('./'));
//TODO update the URL to where the valar login App is deployed
app.use('/**', createProxyMiddleware({ target: 'http://localhost:8080/', changeOrigin: true }));

// //Create the http server
// const httpServer = http.createServer(app);

// const HTTP_PORT = 8081
// // Start the Proxy
// httpServer.listen(HTTP_PORT, () => {
//   console.log(`Starting Http Proxy server at port ${HTTP_PORT}`);
// });

//Create the https server
const httpsServer = https.createServer({
  key: fs.readFileSync('/home/deepag/Desktop/valar/privatekey.pem'),
  cert: fs.readFileSync('/home/deepag/Desktop/valar/cert.pem'),
}, app);

const HTTPS_PORT = 443
// Start the Proxy
httpsServer.listen(HTTPS_PORT, () => {
  console.log(`Starting Https Proxy server at port ${HTTPS_PORT}`);
});