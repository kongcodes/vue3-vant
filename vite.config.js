import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import styleImport, { VantResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), styleImport({ resolves: [VantResolve()] })],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  base: './',
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        //引入index.scss全局预定义变量
        additionalData: '@import "./src/styles/index.scss";',
      },
    },
  },
  server: {
    host: '0.0.0.0',
  },
});
