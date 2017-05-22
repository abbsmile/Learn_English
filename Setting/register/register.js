//  register.js

var app = getApp()


Page({

  data: {
    userInfo: {}
  },

  // 上面的头像就是通过这个头像加载的
  onLoad: function () {

    var that = this
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })

  }


})