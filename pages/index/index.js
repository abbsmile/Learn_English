//index.js

//获取应用实例
var app = getApp()

Page({

  data: {
    // userInfo: {}
	ncee_motto: '高考 愿你我把握机会',
    toefl_motto: '托福 只给最爱的自己',  
    imageUrl_toefl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494996406291&di=354e8d58df44d5b90dad47b4708c73ce&imgtype=0&src=http%3A%2F%2Fwww.hbpx.net%2Fuploadimg%2F20131024%2F20131024110141_1094.jpg"
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '上海涌洁科技',
      desc: '最具科技感小程序 高效 简洁 实用 ！',

      // 这个路径暂时还不是太清楚，id 是什么鬼？
      path: '/page/user'
    }
  },


  // 上面的头像就是通过这个头像加载的
  // onLoad: function () {

  //   console.log('onLoad')
  //   var that = this

  //   //调用应用实例的方法获取全局数据
  //   app.getUserInfo(function(userInfo){
  //     //更新数据
  //     that.setData({
  //       userInfo:userInfo
  //       // userInfo:'什么鬼'
  //     })
  //   })
  // }
    

  onLoad: function () {
    var that = this

    app.getUserInfo(function (userInfo) {
      
      that.setData({
        userInfo: userInfo

      })
      
    })
  }




  
})
