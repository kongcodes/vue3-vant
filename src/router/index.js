import { createRouter, createWebHashHistory } from 'vue-router';
const Login = () => import('@/views/login/Login.vue');
const TeamInfo = () => import('@/views/team/TeamInfo.vue');

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '1-测试页',
    },
  },
  {
    path: '/teaminfo',
    name: 'teaminfo',
    component: TeamInfo,
    meta: {
      title: '2-测试页',
    },
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
