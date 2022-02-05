import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pluginEnv from 'vite-plugin-vue-env';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pluginEnv()
  ],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src')
    }
  }
})
