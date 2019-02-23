// //微信config配置
import Vue from 'vue'
import axios from 'axios'
//微信jssdk

import wx from 'weixin-js-sdk'

let imgUrl = "";

export function requireConfig() {
  // const data = {
  //   auth_url: encodeURI(window.location.href)
  // };
  axios.post('http://m.api.meijujingxuan.com/home/Share/share').then(res => {
    if (res.data.status == "200") {
      imgUrl = res.data.data.url;
      wx.config({
        debug: true,
        appId: res.data.data.appId,
        timestamp: res.data.data.timestamp / 1,
        nonceStr: res.data.data.nonceStr,
        signature: res.data.data.signature,
        jsApiList: [ //需要使用的网页服务接口
          //									"checkJsApi", //判断当前客户端版本是否支持指定JS接口
          "onMenuShareTimeline", //分享给好友
          "onMenuShareAppMessage" //分享到朋友圈
        ]
      })
    }
  });
}

export function requireShare(title, cur_href) {
  // let u = navigator.userAgent;
  // if (u.indexOf('Android') > -1) {
  //   requireConfig();
  // }
  wx.ready(function () {
    alert("开始")
    wx.onMenuShareTimeline({
      title: title,
      // desc,
      // desc: desc,
      link: cur_href,
      img_url: imgUrl,
      type: "link",
      success: function () {
        alert("分享成功")
      },
      cancel: function () {
        alert("取消分享")
      }
    });
    wx.onMenuShareTimeline({
      title: title,
      // desc: desc,
      link: cur_href,
      img_url: imgUrl,
      type: "link",
      success: function () {
        alert("分享成功")
      },
      cancel: function () {
        alert("取消分享")
      }
    });
  });
}
