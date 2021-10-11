import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    nombreLogin: "Este es el ensayo",
    loginOK: false,
    admin: false,
    view: "/",
    books: [],

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
    cambiarAdmin(state, payload) {
      state.admin = payload;
    },

    setCurrentView(state, payload) {
      state.view = payload;
    },
    setBooks(state, payload) {
      state.books = payload;
    },
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
    //Eliminar usuario mediante su id
    async deleteUsers({ commit }, users) {
      const peticion = await fetch('http://localhost:3000/users', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(users)
      });
    },
    //Agregar usuario
    async setUsers({ commit }, users) {
      const peticion = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(users)
      });
    },

    //Obtener/Consultar libros
    async getBooks({ commit }) {
      //const peticion = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
      const peticion = await fetch('http://localhost:3000/books');
      const data = await peticion.json();
      console.log(data);
      commit('setBooks', data);
    },

    //Agregar libro
    async setBooks({ commit }, books) {
      const peticion = await fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(books)
      });
    },

    //Actualizar libros
    async updateBooks({ commit }, books) {
      const peticion = await fetch('http://localhost:3000/books', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(books)
      });
    },

    //Eliminar libro mediante su id
    async deleteBooks({ commit }, books) {
      const peticion = await fetch('http://localhost:3000/books', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(books)
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
