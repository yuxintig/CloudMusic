//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        env:'yxt-1gawsd7oe00b1037',
        traceUser: true,
      })
    }

    this.globalData = {}


  wx.getSystemInfo({
    success: function success(res) {
      var ios = !!(res.system.toLowerCase().search('ios') + 1);
      var statusBarHeight = res.statusBarHeight;
      var topBarHeight = ios ? (44 + statusBarHeight) : (48 + statusBarHeight);
      var innerWidth = wx.getMenuButtonBoundingClientRect().left
      var innerPaddingRight = res.windowWidth - innerWidth
      wx.setStorageSync("systemInfo",{
        ios: ios,
        topBarHeight: topBarHeight,
        statusBarHeight: statusBarHeight,
        innerWidth: 'width:' + innerWidth + 'px',
        innerPaddingRight: 'padding-right:' + innerPaddingRight + 'px',
        contentWidth: innerWidth / 1 + 'px'
      })
    }
  })
}
})
