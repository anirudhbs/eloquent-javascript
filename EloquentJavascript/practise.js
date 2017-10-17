const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest,
  req = new XMLHttpRequest();
req.open("GET", './data.txt', false);
req.send(null);
console.log(req);
// → This is the content of data.txt
