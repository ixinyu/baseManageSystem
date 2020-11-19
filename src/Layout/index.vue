<template>
  <div class="layout">
    <nav-Bar class="nav_top" />
    <div class="lay_contain">
      <sidebar class="nav_lf" v-if="!miniLayout"/>
      <el-drawer
        v-if="miniLayout"
        size="200px"
        title="功能nav"
        :visible.sync="drawer"
        :before-close="handleClose"
        direction="ltr"
        :with-header="false">
         <sidebar class="
         "/>
      </el-drawer>
      <div class="page">
        adfwrfw
        <transition name="fade-transform" mode="out-in">
          
          <router-view  />
        </transition>
      </div>
    </div>  
  </div>
</template>
<script>
import navBar from "./components/navBar";
import sidebar from "./components/sidebar";
import ResizeMixin from './mixin/index'
export default {
  name:'Layout',
  components:{
    navBar,
    sidebar
  },
  mixins: [ResizeMixin],
  computed:{
    miniLayout(){
      return this.$store.state.miniLayout
    },
    drawer(){
      return this.$store.state.drawer
    }
  },
  methods:{
    handleClose(){
      this.$store.commit('changeDrawer',false)
    }
  }
}
</script>

<style lang="scss" scoped>
.layout{
  height: 100%;
  .nav_top{
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 8888;
    border-top: 1px solid #eaecef;
    background: pink;
  }
    .lay_contain{
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      .el-drawer__wrapper{
        margin-top: 80px;
      }
      
      @media screen and (min-width: 992px) {
        .nav_lf{
          height: 100%;
          width: 200px;
          position: fixed;
          top:80px;
          // margin-top: 80px;
          background: powderblue;
          box-sizing: border-box;
        }
        .page{
          height: calc(100vh - 80px);
          width: calc(100% - 200px);
          padding-left: 200px;
          margin-top: 80px;
          background: peachpuff;
        }
      }
      @media screen and (max-width:992px) { 
        .nav_lf{
          height: 100%;
          width: 200px;
          position: fixed;
          top:80px;
          // margin-top: 80px;
          background: powderblue;
        }
        .page{
          height: 100%;
          width: 100%;
          margin-top: 80px;
          background: peachpuff;
        }
      }
    }
}



</style>