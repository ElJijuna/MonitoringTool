import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import { mockDevServerPlugin } from 'vite-plugin-mock-dev-server';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import { githubPagesSpa } from '@sctg/vite-plugin-github-pages-spa';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
  const envs = loadEnv(mode, process.cwd());
  const { VITE_APP_BASE_URL } = envs;

  return ({
    base: VITE_APP_BASE_URL,
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
      githubPagesSpa({
        verbose: true,
      }),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
        manifest: {
          name: 'Monitoring Tool',
          short_name: 'MonitoringTool',
          description: 'A monitoring tool for your applications',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ]
        },
        workbox: {
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024 // 5MB
        }
      }),
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
});
