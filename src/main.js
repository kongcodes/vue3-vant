import { createApp } from 'vue';
import App from './App.vue';

import router from './router/index.js';
import './utils/permission';

import vant from './plugins/vant';

const app = createApp(App);
app.use(router);
app.use(vant);
app.mount('#app');
