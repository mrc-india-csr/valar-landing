const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Configuration
const PORT = 8080;
const HOST = "localhost";

app.use('/landing', express.static('./'));
app.use('/**', createProxyMiddleware({ target: 'http://117.239.70.26/', changeOrigin: true }));


// Start the Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy server at ${HOST}:${PORT}`);
});