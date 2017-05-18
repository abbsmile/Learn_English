// ncee.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    ncee_image_introduce: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495007777755&di=7c352686ac1f50e976b3c12996b94900&imgtype=0&src=http%3A%2F%2Fimg.kuaiji.com%2F2016%2F0601%2F1464759405945.jpg",
    description: '',
    price: '',
    teacher_id: '',
	course_id: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this
      wx.request({
        url: 'https://english.yj777.cn/public/index.php/index/index/course',
        header: {
         'content-type': 'application/json'
        },
        success: function (res) {
           that.setData({
             name: res.data.course[0].name,
             description: res.data.course[0].description,
             price: res.data.course[0].price,
             teacher_id: res.data.course[0].teacher_id,
			 course_id: res.data.course[0].course_id
           })
           console.log('submit success');
        },
        fail: function () {
          console.log('submit fail');
        },
        complete: function () {
          console.log('submit comlete');
        }
      })
    },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
	
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  }
})