var browserify = require('browserify');
var viralify = require('viralify');
var es6ify = require('es6ify');
var koaify = require('koaify');
var fs = require('fs');

/*
viralify('./', ['koa-*', 'fax-*'], 'es6ify', function (err) {
  if (err) return console.error(err);
})*/

koaify();

browserify()
  .add(es6ify.runtime)
  .transform(es6ify)
  .require(require.resolve('./index.js'), { entry: true })
  .bundle()
  .pipe(fs.createWriteStream('./build/bundle.js'));
