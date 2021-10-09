import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    nombreLogin: "Este es el ensayo",
    loginOK: false,
    view: ""
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    cambiarUsuario(state, payload) {
      state.nombreLogin = payload;
    },
    cambiarEstadoLogin(state, payload) {
      state.loginOK = payload;
    },
    setCurrentView(state, payload){
      state.view = payload;
    }
  },
  actions: {
    //Obtener/Consultar usuarios
    async getUsers({ commit }) {
      //const peticion = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
      const peticion = await fetch('http://localhost:3000/users');
      const data = await peticion.json();
      console.log(data);
      commit('setUsers', data);
    },
    //Eliminar personaje mediante su id
    async deleteUsers({ commit }, users) {
      const peticion = await fetch('http://localhost:3000/users', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(users)
      });
    },
    //Agregar Personajes
    async setUsers({ commit }, users) {
      const peticion = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(users)
      });
    },
  },
  modules: {
  },
  getters: {
    //Así queda menos ordenado
    // getCurrentUser(state){
    //   return state.nombreLogin;
    // }
  }
})
