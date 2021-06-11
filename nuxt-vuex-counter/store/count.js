export const state = () => ({
  count: 0
})

export const mutations = {
  countUp(state, payload) {
    state.count += payload
  },
  reset(state) {
    state.count = 0
  }
}

export const actions = {
  countUpAction(context, payload) {
    context.commit('countUp', payload)
  },
  resetAction(context) {
    context.commit('reset')
  }
}