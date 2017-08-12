var qrcode = require('../../libs/qrcode.js');
const qw = 250; //qrcode width(rpx)

var app = getApp();

Page({
    data: {

    },
    onLoad: function(options) {
        this.renderQRCode();
    },
    onReady: function() {

    },
    renderQRCode: function() {
        var sw = wx.getSystemInfoSync().windowWidth,
            width = parseInt(sw / 750 * qw);

        qrcode.wxQRCode({
            target: 'myCanvas', // canvas'id
            url: 'https://www.douban.com',
            width: width,  // 单位px
            height: width
        })
    },
    onShow: function() {
        // 页面显示
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
    }
})
