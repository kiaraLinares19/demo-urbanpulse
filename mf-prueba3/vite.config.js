import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  envPrefix: 'TE_',
  plugins: [
    react(),
    federation({
      name: 'mf_prueba3',
      filename: 'remoteEntry.js',
      exposes: { './Prueba3': './src/Prueba3.jsx' },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: { target: 'esnext' },
  server: { port: 5003 },
  preview: { port: 5003 },
});
