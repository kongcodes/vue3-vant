import { createRouter, createWebHashHistory } from 'vue-router';
const Login = () => import('@/views/login/Login.vue');
const TeamInfo = () => import('@/views/team/TeamInfo.vue');

const routes = [
  {
    path: '/',
    redirect: '/login',
    component: Login,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/teaminfo',
    component: TeamInfo,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
