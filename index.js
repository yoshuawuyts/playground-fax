var fax = require('fax');

var app = fax();

app.use(function *(next) {
  this.url = 'http://localhost:8080';
  this.method = 'GET';

  yield next;
  console.log(this)
});

app.send();
