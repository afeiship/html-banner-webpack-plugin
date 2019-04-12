# html-banner-webpack-plugin
> Adds a banner to the top of each generated html.

## install
```bash
npm install afeiship/html-banner-webpack-plugin
```

## usage
```js
new HtmlBannerWebpackPlugin({
  banner:[
    'NAME: my-awesome-project',
    'BUILD_VERSION: v1.0.2-alpha.3',
    'BUILD_TIME: 2019-04-12 22:22:13'
  ],
  // type: 'html'
})
```
