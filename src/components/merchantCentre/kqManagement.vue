<template>
  <div class="kqManagement">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        客情管理
      </div>
    </header>
    <div class="live-white">

    </div>
    <!--客情管理列表-->
    <div class="kqManagement-l">
      <div class="kqManagement-list" v-for="item in OrderFollow">
        <div class="kqManagement-box">
          <p>{{item.contact_content}}</p>
          <div class="kqManagement-s">
            <span>{{item.follow_username}}</span>
            <span>{{item.create_time}}</span>
          </div>
        </div>
      </div>
    </div>

    <footer @click="goAddOrderFollow">
      <div>
        <img src="../../../static/image/merchant/tianjia.png" alt="">
        <span>添加记录</span>
      </div>
    </footer>
    <infinite-loading :on-infinite="OrderFollowList" ref="infiniteLoading">
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
    name: "keqingguanli",
    components: {
      InfiniteLoading
    },
    data() {
      return {
        page: 0,
        OrderFollow: "",
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      //添加客情记录
      goAddOrderFollow() {
        this.$router.push({
          name: "addOrderFollow",
          query: {
            id: this.$route.query.id
          }
        })
      },
      //客情列表
      OrderFollowList() {
        this.$vux.loading.show();
        this.page++;
        let data = {
          page: this.page,
        };
        this.$merchant.OrderFollowList(data).then((res) => {
          if (res.data.data.length) {
            console.log(res.data.data);
            var data = res.data.data;
            for (let i = 0; i < data.length; i++) {
              console.log(new Date(data[0].create_time))
              console.log(this.$time.formattingDate(new Date(data[i].create_time)))
              data[i].create_time = this.$time.formattingDate(new Date(data[i].create_time)).slice(0, 16);
            }
            this.OrderFollow = [...this.OrderFollow, ...data];
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
          } else {
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .kqManagement {
    width: 100%;
    background: #F8F8F8;

    .live-white {
      width: 100%;
      background: #F8F8F8;
      height: 10px;
      margin-top: 39px;
    }

    .header-container {
      position: fixed;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 44px;
      line-height: 44px;
      background-color: white;
      display: flex;

      .left {
        text-align: left;
        padding-left: 12.5px;
        display: inline-block;

        img {
          width: (19px/2);
          margin-top: 15px;
          height: (32px/2);
        }
      }

      .title {
        width: 90%;
        text-align: center;
        font-size: (36px/2);
      }
    }

    /*客情管理列表*/

    .kqManagement-list {
      margin-top: 5px;
      padding: 20px 0 10px 0;
      width: 100%;
      background: white;

      .kqManagement-box {
        width: 702px/2;
        margin: auto;

        p {
          font-size: 14px;
          line-height: 24px;
          color: #333;
        }

        .kqManagement-s {
          display: flex;
          justify-content: space-between;
          margin-top: 18px;
          font-size: 12px;
          color: #999;
        }
      }
    }

    footer {
      width: 100%;
      height: 100px/2;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.1);
      position: fixed;
      bottom: 0;
      color: #E95504;
      font-size: 14px;

      div {
        height: 100%;
        width: 150px/2;
        display: flex;
        justify-content: space-between;
        margin: auto;
        line-height: 50px;

        img {
          width: 24px/2;
          height: 24px/2;
          margin: auto;
        }
      }
    }

    .no-more {
      color: #666;
      display: block;
      font-size: 14px;
      margin: 5px 0 80px;
      padding: 10px 0;
      background: white;
    }
  }
</style>
