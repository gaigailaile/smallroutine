import helper from '../../libs/helper/helper.js' 
const app = getApp();
Page({
	onLoad(options){
		console.log(options);
		this.setData({
			greeting:helper.randItem(app.globalData.greeting)
		})
	},
	onShow(){
		console.log("页面显示");
	},
	onReady(){
		console.log("页面第一次渲染调用");
	},
	onHide(){
		console.log("页面隐藏");
	},
	onUnload(){
		console.log("页面卸载");
	},
	onPullDownRefresh(){
		this.tapGreeting();
	},
	onReachBottom(){
		console.log("页面到底部了");
	},
	onPageScroll(calculations){
		console.log(calculations);
	},
	tapGreeting(event){
		console.log(event);
		this.setData({
			greeting: helper.randItem(app.globalData.greeting)
		});
	},
	data: {
		greeting: ''
	}
})