const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Configuration
const PORT = 80;
const HOST = "0.0.0.0";//TODO Change this to the host ip

app.use('/', express.static('./'));
//TODO update the URL to where the valar login App is deployed
app.use('/**', createProxyMiddleware({ target: 'http://localhost:8080/', changeOrigin: true }));


// Start the Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy server at ${HOST}:${PORT}`);
});