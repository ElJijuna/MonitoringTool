import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import { mockDevServerPlugin } from 'vite-plugin-mock-dev-server';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/MonitoringTool/',
  plugins: [
    tanstackRouter({
      target: 'react',
      importRoutesUsingAbsolutePaths: true
    }),
    react(),
    mockDevServerPlugin({
      prefix: '/api',
      log: 'debug',
      cors: false,
    }),
    viteStaticCopy({
      targets: [
        {
          src: resolve(__dirname, 'dist/*'),
          dest: resolve(__dirname, 'docs')
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    cors: false,
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        ws: false,
      },
    },
  },
});
