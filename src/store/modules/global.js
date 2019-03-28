export default {
  state: {
    loading: false
  },
  mutations: {
    SET_LOADING_FALSE: (state) => {
      state.loading = false
    },
    SET_LOADING_TRUE: (state) => {
      state.loading = true
    }
  },
  getters: {
    loading: state => state.loading
  },
  actions: {
  }
}
