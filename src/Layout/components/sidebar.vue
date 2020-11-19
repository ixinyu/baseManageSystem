<template>
  <div >
    <el-menu
      mode="vertical"
      @select='select'>
      <sidebarItem v-for="route in routes" :key="route.path" :item="route" :basePath="route.path" />
    </el-menu>
  </div>
</template>

<script>
import sidebarItem from './sidebarItem';
export default {
  name:'sidebar',
  components:{
    sidebarItem
  },
  computed:{
    routes(){
      // console.log(this.$router.options.routes)
      return this.$router.options.routes
    }
  },
  data(){
    return{
    }
  },
  methods:{
    select(key, keyPath){
       console.log(key, keyPath);
    }
  }
}
</script>

<style>

</style>