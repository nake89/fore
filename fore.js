#!/usr/bin/env node
var dns = require('dns');
if (process.argv.length <= 2) {
    console.log("Give hostname!");
    process.exit(-1);
}
var param = process.argv[2];
dns.resolve4(param, function (err, addresses) {
  if (err) throw err;
  addresses.forEach(function (a) {
    dns.reverse(a, function (err, domains) {
      if (err) {
        console.log('reverse for ' + a + ' failed');
      } else {
        console.log(""+domains);
      }
    });
  });
});
