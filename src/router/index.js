import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

export default new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});