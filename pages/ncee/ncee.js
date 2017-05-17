// ncee.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    introduce: "高考英语辅导班课程介绍：",
    ncee_image_introduce: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495007777755&di=7c352686ac1f50e976b3c12996b94900&imgtype=0&src=http%3A%2F%2Fimg.kuaiji.com%2F2016%2F0601%2F1464759405945.jpg",
    content: "根据学生特点及各学科的现状分析，以提高学生总分为目标，根据学生学习现状的分析与诊断，进行不同科目课时的合理分配与规划，合理控制学员在各科目之间的学习投入时间，从全局出发，探究学生提分点，稳步提高学生的学习能力，同时培养科学的学习方法和良好的学习习惯。",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this
    wx.request ({

      url: 'http://english.yj777.cn/public/index.php/index/index/course',

      // 类型
      headers: {
        'Content-Type': 'application/json'
      },

      // 如果执行成功，返回的数据
      success: function(res) {

        console.log(res.data)
        // that.setData({
        //   ncee_from_internet: res.data
        // })
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