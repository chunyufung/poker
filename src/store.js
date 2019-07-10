import Vue from 'vue'
import Vuex from 'vuex'
import nav from '@/store/modules/nav'
import bulls from '@/store/modules/bulls'
import getters from '@/store/getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    nav,
    bulls
  },
  getters
})

export default store
