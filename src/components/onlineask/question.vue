<template>
  <div class="question">
    <div class="header">
      <span class="questionA" @click="goBack">取消</span>
      <span class="questionB">提问</span>
      <span class="questionC" @click="handleChoiceClassify">下一步</span>
    </div>
    <div class="remain">

    </div>
    <group>
      <x-textarea :max="49" name="description" placeholder="一句话描述你的问题（必填）" v-model="describe"></x-textarea>
    </group>
    <input type="text" class="supplement" placeholder="补充问题背景、条件等详细信息（选填）" v-model="supplement">
    <div class="img_index">
      <div v-for="item in imgList">
        <img :src="item" alt="">
      </div>
    </div>

    <!--底部积分-->
    <footer>
      <div class="elect">
        <input type="file" accept="image/*" multiple class="file_img" @change="UploadImg"/>
        <img class="elect_1" src="../../../static/image/choicenessstylist/tp.png" alt="">
        <div class="elect_one">
          <img class="elect_2" src="../../../static/image/choicenessstylist/jf.png" alt="">
          <input type="text" :placeholder="integral" v-model="integralNum">
        </div>
      </div>
      <div class="elect_two">
        <span>匿名</span>
        <img @click="changeImg" src="../../../static/image/choicenessstylist/wx.png" v-show="imgBol" alt="">
        <img @click="changeImg" src="../../../static/image/choicenessstylist/xz.png" v-show="!imgBol" alt="">
      </div>
    </footer>
  </div>
</template>

<script>
  import {XTextarea, Group} from 'vux'

  export default {
    components: {
      XTextarea,
      Group
    },
    name: "zaixianwendawoyaotiwen",
    data() {
      return {
        integral: "",
        imgBol: true,
        imgList: [],//图片存放
        imgListNo: [],
        supplement: "",//问题描述
        describe: "",//问题标题
        integralNum: "",//悬赏积分
      }
    },
    mounted() {
      if (localStorage.userId == undefined) {
        localStorage.setItem("userId", "")
      }
      this.integral = "共有" + localStorage.integral + "积分"
    },
    methods: {
      changeImg() {
        this.imgBol = !this.imgBol;
      },
      //返回
      goBack() {
        this.$router.go(-1)
      },
      //上传图片
      UploadImg(e) {
        if (e.target.files.length > 3) {
          this.$showToast(true, 'text', '最多选择三张图片');
          return;
        }
        let file = e.target.files;
        let param = new FormData(); //创建form对象
        for (var i = 0; i < file.length; i++) {
          param.append('inter_imgs[]', file[i]);//通过append向form对象添加数据
        }
        this.$index.UploadAllImg(param).then((res) => {
          for (let i = 0; i < res.inter_img.length; i++) {
            this.imgList.push(this.$imgSrc + res.inter_img[i]);
            this.imgListNo.push(res.inter_img[i]);
          }
        }).catch((err) => {
          console.log(err)
        })
      },
      //选择分类
      handleChoiceClassify() {
        if (this.describe.length <= 0) {
          this.$showToast(true, 'text', '请描述您的问题');
          return;
        }
        this.$router.push({
          name: "choiceclassify",
          query: {
            describe: this.describe,
            supplement: this.supplement,
            integralNum: this.integralNum,
            imgList: this.imgListNo
          }
        })
      },
    }
  }
</script>

<style scoped lang="less">
  @import "../../../static/css/overall.less";

  .question {
    width: 100%;

    .header {
      width: 100%;
      height: 85px/2;
      display: flex;
      justify-content: space-between;
      color: rgba(102, 102, 102, 1);
      font-size: 32px/2;
      line-height: 85px/2;

      .questionA {
        margin-left: 23px/2;
      }

      .questionB {
        font-size: @bag-size;
        color: rgba(51, 51, 51, 1);
      }

      .questionC {
        margin-right: 23px/2;
      }
    }

    .remain {
      width: 100%;
      height: 10px/2;
      background: rgba(248, 248, 248, 1);
    }

    /deep/ .weui-cells {
      width: 702px/2;
      margin: auto;

      .weui-cell__bd {
        font-size: 30px/2;

        .weui-textarea {
          font-size: 30px/2;
          margin-top: 48px/2;
        }

        .weui-textarea-counter {
          color: #333333;
          margin-bottom: 70px/2;

          span {
            color: #E95504;
          }
        }
      }
    }

    .supplement {
      width: 702px/2;
      margin: auto;
      font-size: 30px/2;
      display: block;
      padding-top: 21px/2;
    }

    footer {
      position: fixed;
      bottom: 47px/2;
      left: 24px/2;
      font-size: 24px/2;
      display: flex;
      justify-content: space-between;
      width: 702px/2;
      padding-bottom: 21px/2;
      border-bottom: 1px solid rgba(248, 248, 248, 1);
      color: rgba(153, 153, 153, 1);

      .elect {
        width: 370px/2;
        display: flex;
        justify-content: space-between;
        position: relative;

        .file_img {
          position: absolute;
          width: 33px/2;
          height: 29px/2;
          opacity: 0;
        }

        .elect_one {
          width: 300px/2;
          display: flex;

          input {
            font-size: 24px/2;
            height: 30px/2;
          }

          .elect_2 {
            margin-right: 10px/2;
            vertical-align: middle;
            width: 30px/2;
            height: 30px/2;
          }
        }

        .elect_1 {
          width: 33px/2;
          height: 29px/2;
        }
      }

      .elect_two {
        display: flex;

        span {
          margin-right: 10px/2;
        }

        img {
          width: 60px/2;
          height: 30px/2;
        }
      }
    }

    .img_index {
      width: 702px/2;
      margin: 80px auto 0;
      display: flex;
      justify-content: space-between;

      div {
        width: 230px/2;

        img {
          width: 100%;
          height: 230px/2;
        }
      }
    }
  }
</style>
