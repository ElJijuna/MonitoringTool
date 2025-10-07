import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import { mockDevServerPlugin } from 'vite-plugin-mock-dev-server';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { githubPagesSpa } from '@sctg/vite-plugin-github-pages-spa';

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
});
