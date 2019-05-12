// pages/index/new/new.js

var app=getApp();

Page({


  data: {
    title:'',
    text:'',
    task:app.globalData.task,
    ifExist:'',
    t_length: 0,
  },
  text: function (e) {
    var t_text = e.detail.value.length;
    this.setData({
      text: e.detail.value,
      t_length: t_text,
    })
  },

  inputtitle:function(e)
  {
    this.setData({
      title:e.detail.value
    })
  },

  onLoad: function (options) {

    var task = app.globalData.task
    var values = options.values;

    if (values!=-1) {  

      this.setData({
        text:task[values].text,
        title: task[values].name,
     });
}
      this.setData({
        ifExist: values,
        task: task
      })
},

onUnload: function () {

app.globalData.task=this.data.task;

  },

  openAlert: function () {
    
    if(this.data.title){      
           console.log(this.data.title);
         if(this.data.ifExist!=-1){

          let item= {
          name:this.data.title,
          text:this.data.text,
            status: this.data.task[this.data.ifExist].status
          };

          app.globalData.task[this.data.ifExist]=item;

           wx.navigateBack({
    
         })
        }

       else { 
  
               let item = { 
                 name: this.data.title,
                 text: this.data.text,
                 status: false 
                 };

           app.globalData.task.push(item);

                   wx.redirectTo({
                      url: '../todo',
                  })
              }    
}

 else {
      wx.showModal({
        content: '请输入标题',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      });}   
 }})