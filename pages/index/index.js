//index.js

var app = getApp()

Page({

    data: {
        userInfo: {},
	    ncee_motto: '高考 愿你我把握机会',
        toefl_motto: '托福 只给最爱的自己',  
        imageUrl_toefl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494996406291&di=354e8d58df44d5b90dad47b4708c73ce&imgtype=0&src=http%3A%2F%2Fwww.hbpx.net%2Fuploadimg%2F20131024%2F20131024110141_1094.jpg"
    },

    onShareAppMessage: function () {
        return {
            title: '上海涌洁科技',
            desc: '最具科技感小程序 高效 简洁 实用 ！',
            // 这个可以查查是什么东西 ？ 
            path: '/page/user'
      }
    },
    onLoad: function () {
        var that = this
        app.getUserInfo(function(userInfo){
            that.setData({
                userInfo:userInfo
            })
        })
    },

    // navigate to NCEE
    skip_Ncee: function () {
        wx.navigateTo({
            url: '../ncee/ncee'
        })
    },
    
})
