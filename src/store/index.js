import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
const db = firebase.database()
const usersRef = db.ref('/users')
const provider = new firebase.auth.GoogleAuthProvider()

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      users: [],
    },
    getters: {
      users: state => state.users,
      user: state => state.user
    },
    mutations: {
      setCredential (state, { user }) {
        state.user = user
      },
      ...firebaseMutations
    },
    actions: {
      async SET_CREDENTIAL ({commit}, { user }) {
        if (!user) return
        await usersRef.child(user.email.replace('@', '_at_').replace(/\./g, '_dot_')).set({
          name: user.displayName,
          email: user.email,
          icon: user.photoURL
        })
        commit('setCredential', { user })
      },
      // async INIT_SINGLE ({commit}, { id }) {},
      INIT_USERS: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('users', usersRef)
      }),
      callSignIn () {
        alert('sign in')
        firebase.auth().signInWithRedirect(provider)
      },
      callSingOut() {
        alert('sign out')
        firebase.auth().signOut().then(() => {
          location.reload()
        })
      }
    }
  })
}

export default createStore
