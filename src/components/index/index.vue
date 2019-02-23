<template>
  <div class="index-box">
    <!-- 头部模态框 -->
    <div class="cephalosome" v-show="cephalosomeBol" @click="closecephalosome" @touchmove.prevent>
      <div class="cephalosomebox">
        <div class="cephalosomeboxlist" @click="goLogin" v-show="!quiteLogin">
          <img src="../../../static/image/index/denglu.png"/> 登录
        </div>
        <div class="cephalosomeboxlist" v-show="quiteLogin" @click="goMe">
          <img src="../../../static/image/index/denglu.png"/> 个人中心
        </div>
        <div class="cephalosomeboxlist">
          <img src="../../../static/image/index/zaixian.png"/> 在线客服
        </div>
        <div class="cephalosomeboxlist" @click="goMerchantCentre">
          <img class="shangjia" src="../../../static/image/index/shangjia.png"/> 商家中心
        </div>
        <div class="cephalosomeboxlist" @click="goStore">
          <img class="huanli" src="../../../static/image/me/hlll.png"/> 积分换礼
        </div>
      </div>
    </div>
    <company-bar @selet='toSelet'></company-bar>
    <!--头部-->
    <header>
      <div class="site">
        <span @click="showSide">{{cityValue}}</span>
        <side-bar @cityChoice="choiceCity"></side-bar>
        <img src="../../../static/image/index/dao.png"/>
      </div>
      <div class="logoimg">
        <img src="../../../static/image/index/logo.png" class="logo"/>
      </div>
      <img src="../../../static/image/index/caidana.png" class="menu" @click="cephalosome"/>
    </header>
    <!--广告logo-->
    <article>
      <swiper :options="swiperOptionA" ref="mySwiper">
        <swiper-slide data-swiper-autoplay="5000"><img src="../../../static/image/index/logintwo.png" alt="">
        </swiper-slide>
        <swiper-slide data-swiper-autoplay="5000"><img src="../../../static/image/index/logoone.png" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </article>
    <!--精选装修公司-->
    <div class="choiceness">
      <div @click="goScore">
        <img src="../../../static/image/index/gongsi.png"/>
        <p>精选装修公司</p>
      </div>
      <div @click="goChoicenesscase">
        <img src="../../../static/image/index/anli.png"/>
        <p>精选案例</p>
      </div>
      <div @click="goChoicenessstyList">
        <img src="../../../static/image/index/sheji.png"/>
        <p>精选设计师</p>
      </div>
      <div @click="goStore">
        <img src="../../../static/image/index/jifen.png"/>
        <p>积分换礼</p>
      </div>
    </div>
    <div class="live-white">

    </div>
    <!--美居积分-->
    <div class="beautyin">
      <div class="writing">
        <p style="color: #FF5A00;font-weight: bold">美居积分</p>
        <div @click="goLogin" v-show="!integrationBol">
          <span>登录查看已有积分</span>
          <img src="../../../static/image/index/zuo.png"/>
        </div>
        <div v-show="integrationBol">
          <img class="headers" :src="headersImg" alt="">
          <span>已有<a href="javascript:;" style="color: #fa6217;font-weight: 900">{{integralBalance}}</a>积分</span>
        </div>

      </div>
      <div class="ntegral_box">
        <ntegral></ntegral>
        <div class="day">
          <div @click="goMission">
            <img src="../../../static/image/z/icon今日任务.png"/>
            <span>今日任务</span>
            <span></span>
          </div>
          <div @click="goLottery">
            <img src="../../../static/image/z/ji.png"/>
            <span>积分抽奖</span>
            <span></span>
          </div>
          <div @click="goRule">
            <img src="../../../static/image/z/iconday.png"/>
            <span>赚积分</span>
            <span style="opacity: 0;"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="live-white">

    </div>
    <!--精选装修公司-->
    <div class="company">
      <div class="writing">
        <p>精选装修公司</p>
        <div @click="goScore">
          <span>更多</span>
          <img src="../../../static/image/index/zuo.png"/>
        </div>
      </div>
      <!--列表渲染-->
      <div class="company-list">
        <div class="list-children" v-for="item in indexQualityShopList" @click="goDecoration(item.id)">
          <div class="icon">
            <img v-lazy="item.logo_path"/>
          </div>
          <div class="information">
            <p class="text">{{item.shop_name}}</p>
            <div>
              <p class="star">
                <img src="../../../static/image/index/xing.png"/>
                <img src="../../../static/image/index/xing.png"/>
                <img src="../../../static/image/index/xing.png"/>
                <img src="../../../static/image/index/xing.png"/>
                <img src="../../../static/image/index/xing.png"/>
              </p>
              <p class="grade">评分：<span style="color: #E95504">{{item.comment_sum}}分</span></p>
            </div>
          </div>
          <footer>
            <img src="../../../static/image/index/pk.png"/>
            <span @click.stop="contrast">加入对比</span>
          </footer>
        </div>
      </div>
    </div>
    <div class="live-white">

    </div>
    <!--精选活动-->
    <div class="activity">
      <div class="writing">
        <p>精选活动</p>
        <div @click="goActive">
          <span>更多</span>
          <img src="../../../static/image/index/zuo.png"/>
        </div>
      </div>
      <!--轮播-->
      <div class="banner">
        <swiper :options="swiperOption" v-if="this.activesInfo.length>0">
          <swiper-slide v-for="item in activesInfo" :key="item.banner_id"><img :src="item.banner_img" alt="">
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="live-white">

    </div>
    <!--积分换礼-->
    <div class="integralceremony">
      <div class="writing">
        <p>积分换礼</p>
        <div @click="goStore">
          <span>1元=100美居积分</span>
          <img src="../../../static/image/index/zuo.png"/>
        </div>
      </div>
      <img src="../../../static/image/index/guangao.png" @click="goRegister" class="guanggao"/>
      <div class="integrallist">
        <div class="integralone">
          <img src="../../../static/image/index/xiangzi.jpg"/>
          <div class="integralprice">
            <p style="font-weight:bold;color:rgba(51,51,51,1);">黑色24寸铝框拉杆箱</p>
            <p style="color:rgba(102,102,102,1);">原价 ¥459.9</p>
            <p style="font-weight:bold;color:rgba(255,0,40,1);">美居 45990积分</p>
          </div>
        </div>
        <div class="integralone">
          <img src="../../../static/image/index/zhentou.jpg"/>
          <div class="integralprice">
            <p style="font-weight:bold;color:rgba(51,51,51,1);">乳胶U型枕</p>
            <p style="color:rgba(102,102,102,1);">原价 ¥79.9</p>
            <p style="font-weight:bold;color:rgba(255,0,40,1);">美居 7990积分</p>
          </div>
        </div>
        <div class="integralone">
          <img src="../../../static/image/index/taideng.jpg"/>
          <div class="integralprice">
            <p style="font-weight:bold;color:rgba(51,51,51,1);">灰色充电式小夜灯</p>
            <p style="color:rgba(102,102,102,1);">原价 ¥99.9</p>
            <p style="font-weight:bold;color:rgba(255,0,40,1);">美居 9990积分</p>
          </div>
        </div>
        <div class="integralone">
          <img src="../../../static/image/index/xsmax.jpg"/>
          <div class="integralprice">
            <p style="font-weight:bold;color:rgba(51,51,51,1);">iPhone XS 256G 深空灰</p>
            <p style="color:rgba(102,102,102,1);">原价 ¥10099</p>
            <p style="font-weight:bold;color:rgba(255,0,40,1);">美居 1009900积分</p>
          </div>
        </div>
      </div>
    </div>
    <div class="advertising">
      <img src="../../../static/image/index/lihe.png" class="gift"/>
      <img src="../../../static/image/index/gogo.png" class="gobutton" @click="goStore"/>
      <span style="font-weight:bold;color: #FF5A00;">更多积分好礼</span>
      <span style="color: #666666;">积分当钱花</span>
    </div>
    <div class="live-white">

    </div>
    <!--精选案例-->
    <div class="choicenesscase">
      <div class="writing">
        <p>精选案例</p>
        <div @click="goChoicenesscase">
          <span>更多</span>
          <img src="../../../static/image/index/zuo.png"/>
        </div>
      </div>
      <!--类型-->
      <div class="mold">
        <span @click="index=0" :class="index==0?'active':'account'">风格</span>
        <span @click="index=1" :class="index==1?'active':'account'">户型</span>
        <span @click="index=2" :class="index==2?'active':'account'">空间</span>
      </div>
    </div>
    <!--类型展示风格-->
    <div class="moldbox" v-show="index==0?true:false">
      <div class="moldboxlist">
        <img v-for="item in GetCaseTypeStyle" @click="goChoicenesscase(item.style_id)"
             v-lazy="'http://image.meijujingxuan.com/'+item.style_img"
             alt="">
      </div>
    </div>
    <!--类型展示户型-->
    <div class="moldbox" v-show="index==1?true:false">
      <div class="moldboxlist">
        <img v-for="item in GetCaseTypeHouse" @click="goChoicenesscase(item.house_id)"
             v-lazy="'http://image.meijujingxuan.com/'+item.house_img"
             alt="">
      </div>
    </div>
    <!--类型展示空间-->
    <div class="moldbox" v-show="index==2?true:false">
      <div class="moldboxlist">
        <img v-for="item in GetCaseTypeSpace" @click="goChoicenesscase(item.space_id)"
             v-lazy="'http://image.meijujingxuan.com/'+item.space_img"
             alt="">
      </div>
    </div>
    <div class="live-white">

    </div>
    <!--10秒估算装修报价-->
    <div class="decoration">
      <img src="../../../static/image/index/baojia.jpg" class="baojia"/>
      <div class="headline">
        10秒估算装修报价
      </div>
      <div class="rectangle">
        <img src="../../../static/image/index/xianshi.gif" class="calculate"/>
        <div class="pulldown">
          <!-- 地址 -->
          <div class="pulldownlist">
            <img src="../../../static/image/index/dao.png" v-show="triangleBolTwo"/>
            <img src="../../../static/image/index/zheng.png" v-show="!triangleBolTwo"/>
            <div class="selectBox">
              <div class="selectBox_show" @click.stop="arrowDownTwo">
                <i class="icon icon_arrowDown"></i>
                <p title="请选择">{{unitNameTwo}}</p>
                <input type="hidden" name="unitTwo" v-model="unitModelTwo">
              </div>
              <div class="selectBox_list" v-show="isShowSelectTwo">
                <div class="selectBox_listLi" v-for="(item, index) in dataListTwo" @click.stop="selectTwo(item, index)">
                  {{item.value}}
                </div>
              </div>
            </div>
          </div>
          <!-- 房屋类型 -->
          <div class="pulldownlist">
            <img src="../../../static/image/index/dao.png" v-show="triangleBol"/>
            <img src="../../../static/image/index/zheng.png" v-show="!triangleBol"/>
            <div class="selectBox">
              <div class="selectBox_show" @click.stop="arrowDown">
                <i class="icon icon_arrowDown"></i>
                <p title="请选择">{{unitName}}</p>
                <input type="hidden" name="unit" v-model="unitModel">
              </div>
              <div class="selectBox_list" v-show="isShowSelect" style="display: block;">
                <div class="selectBox_listLi" v-for="(item, index) in dataList" @click.stop="select(item, index)">
                  {{item.room_name}}
                </div>
              </div>
            </div>
          </div>
          <!-- 装修类型 -->
          <div class="pulldownlist pulldownlistOne">
            <img src="../../../static/image/index/dao.png" v-show="triangleBolOne"/>
            <img src="../../../static/image/index/zheng.png" v-show="!triangleBolOne"/>
            <div class="selectBox">
              <div class="selectBox_show" @click.stop="arrowDownOne">
                <i class="icon icon_arrowDown"></i>
                <p title="请选择">{{unitNameOne}}</p>
                <input type="hidden" name="unitOne" v-model="unitModelOne">
              </div>
              <div class="selectBox_list" v-show="isShowSelectOne">
                <div class="selectBox_listLi" v-for="(item, index) in dataListOne" @click.stop="selectOne(item, index)">
                  {{item.decorate_type}}
                </div>
              </div>
            </div>
          </div>
          <div class="pulldownlist pulldownlistOne">
            <input type="number" placeholder="输入面积" @focus="focusInput" v-model="acreage"/>
            <span style="margin-left: 32px;">㎡</span>
          </div>
        </div>
        <!-- 选择厅室 -->
        <!--<change-house></change-house>-->
        <div class="change">
          <div class="title" @click="framChangei">
            <span style="margin: 0;">{{shi}}</span><span>{{ting}}</span><span>{{wei}}</span><span>{{chu}}</span>
            <img src="../../../static/image/index/dao.png" v-show="imgBol"/>
            <img src="../../../static/image/index/zheng.png" v-show="!imgBol"/>
          </div>
          <div class="framChange" v-show="framChange">
            <ul>
              <li :class="{'check':item.isCheck}" @click="isTure(item.name,item.id)" v-for="item in shiList">
                {{item.name}}
              </li>
            </ul>
            <ul>
              <li :class="{'check':item.isCheck}" @click="isTure(item.name,item.id)" v-for="item in tingList">
                {{item.name}}
              </li>
            </ul>
            <ul>
              <li :class="{'check':item.isCheck}" @click="isTure(item.name,item.id)" v-for="item in weiList">
                {{item.name}}
              </li>
            </ul>
            <ul>
              <li :class="{'check':item.isCheck}" @click="isTure(item.name,item.id)" v-for="item in chuList">
                {{item.name}}
              </li>
            </ul>
          </div>
        </div>

        <!-- 输入手机号 -->
        <input type="tel" maxlength="11" placeholder="输入手机号获取报价结果" class="feedin" v-model="mobilePhone"/>
        <span class='feedin' style="background:rgba(255,90,0,1);text-align: center;color: white;border: none;"
              @click="promptlyapply(2)">立即申请</span>
      </div>
    </div>
    <div class="live-white">

    </div>
    <!--精选设计师-->
    <div class="handpickstylist">
      <div class="writing">
        <p>精选设计师</p>
        <div @click="goChoicenessstyList">
          <span>更多</span>
          <img src="../../../static/image/index/zuo.png"/>
        </div>
      </div>
      <div class="designbox">
        <div class="designlist">
          <div class="designlistone" v-for="item in indexDesignerList" @click="goStylistOptions(item.id)">
            <img v-lazy="item.header_path"/>
            <div class="txt">
              <p class="p1">{{item.designer_name}}</p>
              <p class="p2">
                <span>被关注 <a style="color: #E95504" href="javascript:;">190</a></span>
                <span>评分 <a style="color: #CB9C3D" href="javascript:;">{{item.comment_sum}}</a></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="live-white">

    </div>
    <!--装修课堂-->
    <div class="decorationlesson">
      <div class="writing">
        <p>装修课堂</p>
        <div @click="goDecoratelesson">
          <span>更多分享，在线投票</span>
          <img src="../../../static/image/index/zuo.png"/>
        </div>
      </div>
      <div class="img_logo">
        <p>{{classroomList.class_start_time}} {{classroomList.class_active_place}}</p>
        <img v-lazy="classroomList.class_ad_img"/>
      </div>
      <div class="finish">
        <div class="finishLeft">
          <p>{{classroomList.class_ad_title}}</p>
          <p>已有<span style="color: #E95504">{{classroomList.class_people_count}}</span>人报名</p>
        </div>
        <span class="enroll" @click="promptlyapply(0)">立即报名</span>
      </div>
    </div>
    <div class="live-white">

    </div>
    <!--在线问答-->
    <div class="answer">
      <div class="writing">
        <p>在线问答</p>
        <div @click="goOnlineask">
          <span>大家都在搜</span>
          <img src="../../../static/image/index/zuo.png"/>
        </div>
      </div>
      <!--我要提问-->
      <div class="questions">
        <div class="boxx">
          <div class="questions_1" @click="goQuestion">
            <img src="../../../static/image/index/tiwen.png" class="ask"/> 我要提问
          </div>
          <div class="questions_2" @click="goAnswer">
            <img src="../../../static/image/index/huida.png" class="response"/> 我要回答
          </div>
        </div>
      </div>
      <!--答疑列表-->
      <div class="mentoringbox">
        <div class="mentoringlist" @click="goIssueDetails(item.que_id)" v-for="(item,index) in queList">
          <div :class="item.inter_img==''?'active':'mentoringone'">
            <!--<span v-show="item.reward_points>0"><img src="../../../static/image/index/qian.png"/>{{item.reward_points}}</span>-->
            <h1>
              {{item.inter_title}}
            </h1>
            <p class="twolines">{{item.inter_content}}</p>
            <p class="threelines"></p>
            <p class="fourlines">{{item.browse_times}}人看过</p>
          </div>
          <img v-lazy="'http://image.meijujingxuan.com/'+item.inter_img" v-show="item.inter_img!=''" class="imgshow"/>
        </div>
      </div>
    </div>
    <div class="live-white">

    </div>
    <!--百万业主-->
    <div class="million" @click="handleLogin">
      <img src="../../../static/image/index/gg.png"/>
    </div>
    <div class="live-white">

    </div>
    <!--创意灵感-->

    <div class="creativity">
      <div class="writing">
        <p>创意灵感</p>
        <div>
          <span>更多</span>
          <img src="../../../static/image/index/zuo.png"/>
        </div>
      </div>
      <falls-flow></falls-flow>
    </div>

    <!--加入对比弹出框-->
    <div class="mark mark_one" v-show="contrastBol" waterfall @touchmove.prevent>
      <div class="mark_content">
        <img src="../../../static/image/index/close.png" @click="closeContrast" class="close"/>
        <h1>公司对比</h1>
        <div class="choicelist" @click="showCompany(1)">
          <img src="../../../static/image/index/jia.png" v-show="selet_1Bol"/>
          <span class="">{{selet_1}}</span>
        </div>
        <div class="choicelist" @click="showCompany(2)">
          <img src="../../../static/image/index/jia.png" v-show="selet_2Bol"/>
          <span>{{selet_2}}</span>
        </div>
        <div class="choicelist" @click="showCompany(3)">
          <img src="../../../static/image/index/jia.png" v-show="selet_3Bol"/>
          <span>{{selet_3}}</span>
        </div>
        <p style="background:rgba(233,85,4,1);color:rgba(255,255,255,1);" @click="goContrast">开始对比</p>
        <p style="color:rgba(233,85,4,1);background:rgba(255,255,255,1);" @click="empty">清空</p>
      </div>
    </div>
    <!--申请成功模态框-->
    <div class="immediatelyapply" v-show="putInBol">
      <div class="mark" @touchmove.prevent>
        <div class="markapply">
          <img src="../../../static/image/index/close.png" @click="closePromptlyapply()" class="close"/>
          <p class="p_one"></p>
          <div class="p_two">
            <img src="../../../static/image/index/dg.png"/>
            <h2>申请成功</h2>
          </div>
          <p class="p_three">30分钟内家装顾问将给您回电</p>
          <p class="p_three">免费为您提供报价及咨询服务</p>
          <span class="p_four" @click="closePromptlyapply()">确定</span>
        </div>
      </div>
    </div>

    <!--立即报名模态框-->
    <div class="immediatelyapply" v-show="promptly">
      <div class="mark" @touchmove.prevent>
        <div class="markapply">
          <img src="../../../static/image/index/close.png" @click="closePromptlyapply()" class="close"/>
          <h1>在线报名</h1>
          <input type="text" placeholder="请输入您的称呼" v-model="lessonName"/>
          <input type="tel" maxlength="11" placeholder="请输入手机号码" v-model="lessonPhone"/>
          <span @click="promptlyapply(1)">立即提交</span>
        </div>
      </div>
    </div>
    <!--提交成功-->
    <div class="immediatelyapply" v-show="successBol">
      <div class="mark" @touchmove.prevent>
        <div class="markapply">
          <img src="../../../static/image/index/close.png" class="close" @click="closePromptlyapply()"/>
          <p class="p_one"></p>
          <div>
            <img src="../../../static/image/index/dg.png"/>
            <h2>提交成功</h2>
          </div>
          <span @click="closePromptlyapply()">确定</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css' ////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
  // import Swiper from 'swiper';
  import {
    XHeader
  } from 'vux'
  import SideBar from '@/components/index/cityBar.vue'
  import companyBar from '@/components/index/companyBar.vue'
  import change from '@/components/index/change.vue'
  import falls from '@/components/index/falls.vue'
  // import {
  //   requireShare
  // } from '../../../static/js/wxShare' //分享
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper';
  import ntegral from '@/components/ntegral.vue'


  export default {
    components: {
      XHeader,
      'side-bar': SideBar,
      'company-bar': companyBar,
      'change-house': change,
      'falls-flow': falls,
      swiper,
      swiperSlide,
      ntegral
    },
    inject: ['reload'],
    name: "index",
    data() {
      return {
        headersImg: "",
        integralBalance: "",
        integrationBol: false,//积分登录切换
        //退出登录
        quiteLogin: false,
        cityValue: "北京",
        swiperOptionA: {
          loop: true,
          speed: 500,
          autoplay: {
            delay: 5000,
            disableOnInteraction: true,
          },
          pagination: '.swiper-pagination',
          bulletActiveClass: 'my-bullet-active',
        },
        swiperOption: { //swiper3
          speed: 900,
          slidesPerView: "1.2",
          centeredSlides: true,
          spaceBetween: 40,
          resistanceRatio: 0,
          notNextTick: true,
          initialSlide: 1,
          loop: true,
          autoplay: 3000,
          speed: 1000,
          autoplayStopOnLast: false,
        },
        queList: "", //回答问题列表
        imgBolA: true,
        //室厅选择下拉值开始
        imgBol: true,
        framChange: false,
        shi: '1室',
        ting: '1厅',
        wei: '1卫',
        chu: '1厨',
        shiId: 1,
        tingId: 1,
        weiId: 1,
        chuId: 1,
        shiList: [{
          id: 1,
          isCheck: true,
          name: '1室'
        }, {
          id: 2,
          isCheck: false,
          name: '2室'
        }, {
          id: 3,
          isCheck: false,
          name: '3室'
        }, {
          id: 4,
          isCheck: false,
          name: '4室'
        }, {
          id: 5,
          isCheck: false,
          name: '5室'
        }, {
          id: 6,
          isCheck: false,
          name: '6室'
        }],
        tingList: [{
          id: 1,
          isCheck: true,
          name: '1厅'
        }, {
          id: 2,
          isCheck: false,
          name: '2厅'
        }, {
          id: 3,
          isCheck: false,
          name: '3厅'
        }, {
          id: 4,
          isCheck: false,
          name: '4厅'
        }, {
          id: 5,
          isCheck: false,
          name: '5厅'
        }, {
          id: 6,
          isCheck: false,
          name: '6厅'
        }],
        weiList: [{
          id: 1,
          isCheck: true,
          name: '1卫'
        }, {
          id: 2,
          isCheck: false,
          name: '2卫'
        }, {
          id: 3,
          isCheck: false,
          name: '3卫'
        }, {
          id: 4,
          isCheck: false,
          name: '4卫'
        }, {
          id: 5,
          isCheck: false,
          name: '5卫'
        }, {
          id: 6,
          isCheck: false,
          name: '6卫'
        }],
        chuList: [{
          id: 1,
          isCheck: true,
          name: '1厨'
        }, {
          id: 2,
          isCheck: false,
          name: '2厨'
        }, {
          id: 3,
          isCheck: false,
          name: '3厨'
        }, {
          id: 4,
          isCheck: false,
          name: '4厨'
        }, {
          id: 5,
          isCheck: false,
          name: '5厨'
        }, {
          id: 6,
          isCheck: false,
          name: '6厨'
        }],
        mobilePhone: "",
        //室厅选择下拉值结束
        acreage: "", //mianji
        //对比公司的值start
        seletArr: [],
        typeSelet: '0',
        selet_1: '',
        selet_1_id: "",
        selet_2_id: "",
        selet_3_id: "",
        selet_2: '',
        selet_3: '',
        selet_1Bol: true,
        selet_2Bol: true,
        selet_3Bol: true,
        //对比公司的值end
        cephalosomeBol: false, //头部菜单模态框
        index: 0, //精选案列切换
        bol: true, //精选案列切换
        contrastBol: false, //对比模态框
        promptly: false, //立即报名模态框
        successBol: false, //提交成功
        putInBol: false, //立即申请
        isShowSelect: false, //房屋类型下拉
        triangleBol: true,
        dataList: [], //房屋类型下拉
        unitName: '房屋类型', //房屋类型下拉
        unitModel: "", //房屋类型下拉
        isShowSelectOne: false, //装修类型下拉
        triangleBolOne: true,
        dataListOne: [], //装修类型下拉
        unitNameOne: '装修类型', //装修类型下拉
        unitModelOne: "", //装修类型下拉
        isShowSelectTwo: false, //地址选择下拉
        triangleBolTwo: true,
        dataListTwo: [{
          key: 0,
          value: "北京"
        }, {
          key: 1,
          value: "成都"
        }, {
          key: 2,
          value: "武汉"
        }, {
          key: 3,
          value: "重庆"
        }, {
          key: 4,
          value: "西安"
        }, {
          key: 5,
          value: "石家庄"
        }, {
          key: 6,
          value: "全国"
        }], //地址选择下拉
        unitNameTwo: '北京', //地址选择下拉
        unitModelTwo: "", //地址选择下拉
        indexDesignerList: "", //精选设计师
        indexQualityShopList: "", //精选装修公司
        activesInfo: "", //精选活动
        classroomList: [], //装修课堂
        lessonPhone: "", //装修课堂电话
        lessonName: "", //装修课堂姓名
        GetCaseTypeHouse: [], //户型
        GetCaseTypeSpace: [], //空间
        GetCaseTypeStyle: [], //风格
        unitNameId: null,//房屋类型id
      }
    },
    mounted() {
      if (localStorage.userId == undefined) {
        localStorage.setItem('userId', "");
        this.quiteLogin = false;
        this.integrationBol = false;
      } else if (localStorage.userId == "") {
        this.quiteLogin = false;
        this.integrationBol = false;
      } else {
        this.quiteLogin = true;
        this.integrationBol = true;
      }
      this.indexDesigner();
      this.indexQualityShop();
      this.getAllActives();
      this.classroomAd();
      this.roomAll();
      this.decorateType();
      this.GetUserInfo();
      this.getQueList();
      this.GetCaseType();
    },
    methods: {
      //室厅选择开始
      isTure(name, id) {
        var that = this;
        if (name.indexOf('室') == 1) {
          that.shiList.forEach(function (item) {
            if (id == item.id) {
              if (item.isCheck) {
                item.isCheck = false;
                that.shi = '1室';
                that.shiId = id;
              } else {
                item.isCheck = true;
                that.shi = name;
                that.shiId = id;
              }
            } else {
              item.isCheck = false
            }
          })
        } else if (name.indexOf('厅') == 1) {
          that.tingList.forEach(function (item) {
            if (id == item.id) {
              if (item.isCheck) {
                item.isCheck = false;
                that.ting = '1厅';
                that.tingId = id;
              } else {
                item.isCheck = true;
                that.ting = name;
                that.tingId = id;
              }
            } else {
              item.isCheck = false
            }
          })
        } else if (name.indexOf('卫') == 1) {
          that.weiList.forEach(function (item) {
            if (id == item.id) {
              if (item.isCheck) {
                item.isCheck = false;
                that.wei = '1卫';
                that.weiId = id;
              } else {
                item.isCheck = true;
                that.wei = name;
                that.weiId = id;
              }
            } else {
              item.isCheck = false
            }
          })
        } else {
          that.chuList.forEach(function (item) {
            if (id == item.id) {
              if (item.isCheck) {
                item.isCheck = false;
                that.chu = '1厨';
                that.chuId = id;
              } else {
                item.isCheck = true;
                that.chu = name;
                that.chuId = id;
              }
            } else {
              item.isCheck = false
            }
          })
        }
      },
      framChangei() {
        this.framChange = !this.framChange;
        this.imgBol = !this.imgBol;
        this.isShowSelect = false;
        this.isShowSelectOne = false;
        this.isShowSelectTwo = false;
        this.triangleBol = true;
        this.triangleBolOne = true;
        this.triangleBolTwo = true;
      },
      //室厅选择结束
      //城市的值
      choiceCity(data) {
        this.cityValue = data;
      },
      //对比公司值
      toSelet(data) {
        this.seletArr = data;
        if (this.typeSelet == 1) {
          this.selet_1 = this.seletArr[0].value;
          this.selet_1_id = this.seletArr[0].id;
          this.selet_1Bol = false;
        } else if (this.typeSelet == 2) {
          this.selet_2 = this.seletArr[0].value;
          this.selet_2_id = this.seletArr[0].id;
          this.selet_2Bol = false;
        } else {
          this.selet_3 = this.seletArr[0].value;
          this.selet_3_id = this.seletArr[0].id;
          this.selet_3Bol = false;
        }
      },
      //清空对比公司值
      empty() {
        this.selet_1 = "";
        this.selet_2 = "";
        this.selet_3 = "";
        this.selet_1Bol = true;
        this.selet_2Bol = true;
        this.selet_3Bol = true;
      },
      // 头部菜单登录模态框
      cephalosome() {
        this.cephalosomeBol = true;
      },
      // 关闭头部菜单登录模态框
      closecephalosome() {
        this.cephalosomeBol = false;
      },
      // 城市选择
      showSide() {
        this.$store.dispatch('showSideBar')
      },
      //对比公司选择
      showCompany(type) {
        this.typeSelet = type;
        this.$store.dispatch('showCompanyBar')
      },
      //打开对比模态框
      contrast() {
        this.contrastBol = true;
      },
      //关闭对比模态框
      closeContrast() {
        this.contrastBol = false;
      },
      //打开立即报名模态框   已经立即申请模态框
      promptlyapply(dome) {
        switch (dome) {
          case 0:
            this.promptly = true;
            break;
          case 1:
            this.$vux.loading.show();
            let data = {
              enroll_page: 15,
              enroll_entrance: "线下课堂报名- 头部立即报名",
              userid: localStorage.userId,
              customer_name: this.lessonName,
              mobile_phone: this.lessonPhone,
            };
            this.$index.Enroll(data).then((res) => {
              if (res.status == "200") {
                this.successBol = true;
                this.$vux.loading.hide();
              } else {
                this.$showToast(true, 'text', res.message);
                this.$vux.loading.hide();
              }
            }).catch((err) => {
              console.log(err)
            });
            break;
          case 2:
            //10秒估算装修报价 立即申请
            if (this.unitName == '房屋类型' || this.unitNameOne == "装修类型") {
              this.$showToast(true, 'text', '请选择房屋类型或装修类型');
              return;
            }
            this.$vux.loading.show();
            let params = {
              enroll_page: 4,
              enroll_entrance: "首页-装修报价",
              userid: localStorage.userId,
              acreage: this.acreage,
              room_num: this.shiId,
              hall_num: this.tingId,
              kitchen_num: this.chuId,
              toilet_num: this.weiId,
              mobile_phone: this.mobilePhone,
              customer_name: "",
              decorate_type: this.unitModelOne / 1 + 1,
              house_type: this.unitNameId,
              city_name: this.unitNameTwo,
            };
            this.$index.AllEnroll(params).then((res) => {
              if (res.status == "200") {
                this.putInBol = true;
                this.$vux.loading.hide();
              } else {
                this.$showToast(true, 'text', res.message);
              }
            }).catch((err) => {
              console.log(err)
            });
            break;
        }
      },
      //关闭立即报名模态框
      closePromptlyapply() {
        this.promptly = false;
        this.successBol = false;
        this.putInBol = false;
        this.acreage = "";
        this.mobilePhone = "";
        this.unitName = "房屋类型";
        this.unitNameOne = "装修类型";
        this.shiId = "1室";
        this.tingId = "1厅";
        this.chuId = "1厨";
        this.weiId = "1卫";
        this.unitNameTwo = "北京"
      },

      //房屋类型下拉框
      arrowDown() {
        this.isShowSelect = !this.isShowSelect;
        this.triangleBol = !this.triangleBol;
        this.triangleBolOne = true;
        this.triangleBolTwo = true;
        this.isShowSelectOne = false;
        this.isShowSelectTwo = false;
        this.framChange = false;
        this.imgBol = true;
      },
      select(item, index) {
        this.isShowSelect = false;
        this.triangleBol = !this.triangleBol;
        this.unitModel = index.room_name;
        this.unitName = item.room_name;
        this.unitNameId = item.id;
      },
      //装修类型下拉框
      arrowDownOne() {
        this.isShowSelectOne = !this.isShowSelectOne;
        this.triangleBolOne = !this.triangleBolOne;
        this.triangleBol = true;
        this.triangleBolTwo = true;
        this.isShowSelect = false;
        this.isShowSelectTwo = false;
        this.framChange = false;
        this.imgBol = true;
      },
      selectOne(item, index) {
        this.isShowSelectOne = false;
        this.triangleBolOne = !this.triangleBolOne;
        this.unitModelOne = index;
        console.log(index)
        this.unitNameOne = item.decorate_type;
      },
      //地址选择下拉框
      arrowDownTwo() {
        this.isShowSelectTwo = !this.isShowSelectTwo;
        this.triangleBolTwo = !this.triangleBolTwo;
        this.triangleBol = true;
        this.triangleBolOne = true;
        this.isShowSelect = false;
        this.isShowSelectOne = false;
        this.framChange = false;
        this.imgBol = true;
      },
      selectTwo(item, index) {
        this.isShowSelectTwo = false;
        this.triangleBolTwo = !this.triangleBolTwo;
        this.unitModelTwo = index;
        this.unitNameTwo = item.value;
      },
      // 输入面积获取焦点事件
      focusInput() {
        this.triangleBol = true;
        this.triangleBolOne = true;
        this.triangleBolTwo = true;
        this.isShowSelect = false;
        this.isShowSelectOne = false;
        this.isShowSelectTwo = false;
      },
      // 跳转到精选设计师列表页
      goChoicenessstyList() {
        this.$router.push({
          name: "shejishiliebiaoye"
        })
      },
      //跳转到精选案例列表页
      goChoicenesscase(id) {
        if (!isNaN(id)) {
          this.$router.push({
            name: "jingxuananliliebiaoye",
            query: {
              id: id,
              type: this.index
            }
          })
        } else {
          this.$router.push({
            name: "jingxuananliliebiaoye",
          })
        }
      },
      //跳转到大家都在看
      goOnlineask() {
        this.$router.push({
          name: "zaixianwendadajiadouzaikan"
        })
      },
      //跳转到我要提问
      goQuestion() {
        if (localStorage.userId == "") {
          this.$router.push({
            name: "login"
          });
          return
        }
        this.$router.push({
          name: "zaixianwendawoyaotiwen"
        })
      },
      //跳转到精选装修公司更多列表页
      goScore() {
        this.$router.push({
          name: "zhuangxiugongsiliebiaoye"
        })
      },
      //跳转到我要回答
      goAnswer() {
        this.$router.push({
          name: "zaixianwendawoyaohuida"
        })
      },
      //跳转到装修课堂
      goDecoratelesson() {
        this.$router.push({
          name: "zhuangxiuketang"
        })
      },
      //跳转到登录
      goLogin() {
        this.$router.push({
          name: "login"
        })
      },
      //装修公司详情
      goDecoration(id) {
        this.$router.push({
          name: "zhuangxiugongsixiangqing",
          query: {
            id: id
          }
        })
      },
      //跳转到对比公司
      goContrast() {
        if (this.selet_1_id == "" && this.selet_2_id == "" && this.selet_3_id == "") {
          this.$showToast(true, 'text', '请选择公司');
          return;
        }
        if (this.selet_1_id == "" && this.selet_2_id == "") {
          this.$showToast(true, 'text', '请选择多家公司');
          return;
        }
        if (this.selet_1_id == "" && this.selet_3_id == "") {
          this.$showToast(true, 'text', '请选择多家公司');
          return;
        }
        if (this.selet_2_id == "" && this.selet_3_id == "") {
          this.$showToast(true, 'text', '请选择多家公司');
          return;
        }
        this.$router.push({
          name: "comparison",
          query: {
            idOne: this.selet_1_id,
            idTwo: this.selet_2_id,
            idThree: this.selet_3_id
          }
        })
      },
      //跳转到精选设计师详情页
      goStylistOptions(id) {
        this.$router.push({
          name: "shejishixiangqingye",
          query: {
            id: id
          }
        })
      },
      //去往积分换礼
      goStore() {
        this.$router.push({
          name: "jifenhuanli"
        })
      },

      //去往精选活动
      goActive() {
        this.$router.push({
          name: "jingxuanhuodong"
        })
      },
      //精选设计师
      indexDesigner() {
        this.$vux.loading.show();
        let data = {
          city_name: this.cityValue
        };
        this.$index.indexDesigner(data).then((res) => {
          this.indexDesignerList = res.data;
          for (let i = 0; i < this.indexDesignerList.length; i++) {
            this.indexDesignerList[i].header_path = this.$imgSrc + this.indexDesignerList[i].header_path
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      //精选装修公司
      indexQualityShop() {
        this.$vux.loading.show();
        let data = {
          city_name: this.cityValue
        };
        this.$index.indexQualityShop(data).then((res) => {
          this.indexQualityShopList = res.data;
          for (let i = 0; i < this.indexQualityShopList.length; i++) {
            this.indexQualityShopList[i].logo_path = this.$imgSrc + this.indexQualityShopList[i].logo_path
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      //精选活动
      getAllActives() {
        this.$vux.loading.show();
        this.$index.GetAllActives().then((res) => {
          this.activesInfo = res.data;
          for (let i = 0; i < this.activesInfo.length; i++) {
            this.activesInfo[i].banner_img = this.$imgSrc + this.activesInfo[i].banner_img
          }
          // 下一个UI帧再初始化swiper
          // 					this.$nextTick(() => {
          // 						this.initSwiper();
          // 					});
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      //装修课堂
      classroomAd() {
        this.$vux.loading.show();
        this.$index.ClassroomAd().then((res) => {
          this.classroomList = res.data.class_ad_info;
          this.classroomList.class_ad_img = this.$imgSrc + this.classroomList.class_ad_img;
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },

      //获取房屋类型
      roomAll() {
        this.$vux.loading.show();
        let that = this;
        that.$index.roomAll().then((res) => {
          console.log(res.data)
          that.dataList = res.data;
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      //获取装修类型
      decorateType() {
        this.$vux.loading.show();
        let that = this;
        that.$index.decorateType().then((res) => {
          that.dataListOne = res.data;
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      //获取用户信息
      GetUserInfo() {
        this.$vux.loading.show();
        let data = {
          userid: localStorage.userId
        };
        this.$index.GetUserInfo(data).then((res) => {
          this.headersImg = this.$imgSrc + res.data.head_img
          this.integralBalance = res.data.integral_balance;
          localStorage.setItem("integral", res.data.integral_balance);
          localStorage.setItem("obj", JSON.stringify(res.data));
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      //问题列表
      getQueList() {
        this.$vux.loading.show();
        let data = {
          order_condition: 2,
          type_id: "",
          inter_status: 1,
          inter_title: "",
          user_id: localStorage.userId
        };
        this.$index.GetQueList(data).then((res) => {
          this.queList = res.data.data.slice(0, 4);
          // for (let i = 0; i < this.queList.length; i++) {
          //   this.queList[i].head_img = this.$imgSrc + this.queList[i].head_img
          // }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err);
        })
      },
      //精选案例列表
      GetCaseType() {
        this.$vux.loading.show();
        this.$index.GetCaseType().then((res) => {
          for (let i = 0; i < res.data.case_house.length; i++) {
            if (res.data.case_house[i].house_img) {
              this.GetCaseTypeHouse.push(res.data.case_house[i]);
            }
          }
          for (let i = 0; i < res.data.case_space.length; i++) {
            if (res.data.case_space[i].space_img) {
              this.GetCaseTypeSpace.push(res.data.case_space[i]);
            }
          }
          for (let i = 0; i < res.data.case_style.length; i++) {
            if (res.data.case_style[i].style_img) {
              this.GetCaseTypeStyle.push(res.data.case_style[i]);
            }
          }
          this.GetCaseTypeStyle = this.GetCaseTypeStyle.slice(1);
          this.$vux.loading.hide();
        }).catch((err) => {
        }).catch((err) => {
          console.log(err);
        })
      },
      //跳转到精选案例更多列表
      // goGetCaseTypeList(item) {
      //   this.$router.push({
      //     name: "jingxuananliliebiaoye",
      //     query: {
      //       item:item
      //     }
      //   })
      // },


      //问题详情
      goIssueDetails(id) {
        this.$router.push({
          name: "woyaohuidaxiangqingye",
          query: {
            id: id
          }
        })
      },
      //任务中心
      goMission() {
        this.$router.push({
          name: "renwuzhongxin"
        })
      },
      //抽奖
      goLottery() {
        this.$router.push({
          name: "choujiang"
        })
      },
      //抽奖
      goRule() {
        this.$router.push({
          name: "jifenguize"
        })
      },
      //去登陆
      handleLogin() {
        if (localStorage.userId == "" || localStorage.userId == undefined) {
          this.$router.push({
            name: "login"
          })
        }
      },
      //个人中心
      goMe() {
        this.$router.push({
          name: "gerenzhongxin"
        })
      },
      //注册抽奖
      goRegister() {
        this.$router.push({
          name: "zhucechoujiang"
        })
      },
      //商家中心首页
      goMerchantCentre(){
        this.$router.push({
          name: "shangjiazhongxinshouye"
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "index.less";
</style>

