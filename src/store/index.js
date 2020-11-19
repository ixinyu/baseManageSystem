import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    miniLayout:false, //样式版本
    drawer:false, //左侧抽屉
  },
  getters:{
    getMiniLayout:state=>{
      state.miniLayout
    }
  },
  mutations:{
    changeLayout(state,data){
      state.miniLayout = data
    },
    changeDrawer(state,data){
      state.drawer = data
    }
  },
  actions:{
  
  }
})

export default store