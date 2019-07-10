<template>
  <div id="bulls">
    <div class="bulls-deal">
      <div
        v-for="item in dealBulls"
        class="bulls-deal-item"
        :key="item.id"
        :value="item.value"
        :type="item.type"
      ><img :src="require(`@/assets/pokers/${item.id}.png`)"></div>
    </div>
    <div class="bulls-all">
      <img v-for="item in bulls" :key="item.id" :src="require(`@/assets/pokers/${item.id}.png`)" />
    </div>
    <div class="bulls-button">
      <button id="bulls-deal-button" @click="bullsDeal()">deal</button>
      <button id="bulls-next-button" @click="bullsClear()">next</button>
      <button id="bulls-reset-button" @click="bullsReset()">reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bulls',
  data () {
    return {}
  },
  computed: {
    bulls () {
      return this.$store.state.bulls.bulls
    },
    dealBulls () {
      return this.$store.state.bulls.deals
    }
  },
  mounted () {
    this.bullsReset()
    this.test()
  },
  methods: {
    bullsDeal () {
      let vue = this
      let dealItems = document.querySelectorAll('.bulls-deal-item')
      if (dealItems.length === 5) {
        console.log('full!')
        return
      }
      let bulls = vue.bulls
      let index = Math.floor(Math.random() * bulls.length)
      this.pushDeals(index, 1)
    },
    bullsClear () {
      this.$store.commit('setDeals', [])
    },
    bullsReset () {
      this.initBulls()
      this.bullsClear()
      this.$store.commit('spliceBulls', { index: 40, number: 14 })
    },

    initBulls () {
      this.$store.commit('setBulls', this.$store.state.bulls.bullsAll)
    },
    pushDeals (i, n) {
      this.$store.commit('pushDeals', {
        index: i,
        number: n
      })
    },
    test () {}
  }
}
</script>

<style lang="scss">
@import "@/styles/views/bulls.scss";
</style>
