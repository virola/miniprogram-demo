/**
 * @file 小程序入口
 * @author <author>
 */

'use strict';

export default {
  config: {
    pages: [
      'pages/home/home',
      'pages/home/index',
    ],

    window: {
      navigationBarBackgroundColor: '#211E2E',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: 'light',
      enablePullDownRefresh: true,
      backgroundColor: '#ccc',
    },

    networkTimeout: {
      request: 30000,
    },
  },

  // 全局变量
  globalData: {
    // domainName: 'https://socket.bihuyihu.com/',  //正式环境
    // socket: 'wss://socket.bihuyihu.com/gwecs/websocket',  //正式环境

    domainName: 'http://wxhd.goalwisdom.net/gwecs/',  //测试环境
    socket: 'https://socket.goalwisdom.net/gwecs/websocket',  //测试环境

    appId: 'wxaa9d09a4322f97e8',
    token: '',
    musicGet: 'http://img.bihuyihu.com/sound/get.mp3',  //收到消息音乐
    musicSend: 'http://img.bihuyihu.com/sound/send.mp3',  //发送消息音乐
  },

  onLaunch() {
    console.log('launched');
  },
  // 小程序启动或从后台切到前台显示触发
  onShow() {},
  // 小程序从前台切入到后台触发
  onHide() {},
  // 小程序脚本出错或者api调用失败触发
  onError() {},
  // 打开页面不存在触发回调
  onPageNotFound() {},

  $promisifyApis: [],
};
