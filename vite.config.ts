import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [
    // react(),
    reactRefresh(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables";`
      },
    },
  },
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      "@components": path.resolve(__dirname, 'src/components/lib'),
      "@hooks": path.resolve(__dirname, 'src/hooks/lib'),
      "@constants": path.resolve(__dirname, 'src/constants/lib'),
      "@ui": path.resolve(__dirname, 'src/ui/lib'),
      "@icons": path.resolve(__dirname, 'src/icons/lib'),
      "@interfaces": path.resolve(__dirname, 'src/interfaces/lib'),
      "@utils": path.resolve(__dirname, 'src/utils/lib'),
      "@routes": path.resolve(__dirname, 'src/routes/routes'),
      "@layout": path.resolve(__dirname, 'src/layouts/lib'),
      "@store": path.resolve(__dirname, 'src/store'),
      "@context": path.resolve(__dirname, 'src/context/lib'),
      "@validation": path.resolve(__dirname, 'src/validation/lib'),
      "@axios": path.resolve(__dirname, 'src/axios/config'),
    },
  },
  define: {
    "process.env": {},
  },
  // server: {
  //   proxy: {
  //     '/api': 'http://localhost:8080'
  //   }
  // },
});
