// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',    // 'localhost' es el valor por defecto, pero lo puedes especificar explícitamente si quieres
    open: true,           // Abre el navegador automáticamente
  },
});
