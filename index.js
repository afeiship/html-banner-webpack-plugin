var objectAssign = require('object-assign');

/**
 * Configure the plugin
 * @param {Options} inOptions
 */
function HtmlBannerWebpackPlugin(inOptions) {
  var options = objectAssign(
    {
      banner: ['hello']
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

  if (compiler.hooks) {
    // webpack >=4.0
    compiler.hooks.compilation.tap('HtmlBannerWebpackPlugin', (compilation) => {
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync(
        'HtmlBannerWebpackPlugin',
        function(data, callback) {
          data.html += '<!--FEI COMING!!!--->';
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
