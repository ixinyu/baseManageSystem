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
  //height: 100%;
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
      //box-sizing: border-box;
      .el-drawer__wrapper{
        margin-top: 80px;
      }
      .nav_lf{
        height: calc(100% - 80px);
        width: 200px;
        position: fixed;
        top:80px;
        bottom: 0;
        overflow-y: auto;
        box-sizing: border-box;
      }
     .page{
          padding: 20px;
          height: calc(100% - 120px);
          width: 100%;
          margin-top: 80px;
          overflow-y: auto;
          box-sizing: border-box;
      }
      @media screen and (min-width: 992px) {
        .page{
          padding-left: 200px;
        }
      }
      @media screen and (max-width:992px) { 
        .page{
          padding-left: 0;
        }
      }
    }
}



</style>
