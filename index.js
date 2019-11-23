var objectAssign = require('object-assign');
var nx = require('@feizheng/next-js-core2');
var DEFAULT_OPTIONS = {
  banner: ['hello comments banner'],
  type: 'html'
};

// import packages:
require('@feizheng/next-nice-comments');

/**
 * Configure the plugin
 * @param {Options} inOptions
 */
function HtmlBannerWebpackPlugin(inOptions) {
  this.options = objectAssign(DEFAULT_OPTIONS, inOptions);
}

/**
 * Implement the plugin
 * webpack-plugin: v3.2.0
 */
HtmlBannerWebpackPlugin.prototype.apply = function(compiler) {
  var options = this.options;
  if (compiler.hooks) {
    compiler.plugin('compilation', function(compilation) {
      compilation.plugin('html-webpack-plugin-before-html-processing', function(data, cb) {
        data.html = nx.niceComments(options.banner, options.type) + data.html;
        // cb(null, data)
      });
    });
  } else {
    // webpack < 4.0:
    compiler.plugin('emit', function(compilation) {
      console.log('NOT SUPPORT!');
      // updateOptions(compilation);
      // return process(self.options);
    });
  }
};

module.exports = HtmlBannerWebpackPlugin;
