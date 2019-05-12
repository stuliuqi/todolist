//index.js
//获取应用实例

var app=getApp();

Page({
  data: {
    task: app.globalData.task,
    ifExists:'',
  },


  statusChange: function (e) {
    var task = this.data.task
    var values = e.detail.value;
    if (task[values].status)
      task[values].status = false;
    else task[values].status=true;

                                  
    this.setData({
      task: task
    });
  },
  add: function (e) {

    wx.redirectTo({
      url: 'detail/detail?values=-1',
    })
  },
  delete: function (e) {

    let values = e.currentTarget.id;

    app.globalData.task.splice(values, 1);

    wx.redirectTo({
      url: '../index/todo',
    })
  },  
  tasks: function (e) {

    let values = e.currentTarget.id;
    wx.navigateTo({
      url: 'detail/detail?values=' + values,
    })
  },
  onLoad: function (options) {
    this.setData({
      task: app.globalData.task,
    })
  },
  onUnload:function(){

       app.globalData.task = this.data.task;

       console.log(app.globalData.task);
     }
});





