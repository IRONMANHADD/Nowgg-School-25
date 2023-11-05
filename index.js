const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'style.css'));
});
app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'script.js'));
});

app.use(createProxyMiddleware('/', {
  target: 'https://now.gg',
  changeOrigin: true,
  secure: false, // Bypass SSL Verification if needed
}));

const port = 80;
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
