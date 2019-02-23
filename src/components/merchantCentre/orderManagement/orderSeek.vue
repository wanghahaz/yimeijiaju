<template>
  <div class="orderSeek">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        订单管理
      </div>
    </header>
    <!--搜索-->
    <div class="seekH">
      <input type="text" placeholder="请输入订单号/姓名/电话" v-model="antistop">
      <p @click="goBack">取消</p>
      <img class="search" src="../../../../static/image/me/ss.png" alt="">
    </div>


    <div class="nothouse-list" v-for="item in orderList">
      <span class="examine" @click="goNotHouseDetails(item.order_id)">查看订单</span>
      <div class="nothouse-top">
        <span>订单号：{{item.sh_order_num}}</span>
        <span>{{item.create_time}}</span>
      </div>
      <div class="nothouse-bottom">
        <img :src="item.head_img" alt="">
        <div class="nothouse-bottom-main">
          <div class="nothouse-bottom-one">
            <span>{{item.name}}</span>
            <span>电话：{{item.tel}}</span>
          </div>
          <div class="nothouse-bottom-two">
            <span>{{item.village}}</span>
            <span>{{item.acreage}}㎡</span>
            <span>{{item.house_name}}</span>
            <span>{{item.style_name}}</span>
          </div>
        </div>
      </div>
    </div>
    <infinite-loading :on-infinite="orderGetList" v-show="this.antistop.length>0" ref="infiniteLoading">
    <span slot="no-more" class="no-more">
    已无数据
    </span>
      <span slot="no-results" class="no-more">
    已无数据
    </span>
    </infinite-loading>
  </div>
</template>

<script>
  import InfiniteLoading from 'vue-infinite-loading';

  export default {
    name: "orderSeek",
    components: {
      InfiniteLoading
    },
    watch: {
      antistop(newVal, oldVal) {
        if (newVal != oldVal) {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
          this.orderList = [];
          this.page = 0;
          this.orderGetList()
        }
      }
    },
    data() {
      return {
        antistop: "",
        hotBol: false,
        queList: "",
        page: 0,
        orderList: []
      }
    },
    mounted() {
      if (localStorage.userId == undefined) {
        localStorage.setItem('userId', "")
      }
    },
    methods: {
      //返回上一级
      goBack() {
        this.$router.go(-1)
      },
      //查询订单列表
      orderGetList() {
        this.$vux.loading.show();
        this.page++;
        let reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        let orderNo = /^[S]{1}[H]{1}[0-9]{13}$/;
        if (orderNo.test(this.antistop)) {
          var data = {
            order_no: this.antistop,
            page: this.page,
          };
        } else if (reg.test(this.antistop)) {
          var data = {
            mobile: this.antistop,
            page: this.page,
          };
        } else {
          var data = {
            username: this.antistop,
            page: this.page,
          };
        }
        this.$merchant.orderGetList(data).then((res) => {
          console.log(res)
          if (res.data.data.length) {
            var data = res.data.data;
            for (let i = 0; i < data.length; i++) {
              data[i].create_time = this.$time.formattingDate(new Date(data[i].create_time)).slice(0, 16);
              data[i].head_img = this.$imgSrc + data[i].head_img
            }
            this.orderList = [...this.orderList, ...data];
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
          } else {
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      },
    }
  }
</script>

<style scoped lang="less">
  @import "../../../../static/css/overall.less";

  .orderSeek {
    width: 100%;

    .header-container {
      position: fixed;
      top: 0;
      z-index: 1000;
      width: 100%;
      height: 44px;
      line-height: 44px;
      background-color: white;
      display: flex;
      border-bottom: 1px solid rgba(231, 231, 231, 1);

      .left {
        text-align: left;
        padding-left: 12.5px;
        display: inline-block;

        img {
          width: 19px/2;
          margin-top: 15px;
          height: 32px/2;
        }
      }

      .title {
        width: 90%;
        text-align: center;
        font-size: 36px/2;
      }
    }

    .seekH {
      width: 702px/2;
      display: flex;
      justify-content: space-between;
      margin: 128px/2 auto 41px/2;
      position: relative;

      input {
        font-size: 24px/2;
        width: 600px/2;
        height: 80px/2;
        background: rgba(243, 243, 243, 1);
        border-radius: 40px/2;
        text-indent: 79px/2;
      }

      p {
        height: 80px/2;
        line-height: 80px/2;
        font-size: 32px/2;
      }

      .search {
        position: absolute;
        left: 30px/2;
        top: 22px/2;
        width: 37px/2;
        height: 37px/2;
      }
    }

    .no-more {
      color: #666;
      display: block;
      font-size: 14px;
      margin: 10px 0;
    }
  }
</style>
