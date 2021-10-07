import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Simulador from '../views/Simulador.vue'
import InicioSesion from '../views/InicioSesion.vue'
import Cursos from '../views/Cursos.vue'
import Prestamos from '../views/Prestamos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Servicios.vue')
  }, 
  {
    path: '/simulador',
    name: 'Simulador',
    component: () => import(/* webpackChunkName: "about" */ '../views/Simulador.vue')
  },
  {
    path: '/login',
    name: 'InicioSesion',
    component: () => import(/* webpackChunkName: "about" */ '../views/InicioSesion.vue')
  },
  {
    path: '/Cursos',
    name: 'Cursos',
    component: Cursos
  },
  {
    path: '/Prestamos',
    name: 'Prestamos',
    component: Prestamos 
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
