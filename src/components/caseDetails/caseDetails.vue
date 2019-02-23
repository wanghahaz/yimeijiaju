<template>
  <!--案例详情-->
  <div class="detail_container">
    <!--图片-->
    <div class="img_header">
      <img v-lazy="letCaseInfoList.cover_img" alt="" class="photo_1">
      <img src="../../../static/image/selection/fhfh.png" class="img fh" alt="" @click="goBack">
      <img src="../../../static/image/selection/cdcd.png" class="img cd" alt="" @click="cephalosome">
    </div>
    <!-- 头部模态框 -->
    <div class="cephalosome" v-show="cephalosomeBol" @click="closecephalosome" @touchmove.prevent>
      <div class="cephalosomebox">
        <div class="cephalosomeboxlist" @click="goMe">
          <img class="tuichu" src="../../../static/image/index/denglu.png"/> 个人中心
        </div>
        <div class="cephalosomeboxlist">
          <img src="../../../static/image/index/zaixian.png"/> 在线客服
        </div>
        <div class="cephalosomeboxlist" @click="goIndex">
          <img class="shouye" src="../../../static/image/me/syyy.png"/> 首页
        </div>
      </div>
    </div>
    <!--文字标题-->
    <h2>{{letCaseInfoList.subject_name}}</h2>
    <!--设计师、名称-->
    <div class="stylist">
      <!--头像/内容-->
      <div class="stylist_main">
        <div class="stylist_header">
          <img v-lazy="letCaseInfoList.header_path" alt="">
        </div>
        <span>{{letCaseInfoList.designer_name}}</span>
      </div>
      <!--关注-->
      <div class="focus">关注</div>
    </div>
    <!--房屋内容-->
    <div class="house_container">
      <div class="house_container_one">
        <p>户型</p>
        <span>{{letCaseInfoList.house_name}}</span>
      </div>
      <div class="house_container_one">
        <p>建筑面积</p>
        <span>{{letCaseInfoList.acreage}}㎡</span>
      </div>
      <div class="house_container_one">
        <p>花费</p>
        <span>{{letCaseInfoList.cost_price}}万元</span>
      </div>
      <div class="house_container_one">
        <p>小区名称</p>
        <span>{{letCaseInfoList.village}}</span>
      </div>
    </div>
    <!--文字-->
    <div class="font">
      <p>{{letCaseInfoList.subject_desc}}</p>
      <!--<p>设计师案例篇干货</p>-->
      <!--<p>个人问用户片生活气息</p>-->
      <!--<p class="font_next">巴拉巴巴啊啊啊啊啊啊人问用户片生活气息人问用户片生啊啊啊啊啊啊啊啊啊啊啊</p>-->
    </div>
    <!--图片_2-->
    <div class="photo_2">
      <div class="imgText" v-for="item in designIdeaList">
        <h1>{{item.space_name}}</h1>
        <img v-lazy="item.img_path" alt="">
        <p>{{item.img_desc}}</p>
      </div>
    </div>
    <!--头像、私信-->
    <div class="container_head">
      <div class="center">
        <img v-lazy="letCaseInfoList.header_path" alt="" class="header">
        <div class="center_right">
          <h3>{{letCaseInfoList.designer_name}}</h3>
          <p>{{letCaseInfoList.shop_name}}</p>
        </div>
      </div>
      <div class="right">
        <img src="../../../static/image/selection/sixin.png" alt="">
        <span>私信</span>
      </div>
    </div>
    <!--评论icon-->
    <div class="comment_container">
      <div>
        <img src="../../../static/image/selection/pl.png" alt="">
        <span class="first">评论<span>8</span></span>
      </div>
      <div>
        <img src="../../../static/image/selection/sc.png" alt="">
        <span class="first">收藏<span>8</span></span>
      </div>
      <div>
        <img src="../../../static/image/selection/dz.png" alt="">
        <span class="first">点赞<span>8</span></span>
      </div>
      <!--<div class="tri_top" v-show="markBol">-->
      <!--<div class="tri_top_list">-->
      <!--<img src="../../../static/image/index/wxx.png" alt="">-->
      <!--<p>微信</p>-->
      <!--</div>-->
      <!--<div class="tri_top_list">-->
      <!--<img src="../../../static/image/index/pyq.png" alt="">-->
      <!--<p>朋友圈</p>-->
      <!--</div>-->
      <!--<div class="tri_top_list">-->
      <!--<img src="../../../static/image/index/wb.png" alt="">-->
      <!--<p>微博</p>-->
      <!--</div>-->
      <!--<div class="tri_top_list">-->
      <!--<img src="../../../static/image/index/QQ.png" alt="">-->
      <!--<p>QQ</p>-->
      <!--</div>-->
      <!--</div>-->
    </div>
    <!--评论-->
    <h2 class="comment_font">评论</h2>
    <!--内容二-->
    <div class="container_main">
      <!--评论一-->
      <div class="container_more" v-for="item in 2">
        <div class="container_head2">
          <div class="center">
            <img src="../../../static/image/login/mao.jpg" alt="" class="header">
            <div class="center_right">
              <h3>搬砖得猪</h3>
              <p>
                2018-11-4
              </p>
            </div>
          </div>
          <div class="right" @click="handleClick">
            <img src="../../../static/image/selection/xiala.png" alt="">
          </div>
        </div>
        <p class="font_txt">装修工人素质很高装修也很负责尊重个人问你一件的同时从专业角度进行完善。</p>
        <div class="btn">
          <div class="comment" @click="getFocus">
            <img src="../../../static/image/selection/pinglun.png" alt=""> 评论
          </div>
          <div class="like">
            <img src="../../../static/image/selection/dianzan.png" alt="">
            <a>5</a>
          </div>
        </div>
      </div>
      <!--查看全部评论-->
      <div class="more_msg" @click="goComment">
        <span>查看全部评论</span>
        <img src="../../../static/image/selection/youjiantou.png" alt="" class="icon_more">
      </div>

    </div>
    <!--间距-->
    <div class="spaceBetween"></div>
    <!--其他热门-->
    <div class="hot">
      <!--头部-->
      <div class="head">
        <p>{{letCaseInfoList.designer_name}}的其它热门案例</p>
      </div>
      <!--可拖动-->
      <div class="log_container">
        <div class="container_list" ref="team_2">
          <!--1-->
          <figure class="list_first" v-for="item in subDesignerList" @click="goDetails(item.id)">
            <img v-lazy="item.cover_img" alt="">
            <figcaption class="fig_1">
              <p class="p_1">{{item.subject_name}}</p>
              <p class="p_2">{{item.acreage}}㎡ / {{item.style_name}} / {{item.renovation_type}}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
    <!--间距二-->
    <div class="spaceBetween2"></div>
    <!--搜索-->
    <div class="footer_search">
      <input type="text" v-model="comment" placeholder="发表评论" ref="content" class="publish"/>
      <span class="publishOne" v-if="this.comment.length<=0">发布</span>
      <span class="active" v-else>发布</span>
    </div>
    <!--关注举报-->
    <actionsheet v-model="showBol" :menus="menus1" @on-click-menu="click" show-cancel></actionsheet>
  </div>
</template>

<script>
  // import {
  // 	requireShare,requireConfig
  // } from '../../../static/js/wxShare'
  import {Actionsheet} from 'vux'

  export default {
    inject: ['reload'],
    components: {
      Actionsheet
    },
    name: "anlixiangqing",
    data() {
      return {
        letCaseInfoList: [],
        comment: "",
        subDesignerList: "",
        designIdeaList: "",
        showBol: false,//关注举报
        menus1: {
          menu1: '关注',
          menu2: '举报'
        },
        cephalosomeBol: false, //头部菜单模态框
      }
    },
    mounted() {
      this.GetCaseInfo();
      this.designIdea();
    },
    methods: {
      goIndex() {
        this.$router.push({
          name: "index"
        })
      },
      // 关闭头部菜单登录模态框
      closecephalosome() {
        this.cephalosomeBol = false;
      },
      cephalosome() {
        this.cephalosomeBol = true;
      },
      //点击抬起分享举报
      handleClick() {
        this.showBol = true;
      },
      //点击分享举报
      click(key) {
        console.log(key);
        if (key == 'menu1') {
          this.$showToast(true, 'text', '关注成功');
        }
      },
      //微信分享
      // wxShare() {
      //   requireConfig();
      // 	requireShare(
      // 		"精选优质家装公司，选装修就看美居精选。",
      // 		"http://m.meijujingxuan.com",
      // 	)
      // },
      //返回上一级
      goBack() {
        this.$router.go(-1)
      },
      //详情
      GetCaseInfo() {
        this.$vux.loading.show();
        let data = {
          case_id: this.$route.query.id / 1
        };
        this.$index.GetCaseInfo(data).then((res) => {
          console.log(res.data)
          this.subDesignerSubject(res.data.designer_id);
          this.letCaseInfoList = res.data;
          this.letCaseInfoList.cover_img = this.$imgSrc + this.letCaseInfoList.cover_img;
          this.letCaseInfoList.header_path = this.$imgSrc + this.letCaseInfoList.header_path;
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      //案例详情的设计师的相关案例
      subDesignerSubject(id) {
        this.$vux.loading.show();
        let data = {
          designer_id: id
        };
        this.$index.subDesignerSubject(data).then((res) => {

          this.subDesignerList = res.data;
          for (let i = 0; i < this.subDesignerList.length; i++) {
            this.subDesignerList[i].cover_img = this.$imgSrc + this.subDesignerList[i].cover_img;
            if (this.subDesignerList[i].renovation_type == 1) {
              this.subDesignerList[i].renovation_type = "全包";
            } else if (this.subDesignerList[i].renovation_type == 2) {
              this.subDesignerList[i].renovation_type = "半包";
            } else if (this.subDesignerList[i].renovation_type == 3) {
              this.subDesignerList[i].renovation_type = "局部";
            } else {
              this.subDesignerList[i].renovation_type = "全案";
            }
          }
          // var width = this.subDesignerList.length * 90 / 37.5;
          // this.$refs.team_2.style.width = width + 'rem';
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      //设计师的其他案例详情
      goDetails(id) {
        this.$router.push({
          name: "anlixiangqing",
          query: {
            id: id
          }
        });
        this.reload();
      },
      //更多评论
      goComment() {
        this.$router.push({
          name: "pinglun"
        })
      },
      //图文混排
      designIdea() {
        this.$vux.loading.show();
        let data = {
          subject_id: this.$route.query.id / 1
        };
        this.$index.designIdea(data).then((res) => {
          this.designIdeaList = res.data;
          for (let i = 0; i < this.designIdeaList.length; i++) {
            this.designIdeaList[i].img_path = this.$imgSrc + this.designIdeaList[i].img_path
          }

          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      //抬起键盘
      getFocus() {
        this.$refs.content.focus()
      },
      //个人中心
      goMe() {
        this.$router.push({
          name: "gerenzhongxin"
        })
      },
    },
    watch: {
      $route: {
        handler: function (val, oldVal) {
          this.designIdea();
          this.GetCaseInfo();
        },
        immediate: true
      }
    },
  }
</script>

<style scoped lang="less">
  @import './caseDetails';
</style>
