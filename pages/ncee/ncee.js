// ncee.js

var base = getApp()

Page({

    data: {
        name: '',
        course_imgurl: '',
        description: '',
        price: '',
        teacher_id: '',
        course_id: '',

        // 轮播图
        imgUrls: [
            {
                link:'',
                url:'http://seopic.699pic.com/photo/50039/1906.jpg_wh1200.jpg'
            },{
                link:'',
                url:'http://seopic.699pic.com/photo/50039/2251.jpg_wh1200.jpg'
            },{
                link:'',
                url:'http://seopic.699pic.com/photo/50026/7187.jpg_wh1200.jpg'
            }
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 2500,
        duration: 1000,
        userInfo: {}
    },

    onLoad: function (options) {
        wx.setNavigationBarTitle ({
            title: '课程详情'
        })

        var that = this
        wx.request({
            url: base.path.res + "/course",
            header: {'content-type': 'application/json'},
            success: function (res) {
                that.setData({
                    name: res.data.course[0].name,
                    course_imgurl: res.data.course[0].course_imgurl,
                    description: res.data.course[0].description,
                    price: res.data.course[0].price,
                    // 下面一些东西是要上传的
                    teacher_id: res.data.course[0].teacher_id,
                    course_id: res.data.course[0].course_id,
                    course_code: res.data.course[0].code,
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

    purchase_tap: function (options) {
        var course_id = this.data.course_id
        wx.navigateTo({
            url: "../purchase_ncee/purchase_ncee?course_id=" + course_id,
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


    // 下面是对按钮进行的配置
    var types = ['default', 'primary', 'warn']
    var pageObject = {
        data: {
            defaultSize: 'default',
            primarySize: 'default',
            warnSize: 'default',
            disabled: false,
            plain: false,
            loading: false
        },
        setDisabled: function (e) {
            this.setData({
                disabled: !this.data.disabled
            })
        },
        setPlain: function (e) {
            this.setData({
                plain: !this.data.plain
            })
        },
        setLoading: function (e) {
            this.setData({
                loading: !this.data.loading
            })
        }
    }