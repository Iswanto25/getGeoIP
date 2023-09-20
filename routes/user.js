var express = require('express');
var router = express.Router();
var geoip = require('geoip-lite');

var userAgent = require('express-useragent');
router.use(userAgent.express());
/* GET users listing. */
router.get('/', function(req, res, next) {
  const userAgentInfo = req.useragent;
  const clientIp = req.ip;
  const geo = geoip.lookup(clientIp);
  console.log('Informasi GeoIP:', geo);
  console.log('Informasi User Agent:', userAgentInfo);
  res.send('Hello World');
});

module.exports = router;
