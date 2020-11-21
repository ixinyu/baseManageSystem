<template>
  <div class="navbar flex between a-center">
    <div class="lf">
      <i v-if="miniLayout" class="el-icon-s-operation" @click="changeCollapse" />
      <img v-if="!miniLayout" class="logo_img" src="../../assets/logo.png" alt="">
    </div>
    <div>
     <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link flex a-center">
          <el-avatar size="large" icon="el-icon-user-solid" />
          <i class="el-icon-arrow-down el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name:'navBar',
  computed:{
    miniLayout(){
      return this.$store.state.miniLayout
    }
  },
  methods:{
    changeCollapse(){
     this.$store.commit('changeDrawer',!this.$store.state.drawer)
    },
    handleCommand(command) {
      sessionStorage.removeItem('token')
      if (command === 'loginout') {
        this.$router.push('/dome2')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar{
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
}
.logo_img {
    height: 50px;
}
</style>