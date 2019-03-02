// pages/table/all.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var array = that.data.array;
    var tables = wx.getStorageSync('alltable')
    if (options.table) {
      that.setData({
        table: JSON.parse(options.table)
      })
      that.setData({
        info: tables.data.result,
        table: tables.data.table
      });
    } else {
      if (!tables) {
        wx.showToast({
          title: '加载中',
          icon: 'loading',
          duration: 10000
        })
      } else {
        that.setData({
          info: tables.data.result,
          table: tables.data.table
        });
        wx.showNavigationBarLoading()
      }
      wx.login({
        success: function (res) {
          if (res.code) {
            wx.request({
              url: "https://tt.inwang.net/api.php",
              header: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              method: "POST",
              data: {
                type: "all_table",
                code: res.code
              },
              complete: function (res) {
                wx.hideToast()
                that.setData({
                  info: res.data.result,
                  table: res.data.table
                });
                console.error(res.data.table);
                wx.hideNavigationBarLoading()
                wx.setStorageSync('alltable', res)
                if (res == null || res.data == null) {
                  console.error('网络请求失败');
                  return;
                } else if (res.data.result == 'false') {
                  wx.navigateTo({
                    url: '/pages/reg/reg'
                  })
                } else if (res.data.result == 'noinfo') {
                  wx.showModal({
                    content: '教务系统维护ing...',
                    showCancel: false,
                    complete: function () {
                      wx.navigateBack({
                        delta: 1
                      })
                    }
                  });

                }
              }
            })
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      });
    }
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

  }
})