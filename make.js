var browserify = require('browserify');
var es6ify = require('es6ify');
var fs = require('fs');

browserify()
  .add(es6ify.runtime)
  .transform(es6ify)
  .require(require.resolve('./index.js'), { entry: true })
  .bundle()
  .pipe(fs.createWriteStream('./out.js'));
