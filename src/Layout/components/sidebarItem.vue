<template>
  <div v-if="!item.hidden">
    <fragment v-if="hasOneShowingChild(item.children,item)&&!item.hidden">
      <router-link :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index='resolvePath(onlyOneChild.path)'>
          <i :class="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)"></i>
          <span slot="title">{{onlyOneChild.meta.title||(item.meta&&item.meta.title)}}</span>
        </el-menu-item>
      </router-link>
    </fragment>

    <el-submenu v-else :index='resolvePath(item.path)'>
      <template slot="title">
        <i :class="item.meta && item.meta.icon"></i>
        <span>{{item.meta.title}}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :basePath="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
export default {
  name:'sidebarItem',
  props:{
    item:{
      type:Object,
      required: true
    },
    basePath:{
      type:String,
      default: ''
    }
  },
  data(){
    return{
      onlyOneChild:null
    }
  },
  mounted(){
    // console.log(this.item)
  },
  methods:{
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (this.isExternal(routePath)) {
        return routePath
      }
      if (this.isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    },
    isExternal(path) {
      return /^(https?:|mailto:|tel:)/.test(path)
    }
  }
}
</script>

<style>

</style>
