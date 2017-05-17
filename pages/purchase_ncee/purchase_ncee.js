// purchase_ncee.js
var app = getApp();
Page({
  
  data: {
  },


  formSubmit: function (e) {
    
    wx.request({
      url: 'https://english.yj777.cn/public/index.php/index/index/student ',
      
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },

      method: 'POST',

      data: {realname: e.detail.value.username},

      success: function (res) {
        console.log(res.data)
        console.log("提交成功")
      },

      fail:function() {
        wx.showToast({
          title:'abble error!'
        })
      }

    })
  },

}) 