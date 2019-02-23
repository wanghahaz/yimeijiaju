<template>
  <div>
    <header class="header-container">
      <div class="left" @click="goBack">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="">
      </div>

      <div class="title">
        每日抽奖
      </div>

      <a class="right" href="https://e-133778.chatnow.meiqia.com/dist/standalone.html">
        <img class="search" src="../../../static/image/active/kfff.png" alt="">
      </a>
    </header>
    <div class="reward-container">
      <div class="meta">
        <span class="current-score-box">
          <span class="current-score">您当前拥有积分：<a href="javascript:;">{{ integral }}</a></span>
          <br>
          <a class="hrefA" href="javascript:;" style="color: white;" @click="goTask">获取更多积分 ></a>
        </span>
        <router-link class="rule-btn" :to="{ name: 'jifenguize' }">积分规则</router-link>
      </div>
      <div class="content">
        <div
          class="wheel-container">
          <div class="header">
            <h3>每日抽奖</h3>
            <p style="font-weight: bold;">
              <span>100%</span>
              <span style="color: #7617A4;">中奖</span>
            </p>
          </div>

          <div class="wheel">
            <!-- 灯光效果 -->
            <!-- <ul class="wheel-light">
              <li
                v-for="(item, index) in list"
                :key="index"
                :style="{ transform: `rotate(${index * 15}deg)`}"
              >
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </li>
            </ul> -->

            <!-- 转盘奖项 -->
            <ul id="wheel" class="wheel-list">
              <li
                v-for="(item, index) in list"
                :key="index"
                :style="{ transform: `rotate(${index * 60}deg)`}"
              >
                <!-- <i></i> -->
                <div class="prize">
                  <!-- <h3>{{ item.title }}</h3>
                  <p>{{ item.desc }}</p> -->
                  <img v-lazy="`../../../static/image/choujiang/card${index}.png`" alt="">
                </div>
              </li>
            </ul>

            <!-- 转盘指示器 -->
            <div id="pointer" class="wheel-pointer" @click="start">
            </div>
          </div>

          <div class="footer">
            <ul>
              <li v-for="(item, index) in list2" :key="index">
                <div class="pic">
                  <img v-lazy="item.src" alt>
                </div>
                <div class="desc">{{item.desc}}</div>
              </li>
            </ul>
            <p style="color: #AC7DC7;">100积分/每次</p>
            <p style="color: #FFFFFF;">0i4***on***获得乳胶U型枕</p>
          </div>
        </div>
      </div>
      <div class="active-rules">
        <div class="rules-container">
          <div class="rules-content">
            <div class="header">
              <span class="circle circle-0"></span>
              <span class="circle circle-1"></span>
              <span class="circle circle-2"></span>
              <h3 class="title">活动规则</h3>
              <span class="circle circle-2"></span>
              <span class="circle circle-1"></span>
              <span class="circle circle-0"></span>
            </div>
            <div class="rule-item">
              <div>
                <span class="num">1</span>
              </div>
              <span class="text">
                用户每日可在本页面参与3次抽奖活动，每次抽奖消耗100
                积分，有机会赢得乳胶U型枕、Iphone XS等奖品（详情请
                见抽奖区奖品一览）
              </span>
            </div>
            <div class="rule-item">
              <div>
                <span class="num">2</span>
              </div>
              <span class="text">
                凡以不正当手段（包括但不限于作弊、扰乱系统、实施网
                络攻击等）进行抽奖，美居精选有权终止该用户所有积分
                兑换行为并注销账号
              </span>
            </div>
            <div class="rule-item">
              <div>
                <span class="num">3</span>
              </div>
              <span class="text">
                所有实体奖品不包含运费，可以在积分商城进行包邮资格
                兑换。
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "choujiang",
    data() {
      return {
        integral:"",
        list: [
          {title: "100元话费", desc: ""},
          {title: "50元话费", desc: ""},
          {title: "30元话费", desc: ""},
          {title: "10元话费", desc: ""},
          {title: "5元话费", desc: ""},
          {title: "20积分", desc: ""},
        ],
        list2: [
          {
            desc: "1次包邮资格",
            src:
              "https://tse2.mm.bing.net/th?id=OIP.qzn2Lxk6FmD4ObV4pAczEQHaEw&pid=Api&w=1400&h=900&rs=1&p=0"
          },
          {
            desc: "1次包邮资格",
            src:
              "https://tse2.mm.bing.net/th?id=OIP.qzn2Lxk6FmD4ObV4pAczEQHaEw&pid=Api&w=1400&h=900&rs=1&p=0"
          },
          {
            desc: "1次包邮资格",
            src:
              "https://tse2.mm.bing.net/th?id=OIP.qzn2Lxk6FmD4ObV4pAczEQHaEw&pid=Api&w=1400&h=900&rs=1&p=0"
          },
          {
            desc: "1次包邮资格",
            src:
              "https://tse2.mm.bing.net/th?id=OIP.qzn2Lxk6FmD4ObV4pAczEQHaEw&pid=Api&w=1400&h=900&rs=1&p=0"
          }
        ],
        isStart: false, // 抽奖进行中
        lenCloc: 0, // 当前第几次计算叠加的度数
        turn: 3, // 转盘旋转最低的圈数
        soBuom: 0, // 在指定奖品区域内，随机停止的角度，
        PrizeIndex: 0 // 抽奖结果的索引
      };
    },
    methods: {
      // 随机得到一个抽奖结果
      calculate() {
        // var trunNum = [1, 2, 3, 4, 5, 6]; //概率奖品 编号

        // /* 中奖概率概率 权重是 1:2:3:4:5:6  */
        // var turntable = [];
        // for (var i = 0; i < trunNum.length; i++) {
        //   for (var j = 0; j < trunNum[i]; j++) {
        //     turntable.push(i + 1);
        //   }
        // }


        // 随机数得到中奖项目
        this.PrizeIndex = Math.ceil(Math.random() * 5) - 1;

        // 范围 (-28, 28)
        this.soBuom = parseInt(Math.ceil(Math.random() * 56) - 28);
      },
      run() {
        // 转盘旋转效果
        this.isStart = true;
        this.lenCloc++;

        /*
         * 旋转度数 = 上次度数+ 最小圈数 * 360 + 当前数字 * 60 +随机角度  = 最终旋转度数
         */
        var wheel = document.getElementById("wheel");
        wheel.style.transform = `rotate(${this.lenCloc * this.turn * 360 + 360 -
        this.PrizeIndex * 60 -
        this.soBuom}deg)`;

        setTimeout(() => {
          this.$vux.toast.text("您的抽奖结果：" + this.list[this.PrizeIndex].title);
          this.isStart = false;
        }, 3200);
      },
      start() {
        this.$showToast(true, 'text', '即将开放，敬请期待');
        return;
        if (this.isStart) {
          return;
        }

        this.calculate();
        this.run();
      },
      goBack() {
        this.$router.go(-1)
      },
      //去任务中心
      goTask(){
        this.$router.push({
          name:"renwuzhongxin"
        })
      }
    },
    mounted(){
      this.integral = localStorage.integral
    }
  };
</script>

<style lang="less" scoped>
  @import "./reward.less";
</style>
