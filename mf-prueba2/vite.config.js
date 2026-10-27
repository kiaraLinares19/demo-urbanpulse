import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  envPrefix: 'TE_',
  plugins: [
    react(),
    federation({
      name: 'mf_prueba2',
      filename: 'remoteEntry.js',
      exposes: { './Prueba2': './src/Prueba2.jsx' },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: { target: 'esnext' },
  server: { port: 5002 },
  preview: { port: 5002 },
});
