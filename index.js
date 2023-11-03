const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();

app.use(cors());

// Serve a different HTML file for the root page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'style.css'));
});
app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'script.js'));
});

// Proxy middleware for all other routes
app.use(createProxyMiddleware('/', {
  target: 'https://now.gg',
  changeOrigin: true,
  secure: false, // Bypass SSL/TLS verification
}));

const port = 80;
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
