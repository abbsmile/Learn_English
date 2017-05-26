// toefl.js
var base = getApp();

Page({
    data: {
        name: '',
        description: '',
        price: '',
        course_imgurl: '',
        // teacher_id,

        // course_id: '',
        // toefl_image: '',
        // 轮播图
        imgUrls: [
            {
                link: '',
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495689382600&di=a5354919ec77cb0680030583db6678ea&imgtype=0&src=http%3A%2F%2Fimg.tiandao.tdedu.org%2FUploads%2Farticle%2F20170428%2F5902df5299b35.jpg'
            }, {
                link: '',
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495689428994&di=d687a639d12e622d9896b4e76b43ac97&imgtype=0&src=http%3A%2F%2Fs15.sinaimg.cn%2Fmw690%2F003Mqgp4gy6HMNVqMqO5e%26690'
            }, {
                link: '',
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495689464307&di=ceb24c417bc13fb32eccfa5a7fcbc27f&imgtype=0&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmiddle%2F6d48f565t9306dea8cfa5%26690'
            }
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 2500,
        duration: 1000,
        userInfo: {}
    },

    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '课程详情'
        })

        var that = this
        wx.request({
            url: base.path.res + "/course",
            header: {'content-type': 'application/json'},
            success: function (res) {
                console.log("请求数据成功，下面设置数据结果！")
                that.setData({
                    name: res.data.course[1].name,
                    description: res.data.course[1].description,
                    price: res.data.course[1].price,
                    course_imgurl: res.data.course[1].course_imgurl,
                    course_id: res.data.course[1].course_id,
                    // teacher_id: res.data.course[1].teacher_id,
                })
            },
            fail: function (res) {
                console.log("submit fail")
            },
            complete: function (res) {
                console.log("submit complete")
            }
        })
    },

    purchase_tap: function (options) {
        var course_id = this.data.course_id
        wx.navigateTo({
            url: "../purchase_ncee/purchase_ncee?course_id=" + course_id
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