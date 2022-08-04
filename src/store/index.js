import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userid: 0,
    teamid: 0,
    teamname: "无名企业",
    projectid: 0,
    projectname: "无名项目",
    documentid: 0,
    documentname: "无名文档"
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
