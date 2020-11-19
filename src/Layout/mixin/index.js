import store from '../../store/index'

const { body } = document
const WIDTH = 992 // refer to Bootstrap's responsive design

export default{
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  mounted() {
    const isMobile = this.$_isMobile()
    if (isMobile) {
      store.commit('changeLayout',true)
    }
  },
  methods:{
    $_isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    $_resizeHandler() {
      const isMobile = this.$_isMobile()
      if (isMobile) {
        store.commit('changeLayout',true)
      }else{
        store.commit('changeLayout',false)
      }
      // console.log(store.state.miniLayout)
    }
  }
}