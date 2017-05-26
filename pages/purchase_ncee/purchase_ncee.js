// purchase_ncee.js

var app = getApp();

Page({
  
    data: {
        background_image: "http://seopic.699pic.com/photo/50023/0814.jpg_wh1200.jpg",

        userInfo: app.globalData.userInfo,
	    course_id: '',
        pay: '确认支付',
        course_id: '',
        open_id: '',

        disabled: false, // false表示是可用状态
    },

    onLoad: function (options) {
        var that = this

        that.setData ({
            course_id: options.course_id,
        })

        this.WxValidate = app.WxValidate(
            {
                username: {
                    required: true,
                    minlength: 2,
                    maxlength: 10,
                },
                mobile: {
                    required: true,
                    tel: true,
                },
                email: {
                    required: true,
                    email: true,
                },
                identity_no: {
                    required: true,
                    idcard: true,
                }
            },
            {
                username: {
                    required: "请正确填写你的姓名！",
                },
                mobile: {
                    required: '请填写您的手机号',
                },
                email: {
                    required: "请输入您的邮箱帐号",
                },
                identity_no: {
                    required: "请输入你的身份证号码",
                }
            }
        )

		app.getUserInfo(function (userInfo) {
			that.setData({
				userInfo: userInfo,
			})
		})

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
                        that.setData({
                            open_id: openid.data.openid
                        })
                    }
                })
            }
        })
	},// onLoad



    formSubmit: function (e) {

        // 验证输入信息的准确性
        if (!this.WxValidate.checkForm(e) ) {
            const error = this.WxValidate.errorList[0]
            wx.showToast({
                title: `${error.msg} `,
                duration: 2000
            })
            return false
        }

        wx.request({
            url: 'http://localhost/report/english/public/index.php/index/index/student',
            header: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: 'POST',
            data: {
                realname: e.detail.value.username,
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

            // 信息提交成功后: 1.显示提交成功信息 2.进行付款(如果没有提交成功，是不会进行付款的)
            success: function (res) {
                wx.showToast({
                    title: '提交成功！',
                }),
                wx.login({
                        success: function (res) {
                            // 取出这人密钥
                            if (res.code) {
                                var code = res.code;
                                wx.request({
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

            fail: function () {
                wx.showToast({
                    title: '提交失败!'
                })
            },

        })// wx.request
    },// formSubmit
    


})// Page



// function urlToPay() {
//     wx.navigateTo({
//         url: "../pay/pay_ncee"
//     })
// }

// 测试电话号码是否正确实输入
// function IsTel(e) {
//     var phone = e.detail.value;
//     if (phone.toString().length == 11) {
//         return true;
//     }else {
//         return false;
//     }
// }

// 测试个人邮箱是否正确
// function IsMail(e) {
//     var mail = e.detail.value;
    
// }
// 测试身份证号是否正确
// function IS_ID_number (e) {
//     if (mail.toString().length == 18) {
//         return true;
//     }else {
//         return false;
//     }
// }