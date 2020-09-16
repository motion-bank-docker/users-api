const auth = {
  namespaced: true,
  state: {
    token: null,
    user: null
  },
  getters: {
    hasToken: state => !!state.token
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setUser (state, user) {
      state.user = user
    }
  }
}

export default auth
