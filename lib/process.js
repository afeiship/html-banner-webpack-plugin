var fs = require('fs');
var url = require('url');

module.exports = function(inPluginClass, inCompilation inOptions) {
  var assets = inOptions.assets;
  console.log('assets!');
  // YOUR CODE:
  inPluginClass.getHooks(inCompilation).afterEmit.tapAsync(
    'HtmlBannerWebpackPlugin', // <-- Set a meaningful name here for stacktraces
    (data, cb) => {
      // Manipulate the content
      data.html += 'The Magic Footer';
      // Tell webpack to move on
      cb(null, data);
    }
  );
};
