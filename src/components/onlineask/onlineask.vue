<template>
  <div class="online-ask">
    <div class="headernavigation">
      <img class="back" src="../../../static/image/login/fanhui.png" alt="" @click="goBack">
      在线问答
      <img @click="onclickSeek" class="search" src="../../../static/image/choicenessstylist/tousousu.png" alt="">
    </div>

    <!--tabBar-->
    <div class="tabBar">
      <p @click="tabBarOne" :class="tabBarindex==0?'onclick':'notclick'">大家都在看</p>
      <p @click="tabBarTwo" :class="tabBarindex==1?'onclick':'notclick'">我要提问</p>
      <p @click="tabBarThree" :class="tabBarindex==2?'onclick':'notclick'">我要回答</p>
    </div>
    <!--大家都在看-->
    <div class="mentoringbox" v-show="tabBarindexOne">
      <div class="mentoringbox">
        <div class="mentoringlist" @click="goIssueDetails(item.que_id)" v-for="item in queList">
          <div :class="item.inter_img==''?'active':'mentoringone'">
            <h1><span v-show="item.reward_points>0&&item.inter_status==0"><img
              src="../../../static/image/index/qian.png"/>{{item.reward_points}}</span>
              {{item.inter_title}}
            </h1>
            <p class="twolines">{{item.inter_content}}</p>
            <p class="threelines"></p>
            <p class="fourlines">{{item.browse_times}}人看过</p>
          </div>
          <img v-lazy="'http://image.meijujingxuan.com/'+item.inter_img" v-show="item.inter_img!=''"/>
        </div>
      </div>
    </div>
    <infinite-loading :on-infinite="getQueList" ref="infiniteLoading">
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
    components: {
      InfiniteLoading
    },
    name: "zaixianwendadajiadouzaikan",
    data() {
      return {
        tabBarindex: 0,
        tabBarindexOne: true,//大家都在看
        tabBarindexTwo: false,//我要提问
        tabBarindexThree: false,//我要回答
        queList: "",
        imgBol: true,
        page: 0
      }
    },
    mounted() {
      if (localStorage.userId == undefined) {
        localStorage.setItem('userId', "")
      }
      this.getQueList();
    },
    methods: {
      //大家都在看
      tabBarOne() {
        this.tabBarindexOne = true;
        this.tabBarindexTwo = false;//我要提问
        this.tabBarindexThree = false;//我要回答
        this.tabBarindex = 0;
      },
      //我要提问
      tabBarTwo() {
        this.$router.push({
          name: "zaixianwendawoyaotiwen"
        });
        this.tabBarindexOne = false;
        this.tabBarindexTwo = true;//我要提问
        this.tabBarindexThree = false;//我要回答
        this.tabBarindex = 1;
      },
      //我要回答
      tabBarThree() {
        this.$router.push({
          name: "zaixianwendawoyaohuida"
        });
        this.tabBarindexOne = false;
        this.tabBarindexTwo = false;//我要提问
        this.tabBarindexThree = true;//我要回答
        this.tabBarindex = 2;
      },
      //点击搜索
      onclickSeek() {
        this.$router.push({
          name: "seek"
        })
      },
      //返回上一页
      goBack() {
        this.$router.go(-1)
      },
      //在线问答
      getQueList() {
        this.$vux.loading.show();
        this.page++;
        let data = {
          page: this.page,
          order_condition: 2,
          type_id: "",
          inter_status: 2,
          inter_title: "",
          user_id: localStorage.userId
        };
        this.$index.GetQueList(data).then((res) => {
          console.log(res.data.data)
          if (res.data.data.length) {
            var data = res.data.data;
            for (let i = 0; i < data.length; i++) {
              data[i].logo_path = this.$imgSrc + data[i].logo_path
            }
            this.queList = [...this.queList, ...data];
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
          } else {
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
          }
          this.$vux.loading.hide();
        }).catch((err) => {
          console.log(err);
        })
      },
      //问题详情
      goIssueDetails(id) {
        this.$router.push({
          name: "woyaohuidaxiangqingye",
          query: {
            id: id
          }
        })
      },
    }
  }
</script>

<style scoped lang="less">
  @import "onlineask.less";
</style>
