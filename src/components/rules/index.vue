<template>
  <!-- 积分规则 -->
  <div>
    <header class="header-container">
      <div class="left" @click="goBack">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="">
      </div>

      <div class="title">
        积分规则
      </div>

      <a class="right" href="https://e-133778.chatnow.meiqia.com/dist/standalone.html">
        <img class="search" src="../../../static/image/active/kfff.png" alt="">
      </a>
    </header>
    <!-- 积分规则 -->
    <section class="rules-container">
      <div class="rule-item">
        <div class="title">
          <div class="bg"></div>
          <div class="content">
            <span class="icon">1</span>
            <span class="text">什么是美居积分？</span>
          </div>
        </div>
        <div class="content">美居积分是美居精选针对【您对其他用户做出的帮助】而设立的奖励，也是美居精选用于【兑换等价实物/服务等】 的专属货币。</div>
      </div>

      <div class="rule-item">
        <div class="title">
          <div class="bg"></div>
          <div class="content">
            <span class="icon">2</span>
            <span class="text">美居积分能做什么？</span>
          </div>
        </div>
        <div class="content">使用美居积分，可以在美居精选【积分兑换】换取相应的礼品，还可用于在线提问。</div>
      </div>

      <div class="rule-item">
        <div class="title">
          <div class="bg"></div>
          <div class="content">
            <span class="icon">3</span>
            <span class="text">如何获得美居积分？</span>
          </div>
        </div>
        <div class="content">
          <x-table full-bordered class="rules-table">
            <thead>
            <tr>
              <th>用户行为</th>
              <th>积分来源</th>
              <th>积分累计</th>
              <th>上限
                <br>（每天）
              </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>注册</td>
              <td>完成注册</td>
              <td>+200</td>
              <td></td>
            </tr>
            <tr>
              <td>完善个人信息</td>
              <td>城市、性别、邮箱、签名、头像等</td>
              <td>+50</td>
              <td></td>
            </tr>
            <tr>
              <td>登录</td>
              <td>登录美居精选</td>
              <td>+20</td>
              <td>20</td>
            </tr>
            <tr>
              <td>打卡</td>
              <td>第一天</td>
              <td>+5</td>
              <td>5</td>
            </tr>
            <tr>
              <td></td>
              <td>第二天</td>
              <td>+10</td>
              <td>10</td>
            </tr>
            <tr>
              <td></td>
              <td>第三天</td>
              <td>+40</td>
              <td>40</td>
            </tr>
            <tr>
              <td></td>
              <td>第四天</td>
              <td>+5</td>
              <td>5</td>
            </tr>
            <tr>
              <td></td>
              <td>第五天</td>
              <td>+10</td>
              <td>10</td>
            </tr>
            <tr>
              <td></td>
              <td>第六天</td>
              <td>+15</td>
              <td>15</td>
            </tr>
            <tr>
              <td></td>
              <td>第七天</td>
              <td>+60</td>
              <td>60</td>
            </tr>
            <tr>
              <td></td>
              <td>连续签到七天以上</td>
              <td>+30</td>
              <td>30</td>
            </tr>
            <tr>
              <td>做任务</td>
              <td>浏览商家活动</td>
              <td>+20</td>
              <td>60</td>
            </tr>
            <tr>
              <td></td>
              <td>首次发布任务</td>
              <td>+20</td>
              <td>20</td>
            </tr>
            <tr>
              <td></td>
              <td>首次回答问题</td>
              <td>+20</td>
              <td>20</td>
            </tr>
            <tr>
              <td>签约</td>
              <td>签约并上传合同</td>
              <td>交易额</td>
              <td></td>
            </tr>
            <tr>
              <td>分享</td>
              <td>分享美居精选内容</td>
              <td>+100</td>
              <td>100</td>
            </tr>
            <tr>
              <td></td>
              <td>成功邀请注册/每人</td>
              <td>+600</td>
              <td>6000</td>
            </tr>
            <tr>
              <td>积极参与</td>
              <td>发表评论</td>
              <td>+20</td>
              <td>60</td>
            </tr>
            <tr>
              <td></td>
              <td>关注/收藏/点赞</td>
              <td>+10</td>
              <td>30</td>
            </tr>
            <tr>
              <td></td>
              <td>回答问题</td>
              <td>+20</td>
              <td>60</td>
            </tr>
            <tr>
              <td></td>
              <td>提问者主动采纳</td>
              <td>问题价值</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>发布内容并通过审核</td>
              <td>+200</td>
              <td>200</td>
            </tr>
            <tr>
              <td></td>
              <td>举报</td>
              <td>+50</td>
              <td>100</td>
            </tr>
            <tr>
              <td></td>
              <td>被关注/收藏/点赞</td>
              <td>+10</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>被评论</td>
              <td>+20</td>
              <td></td>
            </tr>
            </tbody>
          </x-table>
        </div>
      </div>
      <div class="rule-item rule-explain">
        <div class="title" style="padding-right: 7px;">
          <div class="bg"></div>
          <div class="content">
            <span class="icon">4</span>
            <span class="text">规则说明</span>
          </div>
        </div>
        <div class="content">
          <p>
            <span>a.</span>
            <span>积分永久有效。</span>
          </p>
          <p>
            <span>b.</span>
            <span>积分不可转让，不可交易。</span>
          </p>
          <p>
            <span>c.</span>
            <span>每日500积分封顶（除去返还和邀请注册积分）。</span>
          </p>
          <p>
            <span>d.</span>
            <span>发布涉嫌广告、不良信息等违规内容，平台将删除内容并收回奖励积分，甚至注销账号。</span>
          </p>
          <p>
            <span>e.</span>
            <span>如发现任何违规套取奖励行为将视情节严重程度采取以下措施：包括但不限于不予发放奖励、注销账户、依法追究法律责任等。</span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {XTable} from "vux";

  export default {
    name: "",
    components: {
      XTable
    },
    computed: {},
    data() {
      return {};
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  };
</script>

<style scoped>
  .rules-header {
    background-color: #fff !important;
    border-bottom: 1px solid #EEEEEE;
  }

  .rules-header .vux-header {
    border-bottom: 1px solid #f2f2f2;
  }

  .rules-header .vux-header-left .left-arrow:before {
    border-color: #000 !important;
  }

  .rules-header .vux-header-title {
    color: #000 !important;
  }

  .rules-container {
    background-color: #fff;
    padding: 12px 12px 20px;
    margin-top: 44px;
  }

  .rule-item {
    margin-top: 20px;
  }

  .rule-item .title {
    display: inline-block;
    position: relative;
    margin-bottom: 16px;
  }

  .rule-item .title .text {
    font-size: 16px;
    font-weight: 400;
    color: #eb5500;
  }

  .rule-item .content {
    color: #333333;
    font-size: 12px;
  }

  .rule-item .title .bg {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 9;
    content: "";
    background-color: rgba(235, 85, 0, 1);
    opacity: 0.2;
    width: 100%;
    height: 10px;
  }

  .rule-item .icon {
    display: inline-block;
    background-color: #eb5500;
    border-radius: 50%;
    color: #fff;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
  }

  .rules-table {
    color: #666666;
    font-size: 12px;
    background-color: #fff;
  }

  .rules-table th {
    color: #333333;
    font-weight: 400;
  }

  .rules-table tr td:nth-child(3),
  .rules-table tr td:nth-child(4) {
    color: #e95504;
  }

  .rule-explain p span:first-child {
    font-style: italic;
    font-weight: bold;
  }

  .header-container {
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    border-bottom: 1px solid #cccccc;
    height: 44px;
    line-height: 44px;
    display: table;
    table-layout: fixed;
    background-color: white;
  }

  .header-container .left {
    display: table-cell;
    text-align: left;
    padding-left: 12.5px;
  }

  .header-container .left img {
    margin-top: 15px;
    width: 9.5px;
    height: 16px;
  }


  .header-container .title {
    display: table-cell;
    text-align: center;
    font-size: 18px;
  }

  .header-container .right {
    display: table-cell;
    padding-right: 12.5px;
    text-align: right;
  }

  .header-container .right img {
    width: 16px;
    height: 18px;
  }

</style>

