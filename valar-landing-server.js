const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const https = require('https');
const fs = require('fs');

// Create Express Server
const app = express();

// Configuration
const PORT = 443;

app.use('/', express.static('./'));
//TODO update the URL to where the valar login App is deployed
app.use('/**', createProxyMiddleware({ target: 'http://localhost:8080/', changeOrigin: true }));

//Create the https server
const httpsServer = https.createServer({
  key: fs.readFileSync('/home/deepag/Desktop/valar/privatekey.pem'),
  cert: fs.readFileSync('/home/deepag/Desktop/valar/cert.pem'),
}, app);


// Start the Proxy
httpsServer.listen(PORT, () => {
  console.log(`Starting Https Proxy server at port ${PORT}`);
});