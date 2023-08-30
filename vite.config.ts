import { defineConfig, loadEnv} from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from 'vite-plugin-eslint'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const IS_PRODUCTION = process.env.NODE_ENV === "production";

//https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      vue(),
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        dts: './auto-imports.d.ts'
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: './components.d.ts',
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),
    ],
    server: {
      host: true,
      port: 8080,
      proxy: {}
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
        "*": resolve("")
      }
    },
    base: IS_PRODUCTION ? "/aoliaoli" :   "./", 
    define: {
      "process.env": {}
    },
    build: {
      outDir: resolve(__dirname, "dist")
    }
  });
