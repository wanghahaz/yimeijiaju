<template>
  <div class="addOrderFollow">
    <header class="header-container">
      <div class="left">
        <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      </div>
      <div class="title">
        新增客情记录
      </div>
    </header>
    <div class="live-white">

    </div>
    <div class="addOrderFollow-box">
      <div class="addOrderFollow-list" @click="showSide">
        <span>{{followValue}}</span>
        <img class="zuo" src="../../../static/image/index/zuo.png" alt="">
      </div>
      <div class="live-white">

      </div>
      <div class="textarea">
        <x-textarea v-model="contactContent" placeholder="请输入备注内容" autosize></x-textarea>
      </div>
    </div>
    <footer @click="addFollow">
      确认添加
    </footer>
    <follow-bar @followChoice="choiceFollow"></follow-bar>
  </div>
</template>

<script>
  import followBar from '@/components/merchantCentre/orderFollowBar.vue'

  import {XTextarea} from 'vux'

  export default {
    name: "addOrderFollow",
    components: {
      XTextarea,
      'follow-bar': followBar
    },
    data() {
      return {
        followValue: "请选择维护客情角色",
        contactContent: "",
        keyValue: "",
      }
    },
    methods: {
      //选择客情角色
      showSide() {
        this.$store.dispatch('showFollowBar')
      },
      choiceFollow(data) {
        console.log(data);
        this.followValue = data.name;
        this.keyValue = data.key;
      },
      goBack() {
        this.$router.go(-1);
      },
      //添加客情记录
      addFollow() {
        this.$vux.loading.show();
        let data = {
          order_id: this.$route.query.id,
          follow_user: this.keyValue,
          contact_content: this.contactContent
        };
        this.$merchant.addFollow(data).then((res) => {
          if (res.code === 200) {
            this.$router.push({
              name: "keqingguanli"
            })
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
  .addOrderFollow {
    width: 100%;

    .live-white {
      width: 100%;
      background: #F8F8F8;
      height: 10px;
      margin-top: 44px;
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

    .addOrderFollow-box {
      width: 100%;

      .addOrderFollow-list {
        font-size: 14px;
        width: 702px/2;
        height: 45px;
        line-height: 45px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        color: #999;

        .zuo {
          width: 12px/2;
          height: 22px/2;
          margin: auto 0;
        }
      }

      .live-white {
        width: 100%;
        background: #F8F8F8;
        height: 5px;
        margin: 0;
      }

      .textarea {
        font-size: 14px;
      }
    }

    footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 100px/2;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 3px/2 15px/2 0 rgba(0, 0, 0, 0.1);
      font-size: 14px;
      color: #E95504;
      line-height: 50px;
      font-weight: bold;
      text-align: center;
    }
  }
</style>
