// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  formSubmit: function (e) {
    var that = this
    var types = e.detail.value.type;
    if (!e.detail.value.text) {
      var text = '马丽心';
    } else {
      var text = e.detail.value.text;
    }
    wx.navigateTo({
      url: '/pages/index/inquire/result?textData=' + text + '&typesData=' + types
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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