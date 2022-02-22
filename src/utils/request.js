import axios from 'axios';
// 返回错误时可以使用vant的弹框
// import { Toast } from 'vant';

// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASEURL,
  timeout: 30 * 1000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data; // 根据接口返回参数自行处理

    if (res.code !== 10200) {
      if (res.code === 50000) {
        alert('服务器内部出现异常，请稍后再试');
      }
      return Promise.reject(new Error(res.msg || 'Error'));
    } else {
      return Promise.resolve(res);
    }
  },
  (error) => {
    console.log('err' + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
