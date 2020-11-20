<template>
  <div class="sidebar">
    <el-menu
      mode="vertical"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="select"
    >
      <sidebarItem v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
    </el-menu>
  </div>
</template>

<script>
import sidebarItem from './sidebarItem'
export default {
  name: 'Sidebar',
  components: {
    sidebarItem
  },
  data() {
    return {
    }
  },
  computed: {
    routes() {
      // console.log(this.$router.options.routes)
      return this.$router.options.routes
    }
  },
  methods: {
    select() {
      if (this.$store.state.miniLayout) {
        this.$store.commit('changeDrawer', false)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.sidebar{
  background: #545c64;
}
</style>
