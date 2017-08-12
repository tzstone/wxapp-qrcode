<p> 
修改jquery-qrcode的代码, 用微信小程序的api绘制canvas. // jquery-qrcode git地址: https://github.com/jeromeetienne/jquery-qrcode
</p>

# 如何使用
* 引入qrcode.js

```javascript
var qrcode = require('qrcode.js');
```

* 调用wxQRCode方法

```javascript
qrcode.wxQRCode({
    target: "myCanvas", // canvas'id
    url: "https://www.douban.com",
    width: 150,  // 单位px
    height: 150
})
```

* 注意
    * width和height的单位必须先从rpx转换为px 



