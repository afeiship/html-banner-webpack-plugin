# html-banner-webpack-plugin
> Adds a banner to the top of each generated html.

---
<center>
  <img width="600" src="https://ws3.sinaimg.cn/large/006tNc79gy1g21fgm8dz8j30gi0b6mz4.jpg"/>
</center>

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
      'NAME: editor-frontend',
      'VERSION: v1.1.5-alpha.6',
      'BUILD_TIME: 4/12/2019, 11:01:20 PM'
    ]
  })
]
// ...
```
