import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const state = {
  isShow: false, //城市选择
  companyShow: false, //公司对比选择
  stylistShow: false,//
  followShow: false,//客情角色选择

};


const getters = {
  //城市
  isShowMethod(state) {
    return state.isShow;
  },
  //对比公司
  isShowCompany(state) {
    return state.companyShow;
  },
  //设计师
  isShowStylist(state) {
    return state.stylistShow;
  },
  //客情角色
  isShowFollow(state) {
    return state.followShow;
  },
};


const actions = {
  //城市选择
  showSideBar({
                commit
              }) {
    commit('showBar')
  },
  hideSideBar({
                commit
              }) {
    commit('hideBar')
  },
  //对比公司选择
  showCompanyBar({
                   commit
                 }) {
    commit('showCompany')
  },
  hideCompanyBar({
                   commit
                 }) {
    commit('hideCompany')
  },
  //设计师选择
  showStylistBar({
                   commit
                 }) {
    commit('showStylist')
  },
  hideStylistBar({
                   commit
                 }) {
    commit('hideStylist')
  },
  //客情角色选择
  showFollowBar({
                  commit
                }) {
    commit('showFollow')
  },
  hideFollowBar({
                  commit
                }) {
    commit('hideFollow')
  },
};


const mutations = {
  //城市选择
  showBar(state) {
    state.isShow = true;
  },
  hideBar(state) {
    state.isShow = false;
  },
  //对比公司选择
  showCompany(state) {
    state.companyShow = true;
  },
  hideCompany(state) {
    state.companyShow = false;
  },
  //设计师选择
  showStylist(state) {
    state.stylistShow = true;
  },
  hideStylist(state) {
    state.stylistShow = false;
  },
  //客情角色选择
  showFollow(state) {
    state.followShow = true;
  },
  hideFollow(state) {
    state.followShow = false;
  },
};
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
