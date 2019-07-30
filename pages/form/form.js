// pages/form/form.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		country:[
			{
				name:'中国',
				value:'CN'
			},
			{
				name:'泰国',
				value:'TH'
			},
			{
				name:'日本',
				value:'JP'
			}
		],
		picker:[
			'中国',
			'泰国',
			'日本'
		],
		pick:0,
		time:'09:30',
		date:'2019-07-25',
		region:['山东省','济南市','槐荫区']
	},

	/**
	 * 自定义的表单提交事件
	 */
	formSubmit(event){
		console.log(event.detail.value);
	},
	/**
	 * 自定义的input输入事件
	 */
	inputHandler(event){
		this.setData({
			pick:event.detail.value
		});
		console.log(event.detail.value);
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