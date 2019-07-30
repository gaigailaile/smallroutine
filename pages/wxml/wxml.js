// pages/wxml/wxml.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		currentView:'blue',
		images:[
			'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563961593279&di=20ce3674a0e9addc6691deda11ae855c&     imgtype=0&src=http%3A%2F%2Fimg3.2345.com%2Fduoteimg%2FzixunImg%2Flocal%2F2012%2F10%2F09%2F13497489221008.png',			                            '../../assets/images/demo-1.jpg',   
			'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563961593279&di=4343bb174a5d41eaf53efb9b1433c64e&imgtype=0&src=http%3A%2F%2Fimg.pcgames.com.cn%2Fimages%2Fpiclib%2F201208%2F16%2Fsimple%2F1%2F134509260096174wl887qha.jpg'
		]
	},

	/**
	 * 按钮更换scroll-view的显示
	 */
	setScrollView(event){
		this.setData({
			currentView:event.target.dataset.view
		});
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