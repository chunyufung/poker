const bulls = {
  state: {
    deals: [],
    bulls: [],
    bullsAll: [
      { id: 0, content: 'ace_of_diamonds', type: 1, value: 1 },
      { id: 1, content: 'ace_of_clubs', type: 2, value: 1 },
      { id: 2, content: 'ace_of_hearts', type: 3, value: 1 },
      { id: 3, content: 'ace_of_spades', type: 4, value: 1 },
      { id: 4, content: '2_of_diamonds', type: 1, value: 2 },
      { id: 5, content: '2_of_clubs', type: 2, value: 2 },
      { id: 6, content: '2_of_hearts', type: 3, value: 2 },
      { id: 7, content: '2_of_spades', type: 4, value: 2 },
      { id: 8, content: '3_of_diamonds', type: 1, value: 3 },
      { id: 9, content: '3_of_clubs', type: 2, value: 3 },
      { id: 10, content: '3_of_hearts', type: 3, value: 3 },
      { id: 11, content: '3_of_spades', type: 4, value: 3 },
      { id: 12, content: '4_of_diamonds', type: 1, value: 4 },
      { id: 13, content: '4_of_clubs', type: 2, value: 4 },
      { id: 14, content: '4_of_hearts', type: 3, value: 4 },
      { id: 15, content: '4_of_spades', type: 4, value: 4 },
      { id: 16, content: '5_of_diamonds', type: 1, value: 5 },
      { id: 17, content: '5_of_clubs', type: 2, value: 5 },
      { id: 18, content: '5_of_hearts', type: 3, value: 5 },
      { id: 19, content: '5_of_spades', type: 4, value: 5 },
      { id: 20, content: '6_of_diamonds', type: 1, value: 6 },
      { id: 21, content: '6_of_clubs', type: 2, value: 6 },
      { id: 22, content: '6_of_hearts', type: 3, value: 6 },
      { id: 23, content: '6_of_spades', type: 4, value: 6 },
      { id: 24, content: '7_of_diamonds', type: 1, value: 7 },
      { id: 25, content: '7_of_clubs', type: 2, value: 7 },
      { id: 26, content: '7_of_hearts', type: 3, value: 7 },
      { id: 27, content: '7_of_spades', type: 4, value: 7 },
      { id: 28, content: '8_of_diamonds', type: 1, value: 8 },
      { id: 29, content: '8_of_clubs', type: 2, value: 8 },
      { id: 30, content: '8_of_hearts', type: 3, value: 8 },
      { id: 31, content: '8_of_spades', type: 4, value: 8 },
      { id: 32, content: '9_of_diamonds', type: 1, value: 9 },
      { id: 33, content: '9_of_clubs', type: 2, value: 9 },
      { id: 34, content: '9_of_hearts', type: 3, value: 9 },
      { id: 35, content: '9_of_spades', type: 4, value: 9 },
      { id: 36, content: '10_of_diamonds', type: 1, value: 10 },
      { id: 37, content: '10_of_clubs', type: 2, value: 10 },
      { id: 38, content: '10_of_hearts', type: 3, value: 10 },
      { id: 39, content: '10_of_spades', type: 4, value: 10 },
      { id: 40, content: 'jack_of_diamonds', type: 1, value: 11 },
      { id: 41, content: 'jack_of_clubs', type: 2, value: 11 },
      { id: 42, content: 'jack_of_hearts', type: 3, value: 11 },
      { id: 43, content: 'jack_of_spades', type: 4, value: 11 },
      { id: 44, content: 'queen_of_diamonds', type: 1, value: 12 },
      { id: 45, content: 'queen_of_clubs', type: 2, value: 12 },
      { id: 46, content: 'queen_of_hearts', type: 3, value: 12 },
      { id: 47, content: 'queen_of_spades', type: 4, value: 12 },
      { id: 48, content: 'king_of_diamonds', type: 1, value: 13 },
      { id: 49, content: 'king_of_clubs', type: 2, value: 13 },
      { id: 50, content: 'king_of_hearts', type: 3, value: 13 },
      { id: 51, content: 'king_of_spades', type: 4, value: 13 },
      { id: 52, content: 'black_joker', type: 5, value: 14 },
      { id: 53, content: 'red_joker', type: 6, value: 14 }
    ]
  },
  mutations: {
    setBulls (state, obj) {
      state.bulls = obj.concat()
    },
    setDeals (state, obj) {
      state.deals = obj
    },
    pushDeals (state, query) {
      let deal = state.bulls.splice(query.index, query.number)
      // console.log(deal[0])
      state.deals.push(deal[0])
      // console.log(state.deals)
    },
    spliceBulls (state, query) {
      state.bulls.splice(query.index, query.number)
    }
  },
  getters: {
    // pokers: state => {
    //   return state.pokers.filter(item => item.isDeal)
    // }
  }
}

export default bulls
