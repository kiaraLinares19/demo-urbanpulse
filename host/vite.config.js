import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

const enVercel = process.env.VERCEL === '1';

const remotes = enVercel
  ? {
      // Producción
      mf_prueba1: 'https://mf-prueba1.vercel.app/assets/remoteEntry.js',
      mf_prueba2: 'https://mf-prueba2.vercel.app/assets/remoteEntry.js',
      mf_prueba3: 'https://mf-prueba3.vercel.app/assets/remoteEntry.js',
    }
  : {
      // Local
      mf_prueba1: 'http://localhost:5001/assets/remoteEntry.js',
      mf_prueba2: 'http://localhost:5002/assets/remoteEntry.js',
      mf_prueba3: 'http://localhost:5003/assets/remoteEntry.js',
    };

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes,
      shared: ['react', 'react-dom'],
    }),
  ],
  build: { target: 'esnext' },
  server: { port: 5000 },
  preview: { port: 5000 },
});