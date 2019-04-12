# html-banner-webpack-plugin
> Adds a banner to the top of each generated html.

## install
```bash
npm install -D afeiship/html-banner-webpack-plugin
```

## usage
```js
import HtmlBannerWebpackPlugin from 'html-banner-webpack-plugin';

// ....
plutins:[
  new HtmlBannerWebpackPlugin({
    banner:[
      'NAME: my-awesome-project',
      'BUILD_VERSION: v1.0.2-alpha.3',
      'BUILD_TIME: 2019-04-12 22:22:13'
    ],
    // type: 'html'
  })
]
// ...
```
