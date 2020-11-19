<template>
  <div class="navbar flex between a-center">
    <div class="lf">
      <i v-if="miniLayout" class="el-icon-s-operation" @click="changeCollapse"></i>
    </div>
    <div>
      <button>11</button>
      <button class="ml20">22</button>
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
</style>