<template>
  <div class="container">
    <!--头部-->
    <!--<div class="headernavigation">-->
    <!--<img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">-->
    <!--美居精选-->
    <!--<img class="search" src="../../../static/image/choicenessstylist/tousousu.png" alt="">-->
    <!--</div>-->
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        美居精选
      </div>
    </header>
    <div class="hahah">

    </div>
    <!--有主装饰-->
    <div class="home_adorn">
      <!--图-->
      <div class=" youzhu_head">
        <!--最左侧图片-->
        <img v-lazy="shopDetailList.logo_path" alt="" class="youzhu">
        <!--中间文字-->
        <div class="youzhu_center">
          <p class="font_title">{{shopDetailList.shop_name}}</p>
          <!--评分-->
          <p class="start">
            <img src="../../../static/image/selection/xing.png" alt="">
            <img src="../../../static/image/selection/xing.png" alt="">
            <img src="../../../static/image/selection/xing.png" alt="">
            <img src="../../../static/image/selection/xing.png" alt="">
            <img src="../../../static/image/selection/xing.png" alt="">
            <span>评分{{shopDetailList.comment_sum}}</span>
          </p>
          <!--详情-->
          <p class="font_liu"><span>{{shopDetailList.address}}</span> <span class="number">均价：{{shopDetailList.avg_price}}元</span>
          </p>
          <p class="font_visited">进30天已有 <span class="visited_number">{{shopDetailList.consult_sum}}</span>次预约</p>
        </div>
        <!--最右边按钮-->
        <div class="shop" @click="goAptitude(shopDetailList.aptitude_path)">店铺资质 <img
          src="../../../static/image/selection/youjiantou.png" alt="" class="icon_more"></div>
      </div>
      <!--下边简介-->
      <div class="footer">
        <p class="txt">公司简介</p>
        <p class="warp">{{shopDetailList.enterprise_desc}}</p>
      </div>
    </div>
    <!--商家精选活动-->
    <div class="merchant">
      <!--头部-->
      <div class="head">
        <h3>商家精选活动</h3>
      </div>
      <img src="../../../static/image/selection/logogo.png" alt="">
    </div>
    <!--精选案例-->
    <div class="case">
      <div class="head">
        <p>精选案例</p>
        <div class="more_1" @click="goList">
          <span>更多</span>
          <img src="../../../static/image/selection/youjiantou.png" alt="" class="icon_more">
        </div>
      </div>
      <!--单个图和信息上-->
      <div class="first">
        <figure class="jingxuan_img" v-for="item in shopSubjectList" @click="goGetCaseInfo(item.id)">
          <img v-lazy="item.cover_img" alt="">
          <figcaption>
            <p>{{item.subject_name}}</p>
            <p>
              <span>{{item.acreage}}</span>㎡ /
              <span>{{item.style_name}}</span> /
              <span>{{item.renovation_type}}</span>
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
    <!--精选签约业主-->
    <div class="sign">
      <!--头部-->
      <div class="head">
        <p>美居精选签约业主评价</p>
        <div class="more_1" @click="goComment">
          <span>查看全部</span>
          <img src="../../../static/image/selection/youjiantou.png" alt="" class="icon_more">
        </div>
      </div>
      <!--内容一-->
      <div class="container" v-for="item in 4">
        <div class="container_1">
          <div class="container_list">
            <img src="../../../static/image/login/mao.jpg" alt="">
            <div>
              <p>搬砖的猪</p>
              <p>2018-11-27 | 华润长安中心 | 90㎡</p>
            </div>
          </div>
          <div class="container_two">
            <img src="../../../static/image/selection/sixin.png" alt="">
            私信
          </div>
        </div>
        <p class="container_2">装修工人素质很高，设计师也是很负责的，尊重个人意见的同时从专业角度进行完善。</p>
        <div class="container_3">
          <p>
            <img src="../../../static/image/selection/pinglun.png" alt="">
            <span>评论</span>
          </p>
          <p>
            <img src="../../../static/image/selection/dianzan.png" alt="">
            <span>5</span>
          </p>
        </div>
      </div>
      <!--更多信息-->
      <div class="more_msg" @click="goComment">
        <span>查看更多</span>
        <img src="../../../static/image/selection/youjiantou.png" alt="" class="icon_more">
      </div>
    </div>
    <!--业主日记-->
    <div class="log">
      <!--头部-->
      <div class="head">
        <p>业主日记</p>
        <div class="more_1">
          <span>查看全部</span>
          <img src="../../../static/image/selection/youjiantou.png" alt="" class="icon_more">
        </div>
      </div>
      <!--业主日记内容-->
      <div class="log_1">
        <div class="log_list">
          <div class="log_one">
            <img src="../../../static/image/login/mao.jpg" alt="" class="headerimg">
            <div class="log_2">
              <img src="../../../static/image/login/mao.jpg" alt="">
              <span>超级家</span>
            </div>
            <div class="log_3">
              <p class="log_4">新家变形中</p>
              <p class="log_5">目前为止橱柜正在安装中，工人师傅早早的就过来了，专业快捷是我目前为止橱柜正在安装中</p>
            </div>
          </div>
          <div class="log_one">
            <img src="../../../static/image/login/mao.jpg" alt="" class="headerimg">
            <div class="log_2">
              <img src="../../../static/image/login/mao.jpg" alt="">
              <span>超级家</span>
            </div>
            <div class="log_3">
              <p class="log_4">新家变形中</p>
              <p class="log_5">目前为止橱柜正在安装中，工人师傅早早的就过来了，专业快捷是我目前为止橱柜正在安装中</p>
            </div>
          </div>
          <div class="log_one">
            <img src="../../../static/image/login/mao.jpg" alt="" class="headerimg">
            <div class="log_2">
              <img src="../../../static/image/login/mao.jpg" alt="">
              <span>超级家</span>
            </div>
            <div class="log_3">
              <p class="log_4">新家变形中</p>
              <p class="log_5">目前为止橱柜正在安装中，工人师傅早早的就过来了，专业快捷是我目前为止橱柜正在安装中</p>
            </div>
          </div>
          <div class="log_one">
            <img src="../../../static/image/login/mao.jpg" alt="" class="headerimg">
            <div class="log_2">
              <img src="../../../static/image/login/mao.jpg" alt="">
              <span>超级家</span>
            </div>
            <div class="log_3">
              <p class="log_4">新家变形中</p>
              <p class="log_5">目前为止橱柜正在安装中，工人师傅早早的就过来了，专业快捷是我目前为止橱柜正在安装中</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!--设计团队-->
    <div class="team">
      <div class="head">
        <h3>设计团队（{{shopDesignerNum}}）</h3>
      </div>
      <div class="team_1">
        <div class="team_2" ref="team_2">
          <div class="team_3" v-for="item in shopDesignerList" @click="goStylistOptions(item.id)">
            <img v-lazy="item.header_path" alt="">
            <p class="p_1">{{item.designer_name}}</p>
            <p class="p_2">主任设计师</p>
            <p class="p_2">评分 <span style="color: #CB9C3D">8.2</span></p>
          </div>
        </div>
      </div>
      <!--更多信息-->
      <div class="more_msg" @click="goChoicenessstylist">
        <span>查看更多</span>
        <img src="../../../static/image/selection/youjiantou.png" alt="" class="icon_more">
      </div>
      <div class="more_list">

      </div>
      <!--免费预约  在线咨询-->
      <div class="free_subscribe">
        <div class="free_list">
          <div class="free_1">
            <div class="free_div1">
              <img src="../../../static/image/selection/gz.png" alt="">
              <p>关注</p>
            </div>
            <div class="free_div2" @click="contrast">
              <img src="../../../static/image/selection/pk.png" alt="">
              <p>对比</p>
            </div>
            <div class="free_div3" @click="openOfferMark">
              <img src="../../../static/image/selection/bj.png" alt="">
              <p>报价</p>
            </div>
          </div>
          <div class="free_2">
            <span class="free_span1" @click="promptlyapply(0)">免费预约</span>
            <a href="https://e-133778.chatnow.meiqia.com/dist/standalone.html" class="free_span2"><img
              src="../../../static/image/selection/kf.png" alt=""><span>在线咨询</span></a>
          </div>
        </div>
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
    </div>
    <company-bar @selet='toSelet'></company-bar>


    <!--免费预约模态框-->
    <div class="immediatelyapply" v-show="promptly" @touchmove.prevent>
      <div class="mark">
        <div class="markapply">
          <img src="../../../static/image/index/close.png" @click="closePromptlyapply()" class="close"/>
          <h1>在线报名</h1>
          <input type="tel" maxlength="11" placeholder="请输入您的称呼" v-model="lessonName"/>
          <input type="tel" maxlength="11" placeholder="请输入手机号码" v-model="lessonPhone"/>
          <span @click="promptlyapply(1)">立即提交</span>
        </div>
      </div>
    </div>
    <!--提交成功-->
    <div class="immediatelyapply" v-show="successBol" @touchmove.prevent>
      <div class="mark">
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


    <!--报价模态框-->
    <div class="offerMark" v-show="offerMarkBol" @click="openOfferMark" @touchmove.prevent>
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
          <div class="pulldownlist pulldownlist-one">
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
          <div class="pulldownlist pulldownlist-one">
            <input type="number" placeholder="输入面积" @click.stop="focusInput" v-model="acreage"/>
            <span style="margin-left: 32px;">㎡</span>
          </div>
        </div>
        <!-- 选择厅室 -->
        <!--<change-house></change-house>-->
        <div class="change">
          <div class="title" @click.stop="framChangei">
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
        <input type="tel" maxlength="11" placeholder="输入手机号获取报价结果" class="feedin" v-model="mobilePhone"
               @click.stop="focusInput"/>
        <span class='feedin' style="background:rgba(255,90,0,1);text-align: center;color: white;border: none;"
              @click.stop="promptlyapply(2)">立即申请</span>
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

  </div>
</template>

<script>
  import companyBar from '@/components/index/companyBar.vue'

  export default {
    components: {
      'company-bar': companyBar,
    },
    name: "zhuangxiugongsixiangqing",
    data() {
      return {
        putInBol: false, //立即申请
        offerMarkBol: false,//报价模态框
        successBol: false, //提交成功
        lessonPhone: "", //免费预约电话
        lessonName: "", //免费预约姓名
        shopDetailList: [],//详情
        shopDesignerList: [],//详情设计师
        shopDesignerNum: "",//总设计师人数
        shopSubjectList: "",//详情里的案例
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
        contrastBol: false, //对比模态框
        promptly: false,//免费预约模态框
        //报价start
        triangleBolTwo: true,
        unitModelTwo: "", //地址选择下拉
        isShowSelectTwo: false, //地址选择下拉
        triangleBol: true,
        unitModel: "", //房屋类型下拉
        isShowSelect: false, //房屋类型下拉
        triangleBolOne: true,
        unitModelOne: "", //装修类型下拉
        isShowSelectOne: false, //装修类型下拉
        acreage: "", //面积
        //报价end
        unitNameOne: '装修类型', //装修类型下拉
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
        dataList: [], //房屋类型下拉
        dataListOne: [], //装修类型下拉
        unitNameTwo: '北京', //地址选择下拉
        unitName: '房屋类型', //房屋类型下拉
        shopId: "",
        unitNameId: null,//房屋类型id
      }
    },
    methods: {
      //返回
      goBack() {
        this.$router.go(-1)
      },
      //公司详情
      shopDetail() {
        this.$vux.loading.show();
        let data = {
          shop_id: this.$route.query.id
        };
        this.$index.shopDetail(data).then((res) => {
          console.log(res.data)
          this.shopId = res.data.id;
          this.shopDetailList = res.data;
          this.shopDetailList.logo_path = this.$imgSrc + this.shopDetailList.logo_path;
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      //公司详情 里的案例
      shopSubject() {
        this.$vux.loading.show();
        let data = {
          shop_id: this.$route.query.id
        };
        this.$index.shopSubject(data).then((res) => {
          this.shopSubjectList = res.data;
          for (let i = 0; i < this.shopSubjectList.length; i++) {
            this.shopSubjectList[i].cover_img = this.$imgSrc + this.shopSubjectList[i].cover_img;
            if (this.shopSubjectList[i].renovation_type == 1) {
              this.shopSubjectList[i].renovation_type = "全包";
            } else if (this.shopSubjectList[i].renovation_type == 2) {
              this.shopSubjectList[i].renovation_type = "半包";
            } else if (this.shopSubjectList[i].renovation_type == 3) {
              this.shopSubjectList[i].renovation_type = "局装";
            } else {
              this.shopSubjectList[i].renovation_type = "全案";
            }
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      //公司详情 里的设计师团队
      shopDesigner() {
        this.$vux.loading.show();
        let data = {
          shop_id: this.$route.query.id
        };
        this.$index.shopDesigner(data).then((res) => {
          this.shopDesignerList = res.data;
          for (let i = 0; i < this.shopDesignerList.length; i++) {
            this.shopDesignerList[i].header_path = this.$imgSrc + this.shopDesignerList[i].header_path
          }
          this.shopDesignerNum = this.shopDesignerList.length;
          var width = this.shopDesignerList.length * 90 / 37.5;
          this.$refs.team_2.style.width = width + 'rem';
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
      //商家精选活动
      ShopActives() {
        this.$vux.loading.show();
        let data = {
          shop_id: this.$route.query.id
        };
        this.$index.ShopActives(data).then((res) => {
          console.log(res.data)
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
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
      //跳转到对比公司
      goContrast() {
        this.$router.push({
          name: "comparison",
          query: {
            idOne: this.selet_1_id,
            idTwo: this.selet_2_id,
            idThree: this.selet_3_id
          }
        })
      },
      //去案例详情
      goGetCaseInfo(id) {
        this.$router.push({
          name: "anlixiangqing",
          query: {
            id: id
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
      //跳转到更多评论
      goComment() {
        this.$router.push({
          name: "pinglun"
        })
      },
      //打开立即报名模态框   已经立即申请模态框
      promptlyapply(dome) {
        switch (dome) {
          case 0:
            this.promptly = true;
            break;
          case 1:
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
              } else {
                this.$showToast(true, 'text', res.message);
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
              if (res.status == '200') {
                this.offerMarkBol = !this.offerMarkBol;
                this.putInBol = true;
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
      //设计师列表页
      goChoicenessstylist() {
        this.$router.push({
          name: "companyStylist",
          query: {
            id: this.shopId
          }
        })
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
        console.log(item)
        this.isShowSelectOne = false;
        this.triangleBolOne = !this.triangleBolOne;
        this.unitModelOne = index;
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
      //获取房屋类型
      roomAll() {
        this.$vux.loading.show();
        let that = this;
        that.$index.roomAll().then((res) => {
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
      //显示报价模态框
      openOfferMark() {
        this.offerMarkBol = !this.offerMarkBol;
      },
      //查看店铺资质
      goAptitude(img) {
        this.$router.push({
          name: "dianpuzizhi",
          query: {
            img: img
          }
        })
      },
      //精选案例更多列表页
      goList() {
        this.$router.push({
          name: "jingxuananliliebiaoye"
        })
      }
    },
    mounted() {
      this.shopDetail();
      this.shopSubject();
      this.shopDesigner();
      this.ShopActives();
      this.roomAll();
      this.decorateType();
    }
  }
</script>
<style scoped lang="less">
  @import './meijuSelection';
</style>
