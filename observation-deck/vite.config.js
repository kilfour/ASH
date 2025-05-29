import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: '.',
    publicDir: 'public',
    server: {
        port: 5173,
        open: '/index.html'
    },
    resolve: {
        alias: {
            '@aperture-core': path.resolve(__dirname, './src/@aperture-core')
        }
    }
});
