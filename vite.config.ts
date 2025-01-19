import { defineConfig } from 'vite';
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  // plugins: [react()],
  build : {
    lib : {
      entry: path.resolve(__dirname, "./src/stories/index.tsx"),
      name: "DesignSystemLibrary",
      fileName: (format) => `ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Exclude peer dependencies
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true, // Optional: Generate source maps
  }
})
