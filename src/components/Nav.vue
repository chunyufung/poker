<template>
  <div id="nav">
    <div class="poker-nav" @click="activeUnderLine()">
      <!-- vue-note: 路由标签被激活时, 父路由获得class="router-link-active", 子路由获得class="router-link-exact-active" -->
      <router-link
        class="poker-nav-item"
        :class="$route.path === navItem.path ? 'is-active' : '' "
        v-for="navItem in navItems"
        :key="navItem.path"
        :to="navItem.path"
      >{{navItem.content}}</router-link>
      <div class="underLine"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    navItems () {
      return this.$store.state.nav.navItems
    }
  },
  created () {
  },
  mounted () {
    this.activeUnderLine()
  },
  updated () {
    this.activeUnderLine()
  },
  methods: {
    activeUnderLine () {
      let nav = document.querySelector('.poker-nav')
      let activeNavItemNode = nav.querySelector('.is-active')
      let underLineNode = nav.querySelector('.underLine')
      let styleLeft
      underLineNode.style.transition = 'all 0.2s'

      function initActiveUnderLine () {
        if (activeNavItemNode && underLineNode) {
          // console.log(activeNavItemNode)

          styleLeft =
            activeNavItemNode.offsetLeft +
            activeNavItemNode.clientWidth / 2 -
            underLineNode.clientWidth / 2

          underLineNode.style.left = styleLeft + 'px'
        }
      }
      initActiveUnderLine()
    },
    slideUnderLine () {}

  }
}
</script>

<style lang="scss">
@import "@/styles/index.scss";
#nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 52px;
  background: white;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  @include between(center, center);
  z-index: 1;
  .poker-nav {
    @include between(center, center);
    position: relative;
    .poker-nav-item {
      height: 52px;
      line-height: 50px;
      font-size: 13px;
      padding: 0 13px;
      font-weight: bold;
      cursor: pointer;
      &:hover,
      &.router-link-exact-active {
        color: $vue-light-green;
      }
    }
    .underLine {
      position: absolute;
      bottom: 0;
      width: 52px;
      height: 2px;
      background: $vue-light-green;
    }
  }
}

</style>
