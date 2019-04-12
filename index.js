var objectAssign = require('object-assign');
var process = require('./lib/process');

// packages:
require('next-nice-comments');

/**
 * Configure the plugin
 * @param {Options} inOptions
 */
function HtmlBannerWebpackPlugin(inOptions) {
  var options = objectAssign(
    {
      banner: ['hello html-banner-webpack-plugin!'],
      type: 'js'
    },
    inOptions
  );

  this.options = options;
}

/**
 * Implement the plugin
 */
HtmlBannerWebpackPlugin.prototype.apply = function(compiler) {
  var self = this;
  var updateOptions = function(compilation) {
    Object.assign(self.options, {
      output: self.options.output(compiler.options.output.path, self.options.ext),
      assets: compilation.assets
    });
  };

  if (compiler.hooks) {
    // webpack >=4.0
    compiler.hooks.emit.tap('HtmlBannerWebpackPlugin', function(compilation) {
      updateOptions(compilation);
      return process(HtmlBannerWebpackPlugin, compilation, self.options);
    });
  } else {
    // webpack < 4.0:
    compiler.plugin('emit', function(compilation) {
      console.log('NOT_SUPPORT!');
      // updateOptions(compilation);
      // return process(self.options);
    });
  }
};

module.exports = HtmlBannerWebpackPlugin;
