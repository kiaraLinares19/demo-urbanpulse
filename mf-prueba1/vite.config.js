import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  envPrefix: 'TE_',
  plugins: [
    react(),
    federation({
      name: 'mf_prueba1',
      filename: 'remoteEntry.js',
      exposes: { './Prueba1': './src/Prueba1.jsx' },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: { target: 'esnext' },
  server: { port: 5001 },
  preview: { port: 5001 },
});
