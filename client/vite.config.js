import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 this is required for "@/lib/utils"
      '@components': path.resolve(__dirname, './src/Components'),
    },
  },
   server: {
    historyApiFallback: true, 
  },
});
