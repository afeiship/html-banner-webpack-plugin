var objectAssign = require('object-assign');

// import packages:
require('next-nice-comments');

/**
 * Configure the plugin
 * @param {Options} inOptions
 */
function HtmlBannerWebpackPlugin(inOptions) {
  var options = objectAssign(
    {
      banner: ['hello'],
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
  var options = this.options;
  if (compiler.hooks) {
    // webpack >=4.0
    compiler.hooks.compilation.tap('HtmlBannerWebpackPlugin', function(compilation) {
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync(
        'HtmlBannerWebpackPlugin',
        function(data, callback) {
          data.html = nx.niceComments(options.banner, options.type) + data.html;
          callback(null, data);
        }
      );
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
