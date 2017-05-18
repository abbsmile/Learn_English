// purchase_ncee.js
var app = getApp();
Page({
  
  data: {
		userInfo: {},
		course_id: ''
  },


	onLoad: function (options) {

		this.setData({
			course_id: options.course_id
		})

		var that = this
		app.getUserInfo(function (userInfo) {
			that.setData({
				userInfo: userInfo,
				// nickName: userInfo.nickName
			})
		})

	},


  formSubmit: function (e) {

	console.log("######################")
	console.log(this.data.course_id)
	console.log("######################")

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
				course_id: this.data.course_id
			},

			
      success: function (res) {
        	wx.showToast({
				title: '提交成功！'
			})
      },

	  fail: function () {
		  wx.showToast({
			  title: '提交失败!'
		  })
	  },

    })
  }



}) 