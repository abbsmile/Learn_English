// purchase_ncee.js
var app = getApp();
Page({
  
  data: {
		userInfo: {}
  },


	onLoad: function () {

		var that = this
		app.getUserInfo(function (userInfo) {
			that.setData({
				userInfo: userInfo,
				// nickName: userInfo.nickName
			})
		})

	},


  formSubmit: function (e) {
		
    wx.request({
      url: 'https://english.yj777.cn/public/index.php/index/index/student ',
      
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },

      method: 'POST',

      data: {realname: e.detail.value.username,
				mobile: e.detail.value.mobile,
				email: e.detail.value.email,
				identity_no: e.detail.value.identity_no,

				nickName: this.data.userInfo.nickName,
				province: this.data.userInfo.province,
				city: this.data.userInfo.city,
				country: this.data.userInfo.country,
				gender: this.data.userInfo.gender,
			},

			fail: function () {
				wx.showToast({
					title: '提交失败!'
				})
			},


      success: function (res) {
        wx.showToast({
					title: '提交成功！'
				}),
				console.log("################"),
        console.log(res),
				console.log("################")
      },

    })
  }



}) 