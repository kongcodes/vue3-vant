<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '@/api/login.js';
import { Toast } from 'vant';
const router = useRouter();
defineProps({
  msg: String,
});

function go () {
  router.push({ path: '/teaminfo' });
}

function loginBtn () {
  Toast.loading({
    message: '加载中...',
    duration: 0,
  });
  const query = {
    refer: '0LPsVz0iL/CQEUzXenWMGw==',
  };
  login(query).then((res) => {
    console.log(res);
  });
}
</script>

<template>
  <!-- node-sass  axios  env环境测试 -->
  <h1 @click="go">{{ msg || '点击跳转到下一页' }}</h1>

  <h1 class="h1">登录页</h1>
  <van-button @click="loginBtn" type="primary">登录调接口</van-button>
</template>

<style scoped>
a {
  color: #42b983;
}
.h1 {
  font-size: 26px;
}
</style>
