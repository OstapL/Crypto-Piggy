import axios from 'axios'
const signUpApi = 'http://crypto-user.webdevelop.biz/signup'
const signInApi = 'http://crypto-user.webdevelop.biz/login'
export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    signUp ({commit}, { email, password, password2 }) {
      // console.log(email, password, password2)
      if (password === password2 || !password2) {
        console.log(email, password)
        axios.post(signUpApi, {
          email, password, password2
        })
        .then(user => {
          const newUser = {
            id: user.data.id
          }
          commit('setUser', newUser)
        })
        .catch((error) => {
          console.log(error)
        })
      } else {
        console.log('ERROR!!!')
      }
    },
    signIn ({commit}, {email, password}) {
      axios.post(signInApi, {
        email, password
      })
      .then(user => {
        const newUser = {
          id: user.data.id
        }
        commit('setUser', newUser)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}
