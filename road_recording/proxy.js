const http = require("http");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer();

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Replace the URL below with the URL of your video stream
    const videoUrl = "rtmp://192.168.8.152/live/001";

    // Proxy the request to the video stream
    proxy.web(req, res, {
      target: videoUrl,
    });
  })
  .listen(8090, () => {
    console.log("Proxy server running on port 8090");
  });
