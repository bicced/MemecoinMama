import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    nodePolyfills({
      include: ['stream'], 
      globals: {Buffer: true, process: true}
    })
  ],
  build: {
    rollupOptions: {
      plugins: [
        nodePolyfills({
          include: ['stream'],
          globals: {
            Buffer: true,
            process: true,
          }
        })
      ]
    }
  }
});