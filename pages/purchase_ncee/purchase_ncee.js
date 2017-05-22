// purchase_ncee.js
var app = getApp();

Page({
  
    data: {
        userInfo: {},
	    course_id: '',
        pay: '确认支付',
        course_id: '',
        open_id: ''
    },

    onLoad: function (options) {
        var that = this
		app.getUserInfo(function (userInfo) {
			that.setData({
				userInfo: userInfo,
                course_id: options.course_id,
			})
		})

        // 取出openid等值
        wx.login({
            success: function(loginCode) {
                var appid = "wxb64dc9895b0c02fa";
                var secret = "e2edf00a980a64f2f1775bc17516d90d";

                wx.request ({
                    url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&grant_type=authorization_code&js_code=' + loginCode.code,
                    header: {
                        'content-type': 'application/json'
                    },
                    success: function (openid) {
                        console.log("注意在这上面进行调试")
                        that.setData({
                            open_id: openid.data.openid
                        })
                    }
                })
            }
        })

	},

    formSubmit: function (e) {
        wx.request({
            url: 'http://localhost/report/english/public/index.php/index/index/student',
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
                console.log(res)
                wx.showToast({
                    title: '提交成功！',
                })
            },
            fail: function () {
                wx.showToast({
                    title: '提交失败!'
                })
            },

        })
    },

    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },

    wxpay: function () {
        // console.log("111");
        // return false;
        var that = this
        wx.login({
            // 如果登陆成功的话
            success: function (res) {
                // 取出这人密钥
                if (res.code) {
                    var code = res.code;
                    wx.request({
                        // url:'https://pay.yj777.cn/wechat/example/jsapi.php',
                        url: 'https://english.yj777.cn/vendor/wxpay_api/example/jsapi.php',
                        method: 'GET',
                        data: { code: code },
                        success: function (param) {
                            var md5 = require('MD5.js');
                            var appId = param.data.appid;
                            var timeStamp = (Date.parse(new Date()) / 1000).toString();
                            var pkg = 'prepay_id=' + param.data.prepay_id;
                            var nonceStr = param.data.nonce_str;
                            var paySign = md5.MD5('appId=' + appId + '&nonceStr=' + nonceStr + '&package=' + pkg + '&signType=MD5&timeStamp=' + timeStamp + "&key=Hw1q5ZxHCyPXQTY7TwoJpgZt8eSpvezx").toUpperCase();
                            // console.log(paySign);
                            // console.log(appId);
                            wx.requestPayment({
                                'timeStamp': timeStamp,
                                'nonceStr': nonceStr,
                                'package': pkg,
                                'signType': 'MD5',
                                'paySign': paySign,
                                'success': function (res) {
                                    console.log('success');
                                    console.log(res);
                                }
                            });
                        },
                    })
                }
                else {
                    console.log('获取用户登录态失败！' + res.errMsg)
                }
            }
        });
    },

}) 