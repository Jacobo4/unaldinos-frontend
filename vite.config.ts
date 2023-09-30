import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true,
  },
  resolve:{
    alias:{
      '@root' : path.resolve(__dirname, './src'),
      '@assets' : path.resolve(__dirname, './src/assets'),
      '@styles' : path.resolve(__dirname, './src/styles'),
      '@layout' : path.resolve(__dirname, './src/layout'),
      '@config' : path.resolve(__dirname, './src/config'),
      '@pages' : path.resolve(__dirname, './src/pages'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@provider' : path.resolve(__dirname, './src/context'),
      '@context' : path.resolve(__dirname, './src/context'),
      '@api' : path.resolve(__dirname, './src/api'),
    },
  },
  plugins: [react(),svgr()],
});
